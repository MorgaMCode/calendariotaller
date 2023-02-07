import {pool} from '../db.js'

export class participanteModel {

    constructor(nameP,) {
        this.nameP = nameP;
    }

     fetchAll = async (req,res) =>{
        const [rows] = await pool.query('SELECT * FROM participantes')
        console.log(rows)
        return rows
    }

    getParticipante = async (id) =>{
        const [rows] = await pool.query('SELECT * FROM participantes WHERE id=?',[id])
        console.log(rows)
        return rows
        
    }
    createParticipantes = async (req,res) =>{
        const [rows] = await pool.query('INSERT INTO participantes (nameP) VALUES (?)',[req.body.nameP])
        console.log(rows)
        return rows
    }

}