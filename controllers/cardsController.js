import express from 'express';
// import proxy from 'express-http-proxy';
// var numOfReq = 0;
// const cards = [
// 'card1',
// 'card2',
// 'card3',
// 'card4'
// ]
// export function printCard(req, res, next){
//     proxy(()=>{
//         numOfReq++;
//         let count = cards.length;
//         let selected = numOfReq % count;
//         res.json(selected);
//     })
// }

export function printCard(card,req, res, next){
    console.log(card);
    }