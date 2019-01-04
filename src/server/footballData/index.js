const axios = require('axios');

class FootballData {
  
  async getMatchdayMatches() {
    try {
      const matchday = await this.getCurrentMatchday()
      const url = `http://api.football-data.org/v2/competitions/BL1/matches?matchday=${matchday}`
      const response = await this.call(url)
      const data = response.data
      console.log(data)
      return data
    } catch(err) {
      console.log(err)
    }
  };

  async getCurrentMatchday() {
    try {
      const url = 'http://api.football-data.org/v2/competitions/BL1'
      const response = await this.call(url)
      const matchday = response.data.currentSeason.currentMatchday
      return matchday
    } catch(err) {
      console.log(err)
    }
  }

  async call(url) {
    try {
      const response = await axios({
          method: 'get',
          url: url,
          headers: {'X-Auth-Token': process.env.FOOTBALL_DATA_API_KEY}
      })
      return response
    } catch(err) {
      console.log(err)
    }
  };
}

module.exports = FootballData;
