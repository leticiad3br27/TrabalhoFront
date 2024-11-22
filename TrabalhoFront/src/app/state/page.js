'use client'
import { useState } from "react"
import styles from "./state.module.css"

export default function State() {
    const [conteudo, setConteudo] = useState('Quer conhecimento?');
    const [name, setName] = useState('');
    const [names, setNames] = useState([]);
    const [showdiv, setShowdiv] = useState(true);

    const mensagens = [
        "Não há lugar como o lar. - O Mágico de Oz",
        "Você tem coragem suficiente para correr riscos? - Harry Potter",
        "A única maneira de fazer um bom trabalho é amar o que você faz. - O Senhor dos Anéis",
        "A esperança é a única coisa mais forte do que o medo. - Jogos Vorazes",
        "A magia está nos olhos de quem vê. - As Crônicas de Nárnia",
        "A coragem não é a ausência do medo, mas a capacidade de vencê-lo. - O Hobbit",
        "A verdadeira coragem é fazer o que é certo, mesmo quando ninguém está olhando. - Percy Jackson",
        "O que quer que você faça, faça com todo o seu coração. - Eragon",
        "A vida é feita de escolhas. - Divergente",
        "O amor é a força mais poderosa do universo. - A Bela e a Fera",
        "A amizade é a coisa mais importante do mundo. - Harry Potter",
        "A verdadeira magia está dentro de você. - O Mágico de Oz",
        "A jornada é mais importante do que o destino. - O Senhor dos Anéis",
        "A esperança é a última a morrer. - Jogos Vorazes",
        "A coragem é a chave para a liberdade. - As Crônicas de Nárnia",
        "A verdadeira força vem de dentro. - O Hobbit",
        "A verdadeira magia é acreditar em si mesmo. - Percy Jackson",
        "A vida é uma aventura. - Eragon",
        "O amor é a chave para a felicidade. - A Bela e a Fera",
        "A amizade é a chave para a felicidade. - Harry Potter",
        "A verdadeira magia é o amor. - O Mágico de Oz",
        "A jornada é o que importa. - O Senhor dos Anéis",
        "A esperança é a chave para a sobrevivência. - Jogos Vorazes",
        "A coragem é a chave para a vitória. - As Crônicas de Nárnia",
        "A verdadeira força está no coração. - O Hobbit",
        "A verdadeira magia é a amizade. - Percy Jackson",
        "A vida é uma jornada. - Eragon",
        "O amor é a chave para a vida. - A Bela e a Fera",
        "A amizade é a chave para a vida. - Harry Potter",
        "A verdadeira magia é a coragem. - O Mágico de Oz",
        "A jornada é a chave para a sabedoria. - O Senhor dos Anéis",
        "A esperança é a chave para a vitória. - Jogos Vorazes",
        "A coragem é a chave para a sobrevivência. - As Crônicas de Nárnia",
        "A verdadeira força está na mente. - O Hobbit",
        "A verdadeira magia é a esperança. - Percy Jackson",
        "A vida é uma escolha. - Eragon",
        "O amor é a chave para a paz. - A Bela e a Fera",
        "A amizade é a chave para a paz. - Harry Potter",
        "A verdadeira magia é a força. - O Mágico de Oz",
        "A jornada é a chave para a felicidade. - O Senhor dos Anéis",
        "A esperança é a chave para a coragem. - Jogos Vorazes",
        "A coragem é a chave para a esperança. - As Crônicas de Nárnia",
        "A verdadeira força está na coragem. - O Hobbit",
        "A verdadeira magia é a jornada. - Percy Jackson",
        "A vida é uma magia. - Eragon",
        "O amor é a chave para a coragem. - A Bela e a Fera",
        "A amizade é a chave para a coragem. - Harry Potter"
    ];
    

    const contpara = () => {
        const novaMensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
        setConteudo(novaMensagem);
        console.log('conteudo: ' + conteudo);
    };

    const continput = (evento) => {
        console.log(evento.target.value);
        setName(evento.target.value);
    };

    const addName = () => {
        setNames([...names, name]);
        setName('');
    };
    const colors = [
        '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
    ];
    
    return (
        <div className={styles.container}>
        <p className={styles.conteudo}>{conteudo}</p>
        <button className={styles.botao} onClick={contpara}>Click para obter conhecimento</button>
        <button className={styles.botao} onClick={() => { setShowdiv(!showdiv) }}>{showdiv ? "Esconder" : "Mostrar"}</button>
        {showdiv && (
            <div className={styles.div}>
                <p>Nome: {name}</p>
                <input className={styles.input} type="text" value={name} onChange={continput} />
                <button className={styles.botao} onClick={addName}>Adicionar Nome</button>
                <ul className={styles.lista}>
                    {names.map((n, index) => (
                        <li key={index} style={{ color: colors[index % colors.length] }}>{n}</li>
                    ))}
                </ul>
            </div>
        )}
    </div>
        
    )
}
