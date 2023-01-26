
  class  eventoModelo {
    constructor(id,title,fechaI,fechaF){
        this.title=title,
        this.fechaI=fechaI,
        this.fechaF=fechaF
    }
}


const eventoN =new eventoModelo(1,2,3,4,5)
  
    createEvento(eventoN);{
        const create = `INSER INTO eventos VALUES (${eventoN.id})`
        return
    }
    