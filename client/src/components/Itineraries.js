import React from 'react';
import { connect } from 'react-redux';
import { getItineraries } from '../actions/itineraryAction';

class Itineraries extends React.Component {

  render() {
    
    console.log('iti');
    console.log(this.props.itinerary.itinerary.itineraries);
    return (
      <div>
        <h1>Itinerary: {this.props.city.activeItinerary}</h1>
      </div>
    );
  }

  componentDidMount() {
    this.props.getItineraries();
  }

}

const mapStateToProps = (state) => {
  return {
    city: state.city,
    itinerary: state.itinerary
  }  
}

const mapDispatchToProps = (dispatch) => {
  return {
    getItineraries: () => {
      fetch('http://localhost:5000/itinerary/all')
          .then(response => response.json())
          .then(result => dispatch(getItineraries(result)))
          .catch(err => console.log(err));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);