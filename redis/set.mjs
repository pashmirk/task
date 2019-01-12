import client from "redis";

const DEFAULT_LIFETIME = 300;

export default function set(key, value) {
    client.set(key, value, 'EX', DEFAULT_LIFETIME)
}