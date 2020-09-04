module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get('db')
    // console.log('hit222')
    db.get_inventory()
      .then(inventory => {
        res.status(200).send(inventory)
      }).catch(err => console.log(err));
    // console.log('got products')
  },
  createProduct: (req, res) => {
    const db = req.app.get('db')
    const { img, name, price } = req.body
    // console.log(req.body)
    db.create_product([img, name, price])
      .then(() => res.sendStatus(200))
      .catch(() => res.status(500).send(`Couldn't create a new product`))
  },
  deleteProduct: (req, res) => {
    const db = req.app.get('db')
    const { id } = req.params
    console.log(req.params, id)
    db.delete_product([id])
      .then(() => res.sendStatus(200))
      .catch(() => res.status(500).send(`Couldn't delete that product`))
    console.log('deleted')
  }

}