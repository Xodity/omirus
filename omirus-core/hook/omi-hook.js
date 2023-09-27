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
            res.status(200).send('Webhook berhasil diterima');
        });
        app.listen(port, () => {
            console.log(`Server webhook berjalan di port ${port}`);
        });

    }
}

