import "../css/header.css";
import Logo from "../assets/Logo.png";
// import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <img src={Logo} />
          </li>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
          {/* <Link to="/habitaciones">Habitaciones</Link> */}
          </li>
          <li>
            <a href="#">Instalaciones</a>
          </li>
          <li>
            <a href="#">Contactanos</a>
          </li>
          <li>
            <a href="#">Reservar</a>
          </li>
          <li>
            <a href="#">Check in</a>
          </li>
          <li>
            <a href="#">Iniciar Sesion</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
