import redis from 'redis';

let client = null;

const createClient = () => {
    if (client) return client;

    client = redis.createClient();

    client.on('connect', () => {
        console.log('Redis client connected');
    });

    client.on('error', function(err) {
        console.log('Something went wrong with Redis: ', err)
    });

    return client;
}

export default createClient;