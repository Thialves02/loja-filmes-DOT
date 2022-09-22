export const Api = {
    baseUrl: "https://api.themoviedb.org/3/",
    API_KEY: "83a924a233a6fae4e8bb3ece72e1dcd0",

    getAll: (path) => fetch(Api.baseUrl + path, {
        method: "GET",
    }),
}