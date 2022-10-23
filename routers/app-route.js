const router    = require('express').Router();

router.get('/', function (req, res) {
    res.render('index.ejs');
});

router.get('/cs', function (req, res) {
    res.render('cs.ejs');
})

router.get('/tts', function (req, res) {
    res.render('tts.ejs');
})

module.exports = router;