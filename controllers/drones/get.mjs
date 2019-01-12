import fetchData from './../fetch-data.mjs'

var url = "http://localhost:8080/drones/";
const get = async(req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(await fetchData(url));

    // get from the api
    // cash
    // when fails get from cach
    // no cash return some message 
}

export default get;