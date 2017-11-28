'use strict'

const express = require( 'express' );
const multer = require( 'multer' );
const fs = require( 'fs' );
const junk = require( 'junk' );
const path = require( 'path' );
let app = express();

let staticPath = path.join(__dirname, 'public')
app.use('/', express.static(staticPath) );

// define file name and destination to save
let storage = multer.diskStorage({
  destination: staticPath + '/app/images',
  filename: (req, file, cb) => {
    let ext = file.originalname.split( '.' );
    ext = ext[ext.length - 1];
    cb(null, 'uploads-' + Date.now() + '.' + ext);
  }
});

// define what file type to accept
let filter = ( req, file, cb ) => {
  if ( file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' ) {
    cb( null, true );
  } else {
    cb( 'Failed: format not supported' );
  }
}

// set multer config
let upload = multer( {
  storage: storage,
  fileFilter: filter
}).single( 'upload' );

/* ===============================
  ROUTE
 ============================== */

// route for file upload
app.post( '/uploads', ( req, res ) => {
  upload( req, res, err => {
    if ( err ) {
      console.log( err )
      res.status(400).json( {message: err} );
    } else {
      res.status(200).json( {
        file: req.protocol + '://' + req.get('host') + '/app/images/' + req.file.filename
      } )
    }
  })
})

app.get( '/images', ( req, res ) => {
  let file_path = req.protocol + '://' + req.get('host') + '/app/images/';
  let files = fs.readdirSync( staticPath+'/app/images/' );
  files = files
          .filter( junk.not ) // remove .DS_STORE etc
          .map( f => file_path + f ); // map with url path
  res.json( files );
});

// general route
app.get( '/', ( req, res ) => {
    res.sendFile( staticPath + '/index.html' );
})


var server = app.listen( 8000, _ => {
  console.log( 'server started. listening to 8000' );
})