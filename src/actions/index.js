import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
    return function(dispatch) {
        //Submit email/password to server
        axios.post(`${ROOT_URL}/signin`, { email, password });

        //If request is good:
        //- update state to indicate user is auth'd
        //- save jwt token for user to make auth'd requests in future
        //- redirect to route '/feature'

        //If request is bad:
        //Show an error msg to user
    }
}