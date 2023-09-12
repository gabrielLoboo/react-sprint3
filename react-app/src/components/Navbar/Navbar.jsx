import './style.css'
import bikeLogo from "../../assets/logo.png"
import sIcon from "../../assets/searchIcon.png"
 
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
        <div className="navbar">
            <img className="image" alt="Image" src={bikeLogo} />
           
              
              <Link to="/"><a href="" className="text-wrapper-2">Home</a></Link>
              <Link to="/servicos"><a href="" className="text-wrapper-2">Serviços</a></Link>
              <Link to="/integrantes"><a href="" className="text-wrapper-2">Nossos Integrantes</a></Link>
          
            <a href=""><img className="search-icon" alt="Search Icon" src={sIcon} /></a>
        </div>
  )
}
