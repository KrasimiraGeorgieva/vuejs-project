export default{
    appKey: "kid_S1MmvNu7B",
    appSecret: "4cf3d97532ca476189beec148dafbcd8"
}

// const requester = function () {
//     const baseUrl = "https://baas.kinvey.com/";

//     const appKey = "kid_S1MmvNu7B";
//     const appSecret = "4cf3d97532ca476189beec148dafbcd8";

//     const get = function (endpoint, module, type) {
//         const headers = makeHeaders(type, 'GET');
//         const url = `${baseUrl}${module}/${appKey}/${endpoint}`;

//         return fetch(url, headers);
//     };

//     const post = function (endpoint, module, type, data) {
//         const headers = makeHeaders(type, 'POST', data);
//         const url = `${baseUrl}${module}/${appKey}/${endpoint}`;

//         return fetch(url, headers);
//     };

//     const update = function (endpoint, module, type, data) {
//         const headers = makeHeaders(type, 'PUT', data);
//         const url = `${baseUrl}${module}/${appKey}/${endpoint}`;

//         return fetch(url, headers);
//     };

//     const remove = function (endpoint, module, type) {
//         const headers = makeHeaders(type, 'DELETE');
//         const url = `${baseUrl}${module}/${appKey}/${endpoint}`;

//         return fetch(url, headers);
//     };

//     const makeAuth = (type) => {
//         return type === 'Basic'
//             ? 'Basic ' + btoa(appKey + ':' + appSecret)
//             : 'Kinvey ' + sessionStorage.getItem('authtoken');
//     }

//     const makeHeaders = (type, httpMethod, data) => {
//         const headers = {
//             method: httpMethod,
//             headers: {
//                 'Authorization': makeAuth(type),
//                 'Content-Type': 'application/json'
//             }
//         };

//         if (httpMethod === 'POST' || httpMethod === 'PUT') {
//             headers.body = JSON.stringify(data);
//         }

//         return headers;
//     }

//     return {
//         get,
//         post,
//         remove,
//         update,
//     }
// }();