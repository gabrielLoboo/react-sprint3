import background from '../../assets/background.png';
import portoLogo from '../../assets/portoLogo.png';

import './style.css';

export default function Main() {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
    
  };

  return (
    <>
      <div className="index" style={backgroundStyle}>
        
        <p className="text-wrapper-13">Proteção que acompanha seu ritmo sobre duas rodas!</p>

        <img className="portoholding-RGB-h-2" alt="Logo Porto" src={portoLogo} />

        <div className="button-cadastre-se">
          <div className="text-wrapper">Cadastre-se</div>
        </div>
        
      </div>
    </>
  );
}
