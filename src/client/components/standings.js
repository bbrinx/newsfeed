import React, { Component } from 'react';

class Standings extends Component {

  render() {
    return (
      <div className="standings">
        {this.props.data.map((match, index) => {
          const homeTeamScore = match.score.fullTime.homeTeam ? match.score.fullTime.homeTeam : '-' 
          const awayTeamScore = match.score.fullTime.awayTeam ? match.score.fullTime.awayTeam : '-'
          return (
            <div className="match" key={index}>
              <p className="team home">{match.homeTeam.name}</p>
              <p className="results">{homeTeamScore} : {awayTeamScore}</p>
              <p className="team away">{match.awayTeam.name}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Standings;