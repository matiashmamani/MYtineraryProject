import React from 'react';
import { connect } from 'react-redux';
import { getCities } from '../actions/cityAction';

class Cities extends React.Component {
    
  render() {
    
    const listItems = this.props.cities.map((city) => <li key={city._id}>{city.name}</li>);
    
    return (
      <div>
        <h1>Cities</h1>
        <ul>{listItems}</ul>
      </div>
    );
  }

  componentDidMount() {
    this.props.getCities();
  }

}

const mapStateToProps = (state) => {
  return {
    cities: state.cities
  }  
}

/* const mapDispatchToProps = (dispatch) => {
  return {
    fetchCities() {
      fetch(CITY_SERVICE_URL)
        .then(response => response.json())
        .then(result => dispatch({type: 'GET_CITIES', cities: result.cities}))
        .catch(err => console.log(err));
    }
  }
} */

export default connect(mapStateToProps, {getCities})(Cities);
