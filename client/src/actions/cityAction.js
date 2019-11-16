export const getCities = (payload) => {

    return {
        type: 'GET_CITIES',
        payload
    }

}

export const fetchLoading = () => {

    return {
        type: 'FETCH_LOADING',
    }

}