var express = require('express');
var router = express.Router();
var fs = require("fs");
var multer = require('multer');
var uploads = multer({dest: './uploads'});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/upload', function(req, res, next) {
    res.render('upload');
});

router.post('/file_upload', uploads.array('image', 12), function(req, res, next) {

   console.log(req.files); 
   console.log(req.files[0]);

   var des_file = __dirname + "/" + req.files[0].originalname;
   fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully', 
                   filename:req.files[0].originalname
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
});


module.exports = router;
