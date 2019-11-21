import React from 'react';
import { connect } from 'react-redux';
import { getItineraries } from '../actions/itineraryAction';

class Itineraries extends React.Component {

  render() {
    
    // console.log('render');
    // console.log(this.props);
    // console.log(this.props.itinerary.itineraries);

    return (
      <div>
        <h1>Itinerary: {}</h1>
      </div>
    );
  }

  componentDidMount() {
    this.props.getItineraries(this.props.match.params.id);
  }

}

const mapStateToProps = (state) => {
  return {
    itinerary: state.itinerary
  }  
}

const mapDispatchToProps = (dispatch) => {
  return {
    getItineraries: (id) => {
      fetch(`http://localhost:5000/itinerary/${id}`)
          .then(response => response.json())
          .then(result => {
            console.log('result');
            console.log(result);
            dispatch(getItineraries(result.itineraries))
          })
          .catch(err => console.log(err));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);