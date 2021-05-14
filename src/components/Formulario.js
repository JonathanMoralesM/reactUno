import React, {Fragment, useState} from 'react'


const Formulario = () =>{
    const [datos,setDatos] = useState({
            nombre:"",
            apellido:""
    }  ); 


 // Mae me sacò el menudo esta vara 
 //yo sufria con los liseners y observables en java       
  
    const  handImputchance = (event) => {
        setDatos({
            ...datos,
               [event.target.name] : event.target.value            
        })
       
    }
    // por arte de magia encuetra los name y les da su respetiba variable 
   const enviarDatos= (event) => {
       event.preventDefault();
       console.log(datos.nombre+","+datos.apellido)
// aca ya podemos enviar a json 
   }
//evitar el procesamiento automatico
    return (
        <Fragment>
                <h1> Formulario</h1>
                <form className="row" onSubmit={enviarDatos} >
                    <div className="col-md-3">
                        <input 
                        placeholder="Ingrese Nombre"
                        type="text"
                        name="nombre"
                        className="form-control"
                        onChange={handImputchance}
                        ></input>
                    </div>
                    <div className="col-md-3">
                        <input 
                        placeholder="Ingrese Apellido"
                        name="apellido"
                        type="text"
                        className="form-control"
                        onChange={handImputchance}
                        ></input>
                    </div>
                    <div className="col-md-3">
                        <button 
                        className="btn btn-primary"
                        type="submit">Enviar</button>
                    </div>
                </form>
                <h3>{datos.nombre} -- {datos.apellido}</h3>
        </Fragment>
  
    );





} 
export default Formulario;
