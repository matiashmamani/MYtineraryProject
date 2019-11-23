import React from 'react';
import { connect } from 'react-redux';
import { getItinerariesByCity } from '../actions/itineraryAction';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import { bindActionCreators } from 'redux';

class Itineraries extends React.Component {

  render() {

    if(!this.props.itinerary.itineraries.length) return (<h1>Loading...</h1>);
   
    let itineraries = this.props.itinerary.itineraries;
    let cityName = itineraries[0].cityId.name;

    let listItineraries = itineraries.map((itinerary) => {
      let listHashtag = itinerary.hashtag.map((hashtag)=>
        <p>{hashtag}</p>
      );
      
      return(
        <ListGroup.Item key={itinerary._id}>
          <h3>{itinerary.title}</h3>
          <p>Likes: {itinerary.rating} | {itinerary.duration} Hour(s) | ${itinerary.price}</p>
          {listHashtag}
        </ListGroup.Item>
      )
    });

    return (
      <div>
        <h1>{cityName}</h1>
        <p>Available MYtineraries</p>
        <ListGroup>{listItineraries}</ListGroup>
      </div>
    );
  }

  componentDidMount() {
    this.props.getItinerariesByCity(this.props.match.params.cityId);
  }

}

Itineraries.propTypes = {
  itinerary: PropTypes.object.isRequired,
  getItinerariesByCity: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    itinerary: state.itinerary
  }  
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getItinerariesByCity}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);