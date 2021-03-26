

const ufc = require('./code');
let url = "https://www.ufc.com/athlete/jon-jones"
ufc.getFighter(url, function (data) {
    console.log(data);
});

// console.log(`Index: ${ufc.getFighter}`)