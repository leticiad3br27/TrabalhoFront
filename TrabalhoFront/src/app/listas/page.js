export default function Listas() {
    const monstros = [
        'Minotauro',
        'Medusa',
        'Hidra de Lerna',
        'Cérbero',
        'Quimera',
        'Echidna',
        'Procrustes',
        'Polifemo',
        'Escorpião Gigante',
        'Dracaenae',
        'Ladon',
        'Kronos',
        'Typhon'
    ];

    const monstrosObj = [
        { id: 0, nome: 'Dracaenae' },
        { id: 1, nome: 'Cérbero' },
        { id: 2, nome: 'Quimera' },
        { id: 3, nome: 'Esfinge' },
        { id: 4, nome: 'Empousa' },
        { id: 5, nome: 'Telquines' },
        { id: 6, nome: 'Ladon' },
        { id: 7, nome: 'Aracne' }
    ];
    

    return (
        <div>
            <h1>Monstros Derrotados</h1>
            <p>{monstrosObj[0].nome}</p>
            <h2>Lista do Percy</h2>
            <ul>
                {monstros.map((monstro, i) => (
                    <li key={i}>{i + 1} - {monstro}</li>
                ))}
            </ul>
            <div>
                <h2>Lista da Annie</h2>
                {monstrosObj.map((monstroOBJ) => (

                    <div key={monstroOBJ.id}>
                        <h3>{monstroOBJ.id}</h3>

                        <p>{monstroOBJ.nome}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
