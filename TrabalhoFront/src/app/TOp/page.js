"use client";
import { useEffect,useState } from "react";

export default function Efeitos (){
    const[ufs,setUfs]=useState([]);
    const[ufSelected,setUfselected]=useState('');
    const[cities,setCities]=useState([]);
    const[citySelected,setCitySelected]= useState('');
    const getUfs=async() => {
        try{
            const response = await response.json();
            setUfs(data);
            console.log(data);
        } catch (error){
            console.log('deu ruim'+error)
        }
    }
    const getCities= async() =>{
        try{
            const response =await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSelected}municipios?orderBy=nome`);
            if (!response.ok){
                throw new Error ('Error ao buscar dados:' + response.statusText);
            }
            const data = await response.json();
            setCities(data);
            console.log(data);
        } catch (error){
            console.log('deu ruim'+ error)
        }
    }
    useEffect(() => {
        getUfs();
    },[])

    useEffect(() => {
        getCities();
    },[ufSelected])
    return (
        <div>
            <h1>Efeitos colaterais / Use Effect</h1>
            {
                <select onChange={(ev) => {setUfSelected(ev.target.value), setCitySelected('')}}>
                    <option value=""> Selecione o estado</option>
                    {ufs.map((uf) => (
                        <option 
                            value={uf.id} 
                            key={uf.id}>
                            {`${uf.nome} - ${uf.sigla}`}
                        </option>
                    ))}
                </select>
                // <ul>
                //     {ufs.map(uf => (
                //         <li key={uf.id}>{uf.nome}</li>
                //     ))}
                // </ul>
            }

            {
                <select onChange={(ev) => setCitySelected(ev.target.value)}>
                    <option value=""> Selecione a cidade</option>
                    {cities.map((city) => (
                        <option
                            value={city.nome}
                            key={city.id}>
                            {`${city.nome}`}
                        </option>
                    ))}
                </select>
            }
            {citySelected?<p>{citySelected}</p>:<p>Aguardando!</p>}
            {/* <h1>Efeitos colaterais / Use Effect</h1>
            <button onClick={() => {setCont(cont + 1)}}>Adicionar</button>
            <p>Renderizações cont 1: {cont}</p>
            <button onClick={() => {setCont2(cont2 + 1)}}>Adicionar</button>
            <p>Renderizações cont 2: {cont2}</p> */}
        </div>
    )
}
    
