import background from '../../assets/background.png'

export default function Main() {
  return (
    <>
        <div className="index">
            <img
                className="background"
                alt="Background"
                src={background}
            />
            <img/>

            <p className="text-wrapper-12">Tranquilidade garantida com nosso processo de seguro simples e eficiente:</p>
          <img
            className="portoholding-RGB-h-2"
            alt="Portoholding RGB h"
            src="https://cdn.animaapp.com/projects/64fef685b6e2a0e2da10edd7/releases/64fef7818f2f44c908882012/img/portoholding-rgb-h-2-1@2x.png"
          />
          <p className="text-wrapper-13">Proteção que acompanha seu ritmo sobre duas rodas!</p>
          <div className={"button-cadastre-se"}>
            <div className="text-wrapper">Cadastre-se</div>
            </div>
        </div>
    </>
  )
}
