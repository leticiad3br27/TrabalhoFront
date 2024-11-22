import styles from "./sobre.module.css"

export default function sobre() {
    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>Sobre</h1>
            <p className={styles.Titulo}>Conheça os personagens principais de Percy Jackson</p>
            
            <section className={styles.personagem}>
                <h2 className={styles.h2}>Annabeth Chase</h2>
                <p className={styles.paragrafo}>
                    Annabeth Chase é uma semideusa, filha da deusa Atena. Ela é conhecida por sua inteligência e habilidades estratégicas. Annabeth é uma das personagens principais da série "Percy Jackson e os Olimpianos" e é a namorada de Percy Jackson.
                </p>
            </section>

            <section className={styles.personagem}>
                <h2 className={styles.h2}>Percy Jackson</h2>
                <p className={styles.paragrafo}>
                    Percy Jackson é o protagonista da série. Ele é um semideus, filho de Poseidon, o deus do mar. Percy descobre seus poderes aos 12 anos e embarca em várias aventuras para salvar o Olimpo e o mundo dos mortais.
                </p>
            </section>

            <section className={styles.personagem}>
                <h2 className={styles.h2}>Grover Underwood</h2>
                <p className={styles.paragrafo}>
                    Grover Underwood é um sátiro e o melhor amigo de Percy. Ele é meio humano e meio bode, e tem a missão de proteger Percy e outros semideuses. Grover é leal e corajoso, sempre pronto para ajudar seus amigos.
                </p>
            </section>
        </main>
    )
}
