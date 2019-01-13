export default function get(cache, key) {
    console.log('key:::', key);
    return new Promise((resolve, reject) => {
        cache.get(key, (err, reply) => {
            if (!err) {
                resolve(reply);
            } else {
                console.log('GET result ->' + err);
                reject(err)
            }
        });
    });
}