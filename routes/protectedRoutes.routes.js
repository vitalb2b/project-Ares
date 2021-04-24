const express = require('express');
const User = require('../models/user.model')
const Vendor = require('../models/vendor.model')
const protectedRoute = require('../middleware/protectedRoutes')
const router = express.Router();
const fileUploader = require('../configs/cloudinary.config');


router.use(protectedRoute);

router.get('/user', (req, res, next) =>{

    Vendor.find({location: 'mobile' })
    .then(vendorFromDatabase =>{

        res.render('protected-views/user',{user:vendorFromDatabase, loggedUser: req.session.currentUser});
    });

});

router.get('/private/:vendorId', (req, res, next) =>{

    const {vendorId} = req.params;
    
    Vendor.findById(vendorId) 
    .then(vendorFromDatabase =>{

        res.render('protected-views/private',{vendor:vendorFromDatabase, loggedUser: req.session.currentUser});

    });


});

router.post('/newPhoto', fileUploader.single('image'),  (req, res) =>{
    
        const {image} = req.body;

        const newVendor ={
            image: req.file.path,
   
        };
        
});



module.exports = router;
