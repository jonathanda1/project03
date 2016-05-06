var express = require('express');
var router = express.Router();
var artistController = require('../controllers/artist');
var commentsController = require('../controllers/comments');

/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.json(req.user);
});
/*router.get ('/comments', commentsController.index)*/
router.post('/comments', commentsController.create)


router.get('/artist/:name/events', artistController.show)
module.exports = router;
