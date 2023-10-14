import '../css/vista2.css'; // Asegúrate de importar tus estilos CSS

function Vista2() {
  return (
    <>
        <div className="contenedor-general">
            <div className="contenedor-imagen">
                {/* <img src="../../img/fondos/Royal Hotel 2.jpg" alt="Imagen 1" className="imagen" /> */}
            </div>
            <div className='container'>
                <div className="contenedor-texto-imagen">
                    <div className="contenedor-texto">
                        <h3>Royal Hotel Guatemala</h3>
                            <h2><b>Todas los servicios e instalaciones necesarias para que disfrute de su estancia en viajes de negocios o placer.</b>
                            </h2>
                                <p>El Royal Hotel Guatemala City, es un magnífico hotel urbano que goza de una estratégica ubicación dentro de la principal zona de negocios, rodeado de restaurantes, comercios y áreas de entretenimiento, a tan solo 2,5 km del aeropuerto y a 4,5 km del centro histórico de Guatemala. El hotel de ciudad ideal para viajes de negocios y de placer.
                                </p>
                                <p>Este hotel de ciudad dispone de 397 elegantes habitaciones equipadas y reformadas completamente. En el año 2013 se realizó la instalación, en todas las habitaciones, de dispositivos de ahorro de energía como iniciativa para preservar el medio ambiente. Además, cuenta con habitaciones de categoría Premium para los huéspedes que estén interesados en disfrutar de una estancia con un plus en servicios y equipamiento.
                                </p>
                    </div>
                    <div className="container-img">
                    <img src="../../img/fondos/royal.jpg" alt="Imagen 2" />
                    <p className='texto'>Instalaciones</p>
                    </div>
                </div>
            </div>         
        </div>
    </>
    );
}

export default Vista2;
