import './style.css'
import bikeLogo from "../../assets/logo.png"
import sIcon from "../../assets/searchIcon.png"
 


export default function Navbar() {
  return (
        <div className="navbar">
            <img className="image" alt="Image" src={bikeLogo} />
           
              
              <a href="#" className="text-wrapper-2">Home</a>
              <a href="" className="text-wrapper-2">Serviços</a>
              <a href="" className="text-wrapper-2">Nossos Integrantes</a>
           

            <a href=""><img className="search-icon" alt="Search Icon" src={sIcon} /></a>
        </div>
  )
}
