import {getDataPromise} from '../adapters/googleSheetsAPI.js'

export async function getGoogleSheet(req, res, next){
    const rows = await getDataPromise();
    res.json(rows);
}