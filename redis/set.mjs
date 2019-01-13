import redisClient from "./redis-client.mjs";

const DEFAULT_LIFETIME = 300000;

export default function set(key, value) {
    console.log('setting data')
    redisClient.set(key, value, 'EX', DEFAULT_LIFETIME)
}