import inscricao from "./Inscricao.module.scss"
import inscricao2 from "./Inscricao2.module.scss"

export default function Inscricao() {
    return (
        <main className={inscricao.inscricao}>
            <section className={inscricao.section1}>
                <div className={inscricao.boxText1}>
                    <h2>Seja Voluntário</h2>
                    
                    <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
                </div>

                <div className={inscricao.boxCards1}>
                    <div className={inscricao.card1}>
                        <h3>Impacto Direto</h3>
                        <p>Sua dedicação salva vidas e transforma comunidades</p>
                    </div>

                    <div className={inscricao.card1}>
                        <h3>Crescimento Pessoal</h3>
                        <p>Desenvolva habilidades e cresça profissionalmente</p>
                    </div>

                    <div className={inscricao.card1}>
                        <h3>Comunidade</h3>
                        <p>Faça parte de uma rede de profissionais comprometidos</p>
                    </div>
                </div>
            </section>

            <section className={inscricao2.section2}>
                <form>
                    <h3>Inscrição para Voluntários</h3>

                    <div className={inscricao2.boxDados}>
                        <label htmlFor="text">Dados Pessoais</label>
                        <div className={inscricao2.dados}>
                            <input type="text" name="name" placeholder="Seu nome *"/>
                            <input type="email" name="email" placeholder="Seu email *"/>
                        </div>
                        <input 
                            type="text" 
                            name="phone" 
                            placeholder="Seu telefone *" 
                            className={inscricao2.phone}
                        />
                    </div>

                    <div className={inscricao2.mensagem}>
                        <label htmlFor="text">Mensagem Adicional</label>

                        <textarea name="mensagem" rows="7" placeholder="Conte-nos porque você quer ser voluntário..."></textarea>

                        <div className={inscricao2.box}>
                            <p>Entraremos em contato para mais informações</p>

                            <button>Enviar Inscrição</button>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    )
}
