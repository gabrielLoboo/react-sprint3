import background from '../../assets/background.png';
import portoLogo from '../../assets/portoLogo.png';

import './style.css';

export default function Home() {
  return (
    <>
      <div className="index">
        <img src={background} alt="Background Image" className="background" />
        <div className="content">

          <img className="portoLg" alt="Logo Porto" src={portoLogo} />

          <p className="text">Proteção que acompanha seu ritmo sobre duas rodas!</p>

          <button className="button-cadastre-se">Cadastre-se</button>

        </div>
      </div>
    </>
  );
}

