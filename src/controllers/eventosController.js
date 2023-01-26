

import {pool} from '../db.js'


export const geteventos =async (req,res)=> {
    const result = await pool.query('SELECT * FROM eventos')
    res.json(result[0])

   }

   export const  createEventos = async (req,res)=> {

    const {title,fechaI,fechaF} = req.body
    const [rows] = await pool.query('INSERT INTO eventos (title,fechaI,fechaF) VALUES (? ,?,?)',
    [title,fechaI,fechaF])
     res.send({rows})
   }