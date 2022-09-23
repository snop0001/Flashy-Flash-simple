import express from 'express';
import { getDutchGoogleSheet,getEnglishGoogleSheet } from '../controllers/googleSheetController.js';
import { getPlayersProgress } from '../controllers/progressController.js';
const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('Welcome to Flashy Flash app!');
});

router.get('/progress',getPlayersProgress);
router.get('/dutch',getDutchGoogleSheet);
router.get('/english',getEnglishGoogleSheet);

router.post('/playerSettings', (req, res, next) => {
  const name = 'Bob';
  const birthday =  '1997-10-04';
  const subject =  2;
  
  if(name != undefined && birthday != undefined && subject != undefined) {
    setPlayer(name,birthday,subject);
  } else {
    res.status(422);
    res.json({
      title:'cannot configure player',
      message:'You need to set the name,birthday and subject'
    });
  }
  });


export default router;
