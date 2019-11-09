import React from 'react';

const CITY_SERVICE_URL = 'http://localhost:5000/city/all';

class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      cities: []
    };
  }
  
  render() {
    
    const listItems = this.state.cities.map((city) => <li key={city._id}>{city.name}</li>);
    
    return (
      <div>
        <h1>Cities</h1>
        <p>{this.state.isFetching ? 'Loading cities...' : ''}</p>
        <ul>{listItems}</ul>
      </div>
    );
  }

  async componentDidMount() {
    this.fetchCities()
  }

  fetchCities() {

    this.setState({
        cities: [],
        isFetching: true
    })

    fetch(CITY_SERVICE_URL)
      .then(response => response.json())
      .then(result => this.setState({
          cities: result.cities, 
          isFetching: false
        }))
      .catch(err => console.log(err));
  }
}

export default Cities;
