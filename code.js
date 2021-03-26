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
            // NAME
            $('h1').filter(function () {
                let el = $(this);
                let em = el.text();
                let name = em.trim();
                fighter.name = name;

            });

            // Nickname
            $('.field-name-nickname').filter(function () {
                let el = $(this);
                let em = el.text();
                let nickname = em.trim();
                fighter.nickname = nickname;

            });

            callback(fighter);
        }
    })
}