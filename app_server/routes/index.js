var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

var ctrlFaqs = require('../controllers/faqs');


/* GET home page. */
router.get('/', ctrlMain.index);

/* GET flex page. */
router.get('/', ctrlMain.index);

/* GET submit page. */
router.get('/', ctrlMain.index);

/* GET cloud page. */
router.get('/', ctrlMain.index);



/*FAQ pages */
router.get('/about', ctrlFaqs.about);
router.get('/contact', ctrlFaqs.contact);

module.exports = router;
