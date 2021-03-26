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
                college: "",
                degree: "",
                summary: [],
                height: "",
                //height_cm: "",
                weight: "",
                //weight_kg: "",
                reach: "",
                leg_reach: "",
                record: "",
                fight_win_streak: "",
                wins_by_knockout: "",
                title_defenses: "",
                significant_strikes: {
                    attempted: 0,
                    landed: 0,
                    landed_per_min: 0,
                    absorbed_per_min: 0,
                    defense_pct: 0,
                    knockdown_ratio: 0
                },
                sig_strike_by_position: {
                    standing: 0,
                    clinch: 0,
                    ground: 0
                },
                sig_strike_by_target: {
                    head_count: 0,
                    head_pct: 0,
                    body_count: 0,
                    body_pct: 0,
                    leg: 0,
                    leg_pct: 0
                },
                takedowns: {
                    attempted: 0,
                    successful: 0,
                    accuracy_pct: 0,
                    takedown_avg_per_15min: 0,
                    takedown_defence_pct: 0,
                    submission_avg_per_15min: 0,
                    passes: 0,
                    sweeps: 0
                },
                win_by_way: {
                    ko_tko_count: 0,
                    ko_tko_pct: 0,
                    decision_count: 0,
                    decision_pct: 0,
                    submission_count: 0,
                    submission_pct: 0
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

            // Height            
            $('#block-mainpagecontent > div > div > div.l-main__content > div.l-container--no-spacing-vertical-bottom > div > div > div > div.c-bio__info > div.c-bio__info-details > div:nth-child(4) > div:nth-child(2) > div.c-bio__text').filter(function () {
                let el = $(this);
                let em = el.text();
                let height = em.trim();
                fighter.height = height;
            });

            // Weight            
            $('#block-mainpagecontent > div > div > div.l-main__content > div.l-container--no-spacing-vertical-bottom > div > div > div > div.c-bio__info > div.c-bio__info-details > div:nth-child(4) > div:nth-child(3) > div.c-bio__text').filter(function () {
                let el = $(this);
                let em = el.text();
                let weight = em.trim();
                fighter.weight = weight;
            });

            // Reach            
            $('#block-mainpagecontent > div > div > div.l-main__content > div.l-container--no-spacing-vertical-bottom > div > div > div > div.c-bio__info > div.c-bio__info-details > div:nth-child(5) > div:nth-child(2) > div.c-bio__text').filter(function () {
                let el = $(this);
                let em = el.text();
                let reach = em.trim();
                fighter.reach = reach;
            });


            // Leg Reach            
            $('#block-mainpagecontent > div > div > div.l-main__content > div.l-container--no-spacing-vertical-bottom > div > div > div > div.c-bio__info > div.c-bio__info-details > div:nth-child(5) > div:nth-child(3) > div.c-bio__text').filter(function () {
                let el = $(this);
                let em = el.text();
                let leg_reach = em.trim();
                fighter.leg_reach = leg_reach;
            });


            callback(fighter);
        }
    })
}