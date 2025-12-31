import footer from "./Footer.module.scss";

export default function Footer() {
  return (
        <footer>
            <section className={footer.boxFooter}>
                <div className={footer.logo}>
                    <figure>
                        <img src="../../../public/logo.png" alt="Logo" />
                        <p>Médicos & Dentistas</p>
                    </figure>

                    <p className={footer.textLogo}>Saúde e cuidado sem barreiras para toda comunidade.</p>
                </div>

                <div className={footer.contatos}>
                    <h3>Contato</h3>

                    <figure className={footer.email}>
                        <img src="../../../public/email.png" alt="Icone de carta" />
                        <p>contato@medico-dentista.org</p>
                    </figure>
                    <figure className={footer.telefone}>
                        <img src="../../../public/phone.png" alt="Icone de telefone" />
                        <p>(11) 3000-0000</p>
                    </figure>
                    <figure className={footer.endereco}>
                        <img src="../../../public/maps.png" alt="Icone de mapa" />
                        <p>São Paulo, Brasil</p>
                    </figure>
                </div>

                <div className={footer.redes}>
                    <h3>Redes Sociais</h3>

                    <div className={footer.boxRedes}>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>LinkedIn</p>
                    </div>
                </div>
            </section>

            <section className={footer.copy}>
                <p>© 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.</p>
            </section>
        </footer>
    )
}
