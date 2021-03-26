

const ufc = require('./code');
let url = "https://www.ufc.com/athlete/sean-omalley"
ufc.getFighter(url, function (data) {
    console.log(data);
});

// console.log(`Index: ${ufc.getFighter}`)