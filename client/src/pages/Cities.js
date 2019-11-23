import React from 'react';
import Footer from '../components/Footer.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCities, setCitiesLoading } from '../actions/cityAction';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

class Cities extends React.Component {

  constructor(){
    super();
    this.state = {
      search: ''
    }
  }

  handleChange(event){
    this.setState({
      search: event.target.value
    });
  }

  render() {

    let filteredCities = this.props.city.cities.filter(
      (city) => {
        return city.name.toLowerCase().startsWith(this.state.search.toLowerCase()) === true;
      }
    );

    const listItems = filteredCities.map((city) =>
      <ListGroup.Item key={city._id}>
        <Link to={`./itineraries/${city._id}`}>{city.name}</Link>
      </ListGroup.Item>
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
        <ListGroup>{listItems}</ListGroup>
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
  return bindActionCreators({getCities, setCitiesLoading}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
