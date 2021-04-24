
const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;




// router.get('/partner-register', (req, res, next) =>{

//     try {
//         res.render('partner-register');
//     } catch (error) {
//         console.log(error);
//     }
 
// }); 




// router.get('/signup', (req, res, next) =>{

//     try {
//         res.render('auth-views/signup');
//     } catch (error) {
//         console.log(error); 
//     }
 
// });


// router.post('/signup', async (req, res, next) =>{
//     console.log(req.body);
//     try {
//         const {userName, email, password} = req.body;
//         const existUser = await User.findOne({userName});

//         if(existUser){
//             res.render('error', {errorMessage : 'user name included'});
//             return;
//         }else{

//             const newUser = new User({
//                 userName,
//                 email,
//                 password: await encryptPassword(password),
//             });
//             //await newUser.save();

//             User.create(newUser)
//             .then(()=> {
//                 Console.log("PASSOU POR AQUI!!!")
//             })
//             .catch(error => console.log(error)); 
            
//         }

//     } catch (error) {
//         console.log(error);
//     }

// });

// router.get('/user-menu', async (req, res) =>{
    
//     try {       
//         res.render('user-menu');
//     } catch (error) {
//         console.log(error);
//     }
// })



// router.get('/movie/:movieId', async (req, res) =>{
 
//     try {
//         const {movieId} = req.params;   

//         const movie = await Movies.findById(movieId);  
//         res.render('movie-detail', movie); 
//         console.log(movieId);        
//     } catch (error) {
//         console.log(error);
//     }    
// });

// //entregar o formulario de cadastro
// //querie string 
// router.get('/movies/new', async (req, res) =>{

//     res.render('new-movie'); 
    
// })

// //Post do formulario de cadastro para inserir no banco
// //envia as informacoes via body - corpo da requisicao (fica mais dificil de acessar as infomracoes )
// router.post('/movies/new',(req, res) =>{

//     //req.body nao conseque montar a requisicao sozinho - instalar npm install body-parser
//     console.log(req.body)
//     const {movieTitle, movieDirector, movieStars, movieImage, movieDescription, movieShowtimes} = req.body;

//     const newMovie = {
//         title : movieTitle,
//         director :movieDirector,
//         stars : movieStars,
//         image : movieImage,
//         description : movieDescription,
//         showtimes : movieShowtimes,

//     };
//     Movies.create(newMovie)
//         .then(()=> {
//             res.redirect('/movies')
//         })
//         .catch(error => console.log(error)); 
// })


// module.exports = router;
