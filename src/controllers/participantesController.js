
import {pool} from '../db.js'


export const getParticipantes =  async (req,res)=> {
    const result = await pool.query('SELECT * FROM participantes')
    res.json(result[0])}

export const postParticipantes =  async (req,res)=> {
    const result = await pool.query('SELECT * FROM participantes')
    res.json(result[0])}