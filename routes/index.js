const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.send('Route does not exist. Use Insomnia.!');
});

module.exports = router;