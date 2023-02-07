import {pool} from '../db.js'

export class EventoModel {

    constructor(title,descripcion,fechaI,fechaF) {
        this.title = title;
        this.descripcion = descripcion; 
        this.fechaI = fechaI;
        this.fechaF = fechaF;  
    }

    getAll=async(req,res)=> {
       const [rows] = await pool.query('SELECT * FROM eventos')
       res.json(rows)
    }
    getEvento=async(id)=> {
        const [rows] = await pool.query('SELECT * FROM eventos WHERE id =?',[id])
        return (rows)
     }
    createEvent=async(req,res)=> {
            const {title,description,fechaI,fechaF} = req.body
            const [rows] = await pool.query('INSERT INTO eventos (title,description,fechaI,fechaF) VALUES (?,? ,?,?)',
            [title,description,fechaI,fechaF])

            if(rows.insertId <= 0){
                return res.status(400).json({msg: 'No se pudo crear el evento'})
                
            }
    }

    getEventoFuture =async (req,res)=> {    
            const {fechaI}= req.body
                const [rows] = await pool.query('SELECT * FROM eventos WHERE fechaI>=?',[fechaI] )
               return rows

               
    }

    getEventoFutureNow = async (req,res)=> {    
        console.log(new Date())
        const [rows] = await pool.query('SELECT * FROM eventos WHERE fechaI<=?',[new Date()] )
        return rows
    }

    getEventoPast = async (req,res)=>{
        const {fechaF}= req.body
        const [rows] = await pool.query('SELECT * FROM eventos WHERE fechaF<=?',[fechaF] )
        console.log(rows)
        return rows
        
    }

    getEventoPastNow = async (req,res)=> {    
        const [rows] = await pool.query('SELECT * FROM eventos WHERE fechaF<=?',[new Date()] )
        return rows
    }
    getEventosBetweenfechaI = async (req,res)=>{
        const {fechaI} = req.body
        const [rows] = await pool.query('SELECT * FROM eventos WHERE fechaI<=? ',[fechaI] )
        console.log(rows)
        return rows

    }
}
