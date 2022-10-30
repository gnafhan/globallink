var express = require('express');
var router = express.Router();

/* GET home page. */
let dbLink = []

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

  router.delete('/hello', function(req, res) {
    
      dbLink=[]
      res.redirect('/')
    
  })

  router.get('/RLC', function(req, res, next) {
    res.redirect('https://www.canva.com/design/DAFO7138pRc/M4vl7mPqfaGuRW8RZJVe8A/view?utm_content=DAFO7138pRc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink')
  })
  router.get('/rlc', function(req, res, next) {
    res.redirect('https://www.canva.com/design/DAFO7138pRc/M4vl7mPqfaGuRW8RZJVe8A/view?utm_content=DAFO7138pRc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink')
  })
  


  module.exports = router;
  