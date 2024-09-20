import express from 'express'
import route from './routes/index.js'

const port = 1245;

const app = express();

app.use(route);

app.listen(port);

export default app;