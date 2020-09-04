module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get('db')
    // console.log('hit222')
    db.get_inventory()
      .then(inventory => {
        res.status(200).send(inventory)
      }).catch(err => console.log(err));
    // console.log('got products')
  }
}