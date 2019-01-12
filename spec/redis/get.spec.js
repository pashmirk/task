import foo from "./../../redis/get.mjs";
import client from "redis";

fdescribe("redis", () => {
    describe("get", () => {
        it('should return cache value by key', (done) => {
            spyOn(client, 'get').and.returnValue('some value');

            foo('key').then(x => {
                expect(x).toBeUndefined();
                done();
            });



        });
    });
});