let request = require("request");
let cheerio = require("cheerio");
const fetch = require('node-fetch');


// fetch('https://www.ufc.com/athlete/sean-omalley')
//     //.then(response => response.json())
//     .then(data => console.log(data));


module.exports.getFighter = function (url, callback) {

    request(url, function (error, response, html) {
        if (!error && response.statusCode == 200) {
            //console.log('ufl', url)
            let $ = cheerio.load(html);
            //console.log('dollar', $)
            console.log('yes sir')
            let fighter = {
                name: "",
                nickname: "",
                fullname: "",
                hometown: "",
                location: "",
                age: "",
                height: "",
                height_cm: "",
                weight: "",
                weight_kg: "",
                record: "",
                college: "",
                degree: "",
                summary: [],
                strikes: {
                    attempted: 0,
                    successful: 0,
                    standing: 0,
                    clinch: 0,
                    ground: 0
                },
                takedowns: {
                    attempted: 0,
                    successful: 0,
                    submissions: 0,
                    passes: 0,
                    sweeps: 0
                },
                fights: []
            };
            // Name
            // $('#fighter-details h1').filter(function () {
            // $('.field-name-nickname').filter(function () {
            //     var el = $(this);
            //     console.log(el, 'ellll')
            //     name = el.text();
            //     fighter.name = name;
            //     console.log('mmmmmmmmmmmmmm', name)
            // });
            $('.field-name-nickname').filter(function () {
                let el = $(this);
                let nickname = el.text();
                console.log(nickname)
                fighter.nickname = nickname;

            });

            callback(fighter);
        }
    })
}