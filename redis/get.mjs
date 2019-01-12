import client from "redis";

export default function foo(key) {
    return new Promise((resolve, reject) => {
        client.get(key, function(err, reply) {
            if (!err) {
                resolve(reply);
            } else {
                reject(err)
            }
        });
    });
}