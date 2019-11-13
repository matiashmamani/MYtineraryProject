export const getCities = (cities) => {



    return (dispatch, getState) => {
        fetch('http://localhost:5000/city/all')
            .then(response => response.json())
            .then(result => dispatch({type: 'GET_CITIES', cities: result.cities}))
            .catch(err => console.log(err));
    }

}