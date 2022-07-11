import React, {Fragment} from 'react'

const Cancion = ({letra}) => {
    if(letra.length === 0) return null;
    
    return ( 
        <Fragment>
            <h2>Letra cancion</h2>
            <p className="Letra">{letra}</p>
        </Fragment>
    
    );
}
 
export default Cancion;