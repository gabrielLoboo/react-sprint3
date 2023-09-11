import './style.css'
import bikeLogo from "../../assets/logo.png"
import sIcon from "../../assets/searchIcon.png"

export default function Navbar() {
  return (
        <div className="navbar">
            <img
                className="image"
                alt="Image"
                src={bikeLogo}
            />
            <div className="div">Home</div>
            <div className="div">Serviços</div>
            <div className="text-wrapper-2">Nossos Integrantes</div>
            <img
                className="search-icon"
                alt="Search Icon"
                src={sIcon}
            />
        </div>
  )
}
