/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const port = 4000;

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
	console.log(`Docs ready: http://localhost:${port}`);
});
