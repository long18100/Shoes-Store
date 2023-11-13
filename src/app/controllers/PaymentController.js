const User = require('../models/user')

class PaymentController {

    index(req, res) {
        res.render('payment')
    }

    async pay(req, res, next) {
        try {
            const user = await User.findOne({ curent: true, address: { $ne: '' } });
            if (user) {
                user.Order.push(...user.productsInCart);
                await user.save();
                User.findOneAndUpdate({ curent: true }, req.body, { new: true })
                    .then(user => {
                        console.log("Successfully");
                    })
                    .catch(next);
                User.findOneAndUpdate({ curent: true }, { $set: { productsInCart: [] } }, { new: true })
                    .then(user => {
                        console.log("Successfully");
                    })
                    .catch(next);
                res.redirect(`/cart`);
            }
        } catch (error) {
            console.error(error);
        }
    }
};

module.exports = new PaymentController