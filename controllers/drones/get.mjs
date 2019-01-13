import fetchData from './../fetch-data.mjs';
import cache from './../../cache/index.mjs';

const get = async(req, respond) => {
    try {
        let url = `${process.env.UNRELIABLE_API_URL_BASE}/drones/`;
        const data = await fetchData(url);

        await respond.send(data);
        console.log('REDIS CLIENT', cache);

        cache.set(url, data);

    } catch (error) {
        try {
            let cachedData = await cache.get(url);
            console.log('cached data:', cachedData);

            respond.send(cachedData);
        } catch {
            respond.status(404).send({ error: 'No data is available at the moment.' }).end();
        }
    }
}

export default get;