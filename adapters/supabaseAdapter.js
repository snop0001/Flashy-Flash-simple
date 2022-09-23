import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: 'variables.env' });

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.URL_SUPABASE,process.env.PUBLIC_ANO_KEY
)
console.log(process.env.URL_SUPABASE);
export async function getMyprogress(){
    console.log('In my supabase adapter 😊');
    const {data,error} = await supabase.from('progress').select('*');
    if(error) {
        console.error('supabase error',error);
    }else return data;
    }