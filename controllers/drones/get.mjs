import fetchData from './../fetch-data.mjs';
import redisClient from './../../redis/index.mjs';

const get = async(req, res) => {
    try {
        const data = await fetchData(`${process.env.UNRELIABLE_API_URL_BASE}/drones/`);
        res.send(data);

        await redisClient.set(url, data);
        next();

    } catch (error) {
        try {
            let cachedData = await redisClient.get(url);
            console.log('cached data:', cachedData)
            res.send(cachedData);
            next();
        } catch {
            res.status(404).send({ error: 'No data is available at the moment.' }).end();
        }
    }
}

export default get;