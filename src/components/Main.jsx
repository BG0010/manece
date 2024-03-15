import undected from "../assets/undected.svg"
import security from "../assets/security.svg"
import affordable from "../assets/affordable.svg"

export default function Main() {
  return (
    <section>
        <div className="topicoUm">
            <img src={undected}/>
            <h2>Undetected</h2>
            <p>Menace products use the latest and <br />most secure methods in their modules. <br />Being detected isn't on our list of <br /> worries.</p>
        </div>
        <div className="topicoUm">
            <img src={security}/>
            <h2>Security</h2>
            <p>Your information are always safe when <br />
            using any Menace products.</p>
        </div>
        <div className="topicoUm">
            <img src={affordable}/>
            <h2>Affordable</h2>
            <p>Menace is very cheap. Everyone can <br /> afford it.</p>
        </div>
    </section>
  )
}
