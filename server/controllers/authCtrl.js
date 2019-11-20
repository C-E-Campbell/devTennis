const bcrypt = require("bcryptjs");
module.exports = {
  register: async (req, res) => {
    const { email, password } = req.body;
    const db = req.app.get("db");
    const checkForUser = await db.check_if_customer_exists([email]);
    if (checkForUser[0]) {
      res.status(409).send("User already exists, please login");
    } else {
      const hash = bcrypt.hashSync(password, 10);
      const user = await db.create_customer([email, hash]);
      req.session.user = {
        id: user[0].user_id,
        email: user[0].email
      };
      res.status(201).send(req.session.user);
    }
  },
  login: async (req, res, next) => {
    const { email, password } = req.body;
    const db = req.app.get("db");
    const checkForUser = await db.check_if_customer_exists([email]);
    if (!checkForUser[0]) {
      res.status(401).send("Cant find that account. You may need to register");
    } else {
      let checkPass = bcrypt.compareSync(password, checkForUser[0].password);
      if (checkPass) {
        req.session.user = {
          id: checkForUser[0].user_id,
          email: checkForUser[0].email
        };
        res.status(200).send(req.session.user);
      } else {
        res.status(401).send("not valid email/pass");
      }
    }
  },
  logout: (req, res, next) => {
    req.session.destroy();
    res.sendStatus(200);
  }
};
