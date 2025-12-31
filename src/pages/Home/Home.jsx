import home from "./Home.module.scss"
import home2 from "./Home2.module.scss"
import home3 from "./Home3.module.scss"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <main className={home.home}>
      <section className={home.banner}>
        <div className={home.boxText}>
          <div className={home.saudeTodos}>
            <img src="/estetoscopio.png" alt="Estetoscopio"/>

            <p>Saúde parar todos</p>
          </div>

          <h2>Saúde e cuidado sem barreiras</h2>

          <p className={home.textBanner}>Um projeto dedicado a oferecer atendimento médico e odontológico gratuito para pessoas que mais precisam na nossa comunidade</p>

          <div className={home.boxButtons}>
            <button className={home.btn1}><Link to="/inscricao">Seja Voluntário</Link></button>
            <button className={home.btn2}>Como ajudar</button>
          </div>
        </div>

        <div className={home.imageBanner}>
          <img src="./medico.png" alt="Médico"/>
        </div>
      </section>

      <section className={home2.home2}>
        <div className={home2.boxText2}>
          <h2>Nossa Missão</h2>

          <p>Transformar vidas através do acesso universal a saúde de qualidade</p>
        </div>

        <div className={home2.cards1}>
          <div className={home2.card}>
            <h3>Acesso Equitativo</h3>

            <p>Garantir que todos tenham acesso a cuidados de saúde de qualidade, independentemente de sua condição financeira.</p>
          </div>

          <div className={home2.card}>
            <h3>Comunidade Forte</h3>

            <p>Construir uma rede de profissionais de saúde dedicados a servir com compaixão e profissionalismo.</p>
          </div>

          <div className={home2.card}>
            <h3>Bem-estar Total</h3>

            <p>Oferecer atendimento integral em medicina geral e odontologia para melhorar a qualidade de vida.</p>
          </div>
        </div>
      </section>

      <section className={home3.home3}>
        <div className={home3.boxText3}>
          <h2>Nosso Impacto</h2>

          <p>Transformando a saúde de nossa comunidade, um paciente de cada vez</p>
        </div>

        <div className={home3.cards2}>
          <div className={home3.card}>
            <p className={home3.number}>2.500+</p>
            <p className={home3.impacto}>Pessoas Atendidas</p>
          </div>

          <div className={home3.card}>
            <p className={home3.number}>150+</p>
            <p className={home3.impacto}>Profissionais Voluntários</p>
          </div>

          <div className={home3.card}>
            <p className={home3.number}>98%</p>
            <p className={home3.impacto}>Satisfação dos Pacientes</p>
          </div>

          <div className={home3.card}>
            <p className={home3.number}>5+</p>
            <p className={home3.impacto}>Anos de Dedicação</p>
          </div>
        </div>
      </section>
    </main>
  )
}
