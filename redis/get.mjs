import redisClient from "./redis-client.mjs";

export default function get(key) {
    return new Promise((resolve, reject) => {
        redisClient.get(key, (err, reply) => {
            if (!err) {
                resolve(reply);
            } else {
                reject(err)
            }
        });
    });
}