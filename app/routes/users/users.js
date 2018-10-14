export default (app) => {
  app.get('/user', (req, res) => {
    res.status(200).json({
      name: 'johns',
    });
  });
};
