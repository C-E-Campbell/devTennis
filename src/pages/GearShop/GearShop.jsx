import React from "react";
import { connect } from "react-redux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./GearShop.scss";
import StoreGrid from "../../components/StoreGrid/StoreGrid";
import "../WomensClothing/WomensClothing.scss";
import BasicHeader from "../../components/BasicHeader/BasicHeader";
class Gear extends React.Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.items.inventory[0]) {
      const gearItems = this.props.items.inventory.filter(item => {
        return item.category === "Gear";
      });

      this.setState({
        inventory: gearItems
      });
    } else {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div>
        <BasicHeader />
        <section className="mensPage">
          <Header />
          <div className="gearHero">
            <h2>The Best The Game Has To Offer...</h2>
          </div>
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

export default connect(mapStateToProps, null)(Gear);
