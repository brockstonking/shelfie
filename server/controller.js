module.exports = {
    read: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_inventory()
        .then( products => {
            res.status(200).send(products)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send('Sorry! It looks like something went wrong.')
        })
    }
}