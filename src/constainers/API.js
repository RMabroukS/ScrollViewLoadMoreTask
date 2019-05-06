
import fetch from 'isomorphic-unfetch';
class API {
    constructor() {
        this.baseUrl = 'http://soukak.net/wp-content/uploads';
        this.headers = {
            'Content-Type': 'application/json',
        };
        this.get = this.get.bind(this);
    }
    get({
        url, customHeaders = null
    }) {
        const completeUrl = `${this.baseUrl}/${url}`;
        const headers = { ...this.headers, ...customHeaders };
        return fetch(completeUrl, {
            method: 'get',
            headers
        }).then((resp) => {

            return Promise.resolve(resp);
        }).catch((error) => {
            // alert(error)
        })
    }
}
export default new API();