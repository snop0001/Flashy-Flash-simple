import express from 'express';
import { getGoogleSheet } from '../controllers/googleSheetController.js';
import { getPlayersProgress } from '../controllers/progressController.js';
// import {printCard} from '../controllers/cardsController.js';
const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('Welcome to Flashy Flash app!');
});

router.get('/progress',getPlayersProgress);
router.get('/googleSheet',getGoogleSheet);

// router.get('/cards', printCard);

//microservice app-settings
router.get('/appSettings', (req, res, next) => {
  res.json({
    url: req.originalUrl,
    query: req.query,
    theme: 'light-blue' , 
    timer: '10s',
    questionsTypes:['record','type'],
    notifications:'on',
    motivationPush: 'off'
  });
});


router.post('/appSettings', (req, res, next) => {
const theme = req.body.theme;
const timer =  req.body.timer;
const questionsTypes =  req.body.questionsTypes;
const notifications =  req.body.notifications;
const motivationPush =  req.body.motivationPush;

if(timer != undefined && theme != undefined && questionsTypes != undefined && notifications != undefined && motivationPush != undefined) {
  res.json({
    title:'Settings configured',
    message:`Setting include - Timer: ${timer} , Theme: ${theme}, Questions-Types: ${questionsTypes}, Notifications: ${notifications}, Motivation-Push: ${motivationPush}`
  });
} else {
  res.status(422);
  res.json({
    title:'cannot configure settings',
    message:'You need to set the theme, timer, types of questions, and whether you want notification and motivations to be on or off'
  });
}
});

//microservice account-settings
router.get('/accSettings', (req, res, next) => {
  res.json({
    url: req.originalUrl,
    query: req.query,
    name: 'user' , 
    age: '16',
    studylevel:'Highschool 3rd grade',
  });
});


router.post('/accSettings', (req, res, next) => {
const name = req.body.name;
const age =  req.body.age;
const studylevel =  req.body.studylevel;

if(name != undefined && age != undefined && studylevel != undefined) {
  res.json({
    title:'Account settings configured',
    message:`Setting include - name: ${name} , Age: ${age}, Study-level: ${studylevel}`
  });
} else {
  res.status(422);
  res.json({
    title:'cannot configure account settings',
    message:'You need to set the name, age, and study level'
  });
}
});

export default router;
