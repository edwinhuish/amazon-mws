'use strict';

var accessKey = process.env.AWS_ACCESS_KEY_ID || 'YOUR_KEY';
var accessSecret = process.env.AWS_SECRET_ACCESS_KEY || 'YOUR_SECRET';

var amazonMws = require('../../lib/amazon-mws')(accessKey, accessSecret);

var productRequest = function () {

    amazonMws.products.search({
        'Version': '2011-10-01',
        'Action': 'ListMatchingProducts',
        'SellerId': 'AUV38W4NKU8JH',
        'MWSAuthToken': 'amzn.mws.06ad6265-74e6-cdea-f3da-2541b634587d',
        'MarketplaceId': 'ATVPDKIKX0DER',
        'Query': 'k'
    }, function (error, response) {
        if (error) {
            console.log('error products', error);
            return;
        }
        //console.log('response ', JSON.stringify(response));
        console.log('response', response);
    });
};

productRequest();