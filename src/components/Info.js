import React from 'react'

const Info = ({info}) => {
    if(Object.keys(info).length === 0) return null;
    
    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Informacion Artista
            </div>
            <div className="card-body">
                <img src={info.strArtistThumb} alt="Logo Artista" />
                <p className="card-text">
                    <strong>Nombre: </strong>{info.strArtist}   
                </p>
                <p className="card-text">
                    <strong>Año de Nacimiento: </strong>{info.intBornYear}
                </p>
                <p className="card-text">   
                    <strong>Música: </strong>{info.strGenre}
                </p>
                <p className="card-text">
                    <strong>Biografía: </strong>{info.strBiographyES}
                </p>

            </div>
        </div>
    );
}
 
export default Info;