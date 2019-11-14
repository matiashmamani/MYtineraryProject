import React from 'react';
import { connect } from 'react-redux';
import { cityAction } from '../actions/cityAction';

class Cities extends React.Component {
    
  render() {
    
    console.log(this.props.cities);
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

const mapDispatchToProps = (dispatch) => {
  return {  
    getCities: () => {
      fetch('http://localhost:5000/city/all')
          .then(response => response.json())
          .then(result => dispatch(cityAction(result.cities)))
          .catch(err => console.log(err));
    }
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
