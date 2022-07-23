var express = require('express');
var router = express.Router();

/* GET home page. */
const dbLink = []

router.post('/', function(req, res, next) {
  const { name , link } = req.query;
  const {namber}  = req.body;
  const newLink = {
      name,
      link,
      namber
    }
  let data = {dbLink}
 
    dbLink.push(newLink)
    res.redirect('/hello')
    
  });
router.post('/hello', function(req, res, next) {
  const { name , link } = req.query;
  const {namber}  = req.body;
  const newLink = {
      name,
      link,
      namber
    }
  let data = {dbLink}
 
    dbLink.push(newLink)

    res.redirect('/hello')
  });
  
  router.get('/', function(req, res, next) {
    dbMap = dbLink.map(function(item){
      return item.namber
    })
    res.render('index', { title: 'NAFHAN | Links', value: dbMap.join(', ') });
  });

  router.get('/hello', function(req, res, next) {
    let dbMap = dbLink.map(function(item){
      return item.namber
    })
    let reversed = dbMap.reverse()
    res.render('hello', { title: 'Your Link', value: reversed, dbLink: dbLink });
    console.log(dbMap)
  })

  router.delete('/', function(req, res) {
    
      dbLink=[]
      res.redirect('/')
    
  })


  module.exports = router;
  