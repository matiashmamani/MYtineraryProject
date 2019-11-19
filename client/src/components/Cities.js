import React from 'react';
import Footer from './Footer.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCities, setCitiesLoading, setActiveItinerary } from '../actions/cityAction';
import PropTypes from 'prop-types';

class Cities extends React.Component {

  //TBD
  constructor(){
    super();
    this.state = {
      search: ''
    }
  }

  //TBD
  handleChange(event){
    this.setState({
      search: event.target.value
    });
  }

  render() {
    //TBD
    let filteredCities = this.props.city.cities.filter(
      (city) => {
        return city.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    const listItems = filteredCities.map((city) =>
      <li key={city._id}>
        <Link to='./Itineraries' onClick={(e)=>this.props.setActiveItinerary(city.name)}>{city.name}</Link>
      </li>
    );

    return (
      <div>
        <br></br>
        <input 
          type='text'
          placeholder='Search a City...'
          value={this.state.search} 
          onChange={this.handleChange.bind(this)}
        />

        <p>{this.props.city.loading ? 'Loading cities...' : ''}</p>
        <ul>{listItems}</ul>
        <Footer/>
      </div>
    );
  }

  componentDidMount() {
    this.props.setCitiesLoading();
    this.props.getCities();
  }

}

Cities.propTypes = {
  city: PropTypes.object.isRequired,
  setCitiesLoading: PropTypes.func.isRequired,
  getCities: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    city: state.city
  }  
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCitiesLoading: () => { 
      dispatch(setCitiesLoading());
    },
    getCities: () => {
      fetch('http://localhost:5000/city/all')
          .then(response => response.json())
          .then(result => dispatch(getCities(result.cities)))
          .catch(err => console.log(err));
    },
    setActiveItinerary: (name) => {
      dispatch(setActiveItinerary(name));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
