const { mongooseToObject } = require('../../util/mongoose')
class AboutUsContronller {
    index(req, res) {
        res.render('aboutUs')
    }
};
module.exports = new AboutUsContronller