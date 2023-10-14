import "../css/header.css";
import Logo from "../assets/Logo.png";
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
            <a href="#">Habitaciones</a>
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
