import '../css/gallery1.css'; // Asegúrate de importar tus estilos CSS

function Gallery1() {
  return (
    <div className="contenedor">
        <div className="fondo">
            {/* Div principal con imagen de fondo */
                // <img src="../../img/fondos/gradas.jpg" alt="Fondos" />  
            }
        </div>
            <div className="container">
                {/* Div con contenido de imágenes */}
                <div className="imagenes1-container">
                {/* Aquí puedes mapear tu colección de imágenes */}
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
    </div>
    );
}

export default Gallery1;
