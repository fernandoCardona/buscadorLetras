import React, { useState } from 'react';


const Formulario = ({guardarBusquedaLetra}) => {

    //Creamos el State del formulario
    const [busqueda, gusrdarBusqueda] = useState({
        artista: '',
        cancion: ''
    });
    //Creamos una funcion para leer el contenido de cada input del Formulario
    const actualizarState = e => {
        gusrdarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }
    const [error, guardarError] = useState(false);

    const { artista, cancion } = busqueda;

    
   const buscarInformacion = e => {
        e.preventDefault();
        if(artista.trim() === '' || cancion.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);

    //Pasar el state al componente principal
         guardarBusquedaLetra(busqueda);

        
    } 


    return (  
        <div className="bg-info">
        {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}
            <div className="container">
                <div className="row">
                    <form className="col card text-white bg-transparent mb-5 pt-5 pb-2" onSubmit={buscarInformacion}>
                        <fieldset>
                            <legend className="text-center">
                                Buscador Letras canciones
                            </legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="texto">Texto</label>
                                        <input type="text" className="form-control" name="artista" placeholder="Nombre del Artista" onChange={actualizarState} value={artista} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="texto">Cancion</label>
                                        <input type="text" className="form-control" name="cancion" placeholder="Nombre de la cancion" onChange={actualizarState} value={cancion} />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary float-right">Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Formulario;