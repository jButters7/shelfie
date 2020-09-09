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
      .then(inventory => res.status(200).send(inventory))
      .catch(() => res.status(500).send(`Couldn't create a new product`))
  },

  editProduct: (req, res) => {
    const db = req.app.get('db')
    const { id } = req.params
    const { img, name, price } = req.body
    console.log('start edit')
    db.edit_product([id, img, name, price])
      .then(product => res.status(200).send(product))
      .catch(() => res.status(500).send(`Couldn't edit Product`))


  },
  deleteProduct: (req, res) => {
    const db = req.app.get('db')
    const { id } = req.params
    console.log(req.params, id)
    db.delete_product([id])
      .then((inventory) => res.status(200).send(inventory))
      .catch(() => res.status(500).send(`Couldn't delete that product`))
    console.log('deleted')
  }

}