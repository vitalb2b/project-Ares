const express = require('express');
const User = require('../models/user.model')
const Vendor = require('../models/vendor.model')
const passwordManager = require('../utils/passwordManager')
const fileUploader = require('../configs/cloudinary.config');
const router = express.Router();


/*===== User signup =====*/

router.get('/signup', (req, res) => res.render('auth-views/signup'));

router.post('/signup', async (req, res, next) =>{

    try {
        const {userName, email, password} = req.body;
        const existUser = await User.findOne({email});

        if(existUser){

            res.render('error', {errorMessage : 'user name or e-mail are incorrect '});
            return;
        }
        const newUser = new User({
            userName,
            email,
            password :await passwordManager.encryptPass(password),
        });

        await newUser.save();
        res.redirect('/auth-views/signup');

    } catch (error) {
        console.log(error);
    }

});



/*===== User login =====*/


router.get('/signIn', (req, res) => res.render('auth-views/signup'));

router.post('/signIn' ,async (req, res, next) => {
    
    try{
        const {mail, password} = req.body;
        const userExist = await User.findOne({mail});

        if(!userExist){
            res.render('auth-views/signup', {errorMessage: 'Seu nome ou senha estao errados!!'})
            return;
        }
        
        if(!passwordManager.checkPass(password, userExist.password)){

            res.render('auth-views/signup', {errorMessage: 'Seu nome ou senha estao errados!!'})
            return;

        }

        req.session.currentUser = userExist;
        res.redirect('/user');

        }catch (error){
            return next(error);   
        }
    
});



/*===== Vendor registration =====*/

router.get('/partner-register', (req, res) => res.render('auth-views/partner-register'));

router.post('/partner-register', async (req, res, next) =>{

    try {
        const {username, email, password, vendorname, location, category} = req.body;
        const existVendor = await Vendor.findOne({email});

        if(existVendor){

            res.render('error', {errorMessage : 'user name or e-mail are incorrect '});
            return;
        }

        const newVendor = new Vendor({
            username,
            email,
            password :await passwordManager.encryptPass(password),
            vendorname,
            location,
            category,
        });

        await newVendor.save();
        res.redirect('/signup');

    } catch (error) {
        console.log(error);
    }

});



/*===== Logout =====*/

router.get('/logout', (req, res) => {
    req.session.destroy();

    res.redirect('/signup');

});


module.exports = router;