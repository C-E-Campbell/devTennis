import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import StoreGrid from "../../components/StoreGrid/StoreGrid";
import "../WomensClothing/WomensClothing.scss";

class MensClothing extends React.Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
  }

  async componentDidMount() {
    const mensItems = this.props.items.inventory
      .filter(item => {
        return item.type === "Men";
      })
      .filter(item => {
        return item.category === "Shoe";
      });

    this.setState({
      inventory: mensItems
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

export default connect(mapStateToProps, null)(MensClothing);
