import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import portoLg from '../../assets/portoLogo.png'
import './style.css'

export default function Footer() {
  return (
    <div className="footer">
            <img className="portoLogo" alt="Porto Logo" src={portoLg} />
        <p className="text-wrapper">© 2023 Todos os direitos reservados</p>

        <a href="#"><div className="div">Instagram</div></a>
        <a href="#"><div className="text-wrapper-2">Linkedin</div></a>
        <a href="#"><div className="text-wrapper-3">Twitter</div></a>

        <img className="linkedin" alt="Linkedin" src={linkedin} />

        <img className="twitter" alt="Twitter" src={twitter} />

        <img className="instagram" alt="Instagram" src={instagram} />

    </div>
  )
}
