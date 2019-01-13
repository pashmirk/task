const DEFAULT_LIFETIME = 300000;

export default function set(cache, key, value) {
    console.log('set key:::', key);
    //redisClient.set(key, value, 'EX', DEFAULT_LIFETIME)
    cache.set(key, JSON.stringify(value), 'EX', DEFAULT_LIFETIME);
    console.log('set key done:::', value);
}