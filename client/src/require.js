// require.config({
//     shim: {
//         'facebook': {
//             exports: 'FB'
//         }
//     },
//     paths: {
//         'facebook': 'https://connect.facebook.net/en_US/sdk.js'
//     }
// })
// require(['fb']);

// // FB.api(
// //     '/112368967175457',
// //     'GET',
// //     { "fields": "posts{full_picture,message,message_tags,likes{username,picture}}" },
// //     function (response) {
// //         console.log(response);
// //     }
// // );

// define(['facebook'], function () {
//     FB.init({
//         appId: '/112368967175457',
//         version: 'v13.0'
//     });
//     FB.getLoginStatus(function (response) {
//         console.log(response);
//     });
// });