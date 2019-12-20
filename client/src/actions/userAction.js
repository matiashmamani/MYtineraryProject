import { USER_CREATED } from './types';

export const createNewUser = (userData) => {
    return (dispatch) => {

        let formData = new FormData();

        formData.append('imageFile', userData.imageFile);
        formData.append('username', userData.username);
        formData.append('password', userData.password);
        formData.append('email', userData.email);
        formData.append('firstName', userData.firstName);
        formData.append('lastName', userData.lastName);
        formData.append('country', userData.country);

        fetch('http://localhost:5000/users',{
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(user => dispatch({
                type: USER_CREATED,
                payload: user
            }))
            .catch(err => console.log(err));
    }
}

export const loginUser = (userData) => {
    return (dispatch) => {

        fetch('http://localhost:5000/users/login',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userData: userData //user y pass
                })
            })
            .then(response => response.json())
            .then(user => dispatch({
                type: USER_CREATED,
                payload: user
            }))
            .catch(err => console.log(err));
    }
}