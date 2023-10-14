import '../css/gallery1.css'; 
// import React from 'react';
import Header from './header'; 
import Footer from './footer';

function Gallery1() {
    return (
    
    <div className="contenedor">
        <Header/>
        <div className="fondo">
            {
                // <img src="../../img/fondos/gradas.jpg" alt="Fondos" />  
            }
        </div>
            <div className="container">              
                <div className="imagenes1-container">
                {/* <h3>Anenidades</h3>  */}
                    <img src="../../img/fondos/salon 2.jpg" alt="Imagen 1" className="imagen" />
                    <img src="../../img/fondos/piscina.jpg" alt="Imagen 2" className="imagen" />
                    <img src="../../img/fondos/royal.jpg" alt="Imagen 3" className="imagen" />               
                    <img src="../../img/fondos/comedor.jpg" alt="Imagen 2" className="imagen" />
                    <img src="../../img/fondos/ginnasio.jpg" alt="Imagen 1" className="imagen" />
                    <img src="../../img/fondos/comerdor 2.jpg" alt="Imagen 3" className="imagen" />
                </div>
                
                <div className="imagenes1-container">
                {/* Más imágenes */}
                    <img src="../../img/habitaciones/habitacion1.png" alt="Imagen 1" className="imagen" />
                    <img src="../../img/habitaciones/habitacion2.png" alt="Imagen 2" className="imagen" />
                    <img src="../../img/habitaciones/Habitacion3.png" alt="Imagen 3" className="imagen" />               
                    <img src="../../img/habitaciones/habitacion4.png" alt="Imagen 2" className="imagen" />
                    <img src="../../img/habitaciones/habitacion.jpg" alt="Imagen 1" className="imagen" />
                    <img src="../../img/habitaciones/habitacion 4.5.jpg" alt="Imagen 3" className="imagen" />
                </div>

                <div className="imagenes1-container">
                {/* Más imágenes */}
                    <img src="../../img/fondos/salon 2.jpg" alt="Imagen 1" className="imagen" />
                    <img src="../../img/Gastronomia/billar.jpeg" alt="Imagen 2" className="imagen" />
                    <img src="../../img/Gastronomia/comida1.jpeg" alt="Imagen 3" className="imagen" />               
                    <img src="../../img/Gastronomia/images.jpeg" alt="Imagen 2" className="imagen" />
                    <img src="../../img/Gastronomia/salon 1.jpeg" alt="Imagen 1" className="imagen" />
                    <img src="../../img/Gastronomia/salon.jpg" alt="Imagen 3" className="imagen" />
                </div>
            </div>
            <Footer/>
    </div>
    );
}

export default Gallery1;
