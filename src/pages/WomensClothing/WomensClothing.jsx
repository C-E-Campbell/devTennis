import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import StoreGrid from "../../components/StoreGrid/StoreGrid";
import "../WomensClothing/WomensClothing.scss";
class WomensClothing extends React.Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
  }

  async componentDidMount() {
    const womensItems = this.props.items.inventory
      .filter(item => {
        return item.type === "Women";
      })
      .filter(item => {
        return item.category === "Top" || item.category === "Bottom";
      });

    this.setState({
      inventory: womensItems
    });
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

export default connect(mapStateToProps, null)(WomensClothing);
