const User   = require('../models/user');
const multer = require('multer');
const bcrypt = require('bcryptjs');

function createUser(req, res){

    User.findOne({username: req.body.username})
        .then((userCreated)=> {

            if(userCreated) return res.status(200).send({message: "The username already exists"});

            const hashedPassword = bcrypt.hashSync(req.body.password, 10)
            
            User.create({
                username: req.body.username,
                password: hashedPassword,
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                country: req.body.country
            })
            
        .then((userCreated) => {
            res.status(200).send(userCreated);
        }).catch((err) => {
            res.status(500).send({message: `Error: ${err}`});
        })
    });  
}

//images storage + name configuration:
const storage = multer.diskStorage({ 
    destination: function(req, file, cb) {
      cb(null, 'img/profiles');
    },
    filename: function(req, file, cb) {
     cb(null, file.originalname);
    }
  });

//images filter:
const fileFilter = (req, file, cb) => {
if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
    cb(null, true);
} else { // don't store the file
    cb(null, false);
}
};

const uploadImage = multer({
    storage,
    limits: {
      fileSize: 1024 * 1024 * 15, // 15mb file size
    },
    fileFilter,
  });

module.exports = {
    createUser,
    uploadImage
}