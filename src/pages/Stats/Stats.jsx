import React, { Component } from "react";
import axios from "axios";
import "./Stats.scss";
import StatItem from "../../components/StatItem/StatItem";
import { Link } from "react-router-dom";
export default class Stats extends Component {
  constructor() {
    super();
    this.state = {
      topWomen: [],
      topMen: [],
      topDoublesMen: [],
      topDoublesWomen: [],
      showWomen: false,
      showMen: false,
      showDoublesMen: false,
      showDoublesWomen: false,
      showTourney: false,
      loading: true
    };
  }
  getData = async () => {
    const Top20 = await axios.get(
      "https://cors-anywhere.herokuapp.com/http://api.sportradar.us/tennis-t2/en/players/race_rankings.json?api_key=pfm8bdbh8nq9ukgfuba68wdd"
    );

    this.setState({
      topWomen: Top20.data.rankings[0].player_rankings.slice(0, 20),
      topMen: Top20.data.rankings[1].player_rankings.slice(0, 20),

      showWomen: true,
      loading: false
    });
  };
  getDoubles = async () => {
    const Top20Doubles = await axios.get(
      "https://cors-anywhere.herokuapp.com/http://api.sportradar.us/tennis-t2/en/double_teams/rankings.json?api_key=pfm8bdbh8nq9ukgfuba68wdd"
    );
    this.setState({
      topDoublesMen: Top20Doubles.data.rankings[1].player_rankings.slice(0, 20),
      topDoublesWomen: Top20Doubles.data.rankings[0].player_rankings.slice(
        0,
        20
      )
    });
  };
  async componentDidMount() {
    window.scrollTo(0, 0);
    this.getData();
  }

  render() {
    const mappedWomens = this.state.topWomen.map(player => {
      return (
        <StatItem
          key={player.player.name}
          name={player.player.name}
          rank={player.rank}
          played={player.tournaments_played}
          points={player.points}
          nationality={player.player.nationality}
        />
      );
    });
    const mappedMens = this.state.topMen.map(player => {
      return (
        <StatItem
          key={player.player.name}
          name={player.player.name}
          rank={player.rank}
          played={player.tournaments_played}
          points={player.points}
          nationality={player.player.nationality}
        />
      );
    });
    const mappedDoublesMens = this.state.topDoublesMen.map(player => {
      return (
        <StatItem
          key={player.player.name}
          name={player.player.name}
          rank={player.rank}
          played={player.tournaments_played}
          points={player.points}
          nationality={player.player.nationality}
        />
      );
    });
    const mappedDoublesWomens = this.state.topDoublesWomen.map(player => {
      return (
        <StatItem
          key={player.player.name}
          name={player.player.name}
          rank={player.rank}
          played={player.tournaments_played}
          points={player.points}
          nationality={player.player.nationality}
        />
      );
    });

    return (
      <div className="stats-page">
        <header className="stats-header">
          <Link to="/">Home</Link>
        </header>
        <div className="stats-container">
          <div className="stat-links">
            <h3>Player Rankings</h3>
            <h4
              onClick={() => {
                this.setState({
                  showWomen: true,
                  showMen: false,
                  showDoublesMen: false,
                  showDoublesWomen: false,
                  showTourney: false
                });
              }}
            >
              Top 20 Womens
            </h4>
            <h4
              onClick={() => {
                this.setState({
                  showWomen: false,
                  showMen: true,
                  showDoublesMen: false,
                  showDoublesWomen: false,
                  showTourney: false
                });
              }}
            >
              Top 20 Mens
            </h4>
            <h4
              onClick={async () => {
                await this.getDoubles();
                this.setState({
                  showWomen: false,
                  showMen: false,
                  showDoublesMen: false,
                  showDoublesWomen: true,
                  showTourney: false
                });
              }}
            >
              Doubles Rankings Women
            </h4>
            <h4
              onClick={async () => {
                await this.getDoubles();
                this.setState({
                  showWomen: false,
                  showMen: false,
                  showDoublesMen: true,
                  showDoublesWomen: false,
                  showTourney: false
                });
              }}
            >
              Doubles Rankings Men
            </h4>
          </div>
          {this.state.loading ? (
            <div className="ui segment myLoader">
              <div className="ui active inverted dimmer">
                <div className="ui text loader">Grabbing Tennis Stats</div>
              </div>
              <p></p>
            </div>
          ) : (
            <div className="stat-data">
              {this.state.showWomen ? mappedWomens : null}
              {this.state.showMen ? mappedMens : null}
              {this.state.showDoublesMen ? mappedDoublesMens : null}
              {this.state.showDoublesWomen ? mappedDoublesWomens : null}
            </div>
          )}
        </div>
      </div>
    );
  }
}
