import React from 'react';
import { connect } from 'react-redux';
import { getCities, fetchLoading } from '../actions/cityAction';

class Cities extends React.Component {

  render() {

    const listItems = this.props.cities.cities.map((city) => <li key={city._id}>{city.name}</li>);

    return (
      <div>
        <h1>Cities</h1>
        <p>{this.props.cities.isFetching ? 'Loading cities...' : ''}</p>
        <ul>{listItems}</ul>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchLoading();
    this.props.getCities();
  }

}

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    cities: state.cities
  }  
}

const mapDispatchToProps = (dispatch) => {
  return {
    
    fetchLoading: () => { 
      dispatch(fetchLoading());
    },

    getCities: () => {
      fetch('http://localhost:5000/city/all')
          .then(response => response.json())
          .then(result => dispatch(getCities(result.cities)))
          .catch(err => console.log(err));
    }
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
