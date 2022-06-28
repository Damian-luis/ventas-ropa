import react from 'react';
import "./footer.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
export default function Footer(){

    return <footer>
        <div className="media">
            <p>Encuentranos en nuestras redes sociales</p>
            <div className="media-logo">
            <ul>
          <li><a href="https://wa.me/5493884872173">WhatsApp <FaWhatsapp/></a></li>
          <li><a href="https://www.facebook.com/damian.duran.35175/">Facebook <FaFacebookF/></a></li>
          <li><a href="https://ar.linkedin.com/in/dami%C3%A1n-duran-5a17b0231">LinkedIn <FaLinkedinIn/></a></li>
          <li><a href="https://github.com/Damian-luis">Github <FaGithubSquare/></a></li>
        </ul>
            </div>
        </div>
        <div className="copyright">
        <p>Todos los derechos reservados | 2022</p>
        </div>
        
    </footer>
}