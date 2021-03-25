

const ufc = require('./index');
let url = "http://www.ufc.com/fighter/Jon-Jones"
ufc.getFighter(url, function (data) {
    console.log(data);
});

//console.log(`Index: ${ufc.getFighter}`)