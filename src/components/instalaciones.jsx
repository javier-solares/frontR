import '../css/instalaciones.css'; // Asegúrate de importar tus estilos CSS

function Instalaciones() {

    const handleClick = () => {
        alert('¡Botón clickeado!');
      };
  return (
    <>
        <div className="contenedor-general">
            <div className="contenedor-imagen">
                {/* <img src="../../img/fondos/Royal Hotel 2.jpg" alt="Imagen 1" className="imagen" /> */}
                <h3>NUESTRAS HABITACIONES Y TARIFAS</h3>
            </div>
            <div className='container'>
                <div className="contenedor">
                    <div className="contenedor-texto"> 
                        <h3><b>Habitación Superior con Terraza</b></h3>
                            <h2><b>
                                Disfruta de confortables y luminosas habitaciones dobles con terraza.
                            </b></h2>
                                <p>
                                    <li>plancha</li>
                                    <li>Caja fuerte</li>
                                    <li>Conexión Wi-Fi (sin cargo)</li>
                                    <li>Aire acondicionado</li>
                                    <li>Set café y té</li>
                                    <li>Minibar</li>
                                    <li>Teléfono</li>
                                    <li>TV</li>                                   
                                </p>
                                <p> 4 Personas. • 3 adultos máx. / 2 niños máx. </p>
                                <p><b>30 USD por noche</b></p>

                                <button className="button" onClick={handleClick}>Reservar <br />Habitacion</button>

                    </div>
                    <div className="container-img">
                        <img src="../../img/habitaciones/habitacion2.png" alt="Imagen 2" />
                        <p className='texto'>Habitación Doble</p>
                    </div>                  
                </div>  
                     {/* contenedor 2 */}
                    <div className="contenedor">
                        
                        <div className="container-img">
                            <img src="../../img/habitaciones/habitacion1.png" alt="Imagen 2" />
                            <p className='texto'>Habitación Doble</p>
                        </div>     
                        <div className="contenedor-texto"> 
                            <h3><b>Habitación Superior Ejecutiva</b></h3>
                                <h2><b>
                                    Una habitación amplia, luminosa y confortable para huéspedes en viaje de ocio o negocios.
                                </b></h2>
                                    <p>
                                        <li>plancha</li>
                                        <li>Caja fuerte</li>
                                        <li>Conexión Wi-Fi (sin cargo)</li>
                                        <li>Aire acondicionado</li>
                                        <li>Set café y té</li>
                                        <li>Minibar</li>
                                        <li>Teléfono</li>
                                        <li>TV</li>                                   
                                    </p>
                                    <p> 4 Personas. • 3 adultos máx. / 2 niños máx.</p>
                                    <p><b>40 USD por noche</b></p>

                                    <button className="button" onClick={handleClick}>Reservar <br />Habitacion</button>
                        </div>             
                    </div>  
                    {/*contenedor 3*/}
                    <div className="contenedor">
                    <div className="contenedor-texto"> 
                        <h3><b>Habitación Superior Premium Level</b></h3>
                            <h2><b>
                                Exclusiva habitación que ofrece al huésped un espacio elegante y totalmente equipado.
                            </b></h2>
                                <p>
                                    
                                    <li>Caja fuerte</li>
                                    <li>Conexión Wi-Fi (sin cargo)</li>
                                    <li>plancha</li>
                                    <li>TV</li>  
                                    <li>Servicio despertador</li>
                                    <li>Albornoz</li>
                                    <li>Artículos de aseo</li>
                                    <li>Set café y té</li>
                                    <li>Minibar</li>
                                    <li>Teléfono</li>
                                    <li>Aire acondicionado</li>                        
                                </p>
                                <p> 2 Personas. </p>
                                <p><b>50 USD por noche</b></p>

                                <button className="button" onClick={handleClick}>Reservar <br />Habitacion</button>
                    </div>
                    <div className="container-img">
                        <img src="../../img/habitaciones/habitacion3.png" alt="Imagen 2" />
                        <p className='texto'>Habitación Individual</p>
                    </div>                  
                </div>  
                     {/* contenedor 4 */}
                    <div className="contenedor">
                        
                        <div className="container-img">
                            <img src="../../img/habitaciones/habitacion4.png" alt="Imagen 2" />
                            <p className='texto'>Habitación Individual</p>
                        </div>     
                        <div className="contenedor-texto"> 
                            <h3><b>Amplias y confortables suites en dos niveles que garantizan al huésped su privacidad.</b></h3>
                                <h2><b>
                                    Una habitación amplia, luminosa y confortable para huéspedes en viaje de ocio o negocios.
                                </b></h2>
                                    <p>
                                        <li>Despertador</li>
                                        <li>Caja fuerte</li>
                                        <li>Sala de estar</li>
                                        <li>Prensa</li>
                                        <li>Artículos de aseo</li>
                                        <li>TV</li>
                                        <li>Albornoz</li>
                                        <li>Conexión Wi-Fi (sin cargo)</li>                                   
                                    </p>
                                    <p> 4 Personas. • 3 adultos máx. / 2 niños máx.</p>
                                    <p><b>40 USD por noche</b></p>

                                    <button className="button" onClick={handleClick}>Reservar <br />Habitacion</button>
                        </div>             
                    </div>  




            </div>         {/* cierre del container*/}
        </div>
    </>
    );
}

export default Instalaciones;
