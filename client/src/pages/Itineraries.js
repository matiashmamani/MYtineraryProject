import React from 'react';
import { connect } from 'react-redux';
import { getItinerariesByCity } from '../actions/itineraryAction';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import { bindActionCreators } from 'redux';
import Footer from '../components/Footer.js';
import Image from 'react-bootstrap/Image';
import Media from 'react-bootstrap/Media';
import '../App.css';

class Itineraries extends React.Component {

  render() {

    if(!this.props.itinerary.itineraries.length) return (<h1>Loading...</h1>);

    let cityId = this.props.match.params.cityId;
    
    let itineraries = this.props.itinerary.itineraries;
    let cityName = itineraries[0].cityId.name;

    let listItineraries = itineraries.map((itinerary) => {
      let listHashtag = itinerary.hashtag.join(" ");
      
      return(
        <ListGroup.Item key={itinerary._id}>
          <Media as='li'>
            <Image src={`http://localhost:5000/itineraries/img/${itinerary.profilePic}`} alt={`${itinerary.profilePic}`} width={100} height={100} fluid roundedCircle />
            <Media.Body>
              <h3>{itinerary.title}</h3>
              <p>Likes: {itinerary.rating} | {itinerary.duration} Hour(s) | ${itinerary.price}</p>
              <p>{listHashtag}</p>
            </Media.Body>
          </Media>          
        </ListGroup.Item>
      )
    });

    return (
      <div> 
        <div className='Itineraries-city-img'>
          <Image src={`http://localhost:5000/cities/img/${cityId}.png`} alt={`${cityName}`} fluid />
          <div className='Itineraries-city-name'>
            <h1>{cityName}</h1>
          </div>
        </div>

        <br></br>
        <h4>Available MYtineraries:</h4>
       
        <ListGroup>{listItineraries}</ListGroup>
        <Footer/>
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