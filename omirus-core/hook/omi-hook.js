module.exports = {
    listeners: function () {
        const express = require('express');
        const bodyParser = require('body-parser');
        const app = express();
        const port = process.env.PORT || 3000;

        app.use(bodyParser.json());
        app.post('/webhook', (req, res) => {
            const payload = req.body;
            console.log('Data dari webhook:', payload);
            res.status(200).send('Webhook data successfully added');
        });
        app.listen(port, () => {
            console.log('\x1b[31m',`Server webhook running in port ${port}`);
        });

    }
}

