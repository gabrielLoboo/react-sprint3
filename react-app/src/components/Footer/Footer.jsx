import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import portoLg from '../../assets/portoLogo.png'

export default function Footer() {
  return (
    <div className="footer">
            <img className="portoLogo" alt="Porto Logo" src={portoLg} />
        <p className="text-wrapper">© 2023 Todos os direitos reservados</p>

        <div className="div">Instagram</div>
        <div className="text-wrapper-2">Linkedin</div>
        <div className="text-wrapper-3">Twitter</div>

        <img className="linkedin" alt="Linkedin" src={linkedin} />

        <img className="twitter" alt="Twitter" src={twitter} />

        <img className="instagram" alt="Instagram" src={instagram} />

    </div>
  )
}
