import express from 'express';
import bodyParser from 'body-parser';
import usersRouter from './routes/users/users';

const app = express();

app.set('port', 3000);

app.use(bodyParser.json());

usersRouter(app);

export default app;
