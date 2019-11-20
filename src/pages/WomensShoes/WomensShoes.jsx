import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import StoreGrid from "../../components/StoreGrid/StoreGrid";
import "../WomensClothing/WomensClothing.scss";
class WomensShoes extends React.Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.items.inventory[0]) {
      const womensItems = this.props.items.inventory
        .filter(item => {
          return item.type === "Women";
        })
        .filter(item => {
          return item.category === "Shoe";
        });

      this.setState({
        inventory: womensItems
      });
    } else {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
        </header>
        <section className="mensPage">
          <Header />
          <StoreGrid clothing={this.state.inventory} />
          <Footer />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, null)(WomensShoes);
