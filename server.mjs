import express from 'express';
import { handler as ssrHandler } from './html/dist/server/entry.mjs';

const app = express();
// Change this based on your astro.config.mjs, `base` option.
// They should match. The default value is "/".
const base = '/';

app.use(base, express.static('html/dist/client/'));
app.use(ssrHandler);

app.listen(3001);
