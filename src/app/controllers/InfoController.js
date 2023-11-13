const User = require('../models/user')

class InfoController {

    index(req, res) {
        res.render('info')
    }

    edit(req, res) {
        User.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect(`/info`))
            .catch(next)
    }

    cancel(req, res, next) {
        User.findOneAndUpdate(
            { curent: true },
            { $pull: { Order: { _id: req.params._id } } },
            { new: true }
        ).then(user => {
            if (user) res.redirect(`back`);
        }).catch(next);
    }
};

module.exports = new InfoController