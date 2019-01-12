import redisClient from "./redis-client.mjs";

const DEFAULT_LIFETIME = 300;

export default function set(key, value) {
    redisClient.set(key, value, 'EX', DEFAULT_LIFETIME)
}