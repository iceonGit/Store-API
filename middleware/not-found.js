const notFound = (req, res) => {
  res.status(404).send('Route does not exist')
  console.log(req.route);
}
module.exports = notFound
