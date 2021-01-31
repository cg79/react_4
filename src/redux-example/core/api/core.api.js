
import axios from 'axios'
import constants from '../shared/core.constants';

export class CoreApi {

    /**
     * Create an Axios Client with defaults
     */
    constructor() {
        this.client = axios.create({
            baseURL: constants.api.url
        });
    }

    onSuccess = function(response) {
        console.debug('Request Successful!', response);
        return response.data;
    }

    onError = function(error) {
        console.error('Request Failed:', error.config);

        if (error.response) {
            // Request was made but server responded with something
            // other than 2xx
            console.error('Status:',  error.response.status);
            console.error('Data:',    error.response.data);
            console.error('Headers:', error.response.headers);

        } else {
            // Something else happened while setting up the request
            // triggered the error
            console.error('Error Message:', error.message);
        }

        return Promise.reject(error.response || error.message);
    }

    call = (options) => (
        this.client(options)
        .then(this.onSuccess)
        .catch(this.onError)
    );


}

export default new CoreApi();
