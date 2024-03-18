import imagem from "../assets/imagem.svg"

export default function Explicacao() {
  return (
    <div className='explicacao'>
        <h2>Miscellaneous</h2>
        <div className="explicacaoImagem">
            <p>Our menu also has the resources to use the powers of <br /> your favorite heroes like the Hulk, Iron Man, Flash and  <br />many others. Also count on our Anti-AFK and don't <br /> worry about getting kicked out of sessions for inactivity <br /> anymore. In addition, we have several interaction <br /> options to facilitate your gameplay with your friends. </p>
            <img src={imagem} alt="" />
        </div>   
    </div>
  )
}


