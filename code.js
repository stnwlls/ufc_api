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
                //fullname: "",
                hometown: "",
                trains_out_of: "",
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

            // Hometown
            $('#block-mainpagecontent > div > div > div.l-main__content > div.l-container--no-spacing-vertical-bottom > div > div > div > div.c-bio__info > div.c-bio__info-details > div:nth-child(2) > div > div.c-bio__text').filter(function () {
                let el = $(this);
                let em = el.text();
                let hometown = em.trim();
                fighter.hometown = hometown;

            });

            // Trains Out Of
            $('#block-mainpagecontent > div > div > div.l-main__content > div.l-container--no-spacing-vertical-bottom > div > div > div > div.c-bio__info > div.c-bio__info-details > div.c-bio__row--2col > div > div.c-bio__text').filter(function () {
                let el = $(this);
                let em = el.text();
                let trains_out_of = em.trim();
                fighter.trains_out_of = trains_out_of;

            });

            // Age
            $('#block-mainpagecontent > div > div > div.l-main__content > div.l-container--no-spacing-vertical-bottom > div > div > div > div.c-bio__info > div.c-bio__info-details > div:nth-child(4) > div:nth-child(1) > div.c-bio__text > div').filter(function () {
                let el = $(this);
                let em = el.text();
                let age = em.trim();
                fighter.age = age;
            });

            callback(fighter);
        }
    })
}