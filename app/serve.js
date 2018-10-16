import app from './app';

/* istanbul ignore file */
app.listen(app.get('port'), () => {
  console.log(`app running on ${app.get('port')}`);
});
