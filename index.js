let request = require("request");
let cheerio = require("cheerio");

module.exports.getFighter = function (url, callback) {
    request(url, function (error, response, html) {
        if (!error && response.statusCode == 200) {
            let $ = cheerio.load(html);
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
        }
    })
}