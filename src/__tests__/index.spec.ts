import { createApi } from "..";

describe("index", () => {
    it("should work", () => {
        const api = createApi();

        api.get("/test", () => {
            return {
                statusCode: 200,
                body: "test",
            };
        });
        // const actual = api.routes;
        // console.log(actual);
        const handler = api.createHandler();
        const acutal = handler({ httpMethod: "GET", path: "/test" }, {})
        expect(acutal).toEqual({
            statusCode: 200,
            body: "test",
        });
    });
});
