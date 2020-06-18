const axios = require('axios')
require("dotenv").config();

const token = process.env.PUBLIC_KEY

const config = {
    headers: { Authorization: `Bearer  ${token}` }
};
const bodyParameters = {
    bvn: "22231485915",

    secretKey: process.env.PUBLIC_KEY
};
axios.post('https://sandbox.wallets.africa/account/resolvebvn', bodyParameters, config)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {

        console.log(error);
    });