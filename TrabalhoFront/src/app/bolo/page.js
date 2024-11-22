import styles from "./Bolo.module.css"

export default function sobre() {
    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>Receita de Cookies Azuis 🍪</h1>
            <p className={styles.Titulo}>Aprenda a fazer deliciosos cookies azuis! Da tia sally</p>
            
            <section className={styles.receita}>
                <h2 className={styles.h2}>Ingredientes 🍪</h2>
                <ul className={styles.lista}>
                    <li>175g de manteiga (em temperatura ambiente)</li>
                    <li>200g de açúcar mascavo</li>
                    <li>2 ovos</li>
                    <li>400g de farinha de trigo</li>
                    <li>1 colher de chá de fermento em pó</li>
                    <li>1 colher de chá de essência de baunilha</li>
                    <li>Corante alimentício azul</li>
                    <li>200g de gotas de chocolate</li>
                </ul>
                <h2 className={styles.h2}>Modo de Preparo 🍪</h2>
                <ol className={styles.lista}>
                    <li>Preaqueça o forno a 180°C.</li>
                    <li>Em uma tigela, bata a manteiga e o açúcar até obter uma mistura cremosa.</li>
                    <li>Adicione os ovos e a essência de baunilha, e misture bem.</li>
                    <li>Adicione o corante alimentício azul até obter a cor desejada.</li>
                    <li>Em outra tigela, peneire a farinha e o fermento.</li>
                    <li>Adicione a mistura de farinha à mistura de manteiga e mexa até incorporar.</li>
                    <li>Adicione as gotas de chocolate e misture.</li>
                    <li>Coloque colheradas da massa em uma assadeira forrada com papel manteiga.</li>
                    <li>Asse por cerca de 10-12 minutos ou até que as bordas estejam levemente douradas.</li>
                    <li>Deixe esfriar antes de servir.</li>
                </ol>
            </section>
        </main>
    )
}
