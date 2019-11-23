import React from 'react';
import { connect } from 'react-redux';
import { getItineraries } from '../actions/itineraryAction';
import ListGroup from 'react-bootstrap/ListGroup';

class Itineraries extends React.Component {

  render() {

    if(!this.props.itinerary.itineraries.length) return (<h1>Loading...</h1>);
   
    let itineraries = this.props.itinerary.itineraries;
    let cityName = itineraries[0].cityId.name;

    const listItineraries = itineraries.map((itinerary) => <ListGroup.Item key={itinerary._id}>{itinerary.title}</ListGroup.Item>);

    console.log(cityName)
    return (
      <div>
        <h1>{cityName}</h1>
        <p>Available MYtineraries</p>
        <ListGroup>{listItineraries}</ListGroup>
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
            dispatch(getItineraries(result.itineraries))
          })
          .catch(err => console.log(err));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);