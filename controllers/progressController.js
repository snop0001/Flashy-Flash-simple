import { getMyprogress } from "../adapters/supabaseAdapter.js";

export async function getPlayersProgress(req, res, next){
    console.log('Yay I got all the players` progress 💖');
    const allProgress = await getMyprogress();
    res.json( allProgress);
}
