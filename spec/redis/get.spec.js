import foo from "./../../redis/get.mjs";
import * as client from "./../../redis/redis-client.mjs";

fdescribe("redis", () => {
    describe("get", () => {
        const redisClientMock = {
            get: (key) => { value: "some value" },
            set: (key, value)
        };

        it('should return cache value by key', (done) => {
            spyOn(client, 'createClient').and.returnValue(redisClientMock);

            get('key').then(x => {
                console.log('HELLO')
                expect(x).toBeUndefined();
                done();
            });
        });
    });
});