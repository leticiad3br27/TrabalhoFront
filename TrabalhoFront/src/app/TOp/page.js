'use client';

import { useEffect, useState} from "react";

export default function Efeitos(){

    const[ cont,setcont]=useState(0)
    const[ cont2,setcont2]=useState(0)

    useEffect(()=>{ console.log('Renderizou')})

    return(
        <div>
            <h1>Efeitos Topzera</h1>
            <button onClick={()=> {setcont(cont+1)}}>adicionar</button>
            <p>Renderizaçoes 1 :{cont}</p>
            <button onClick={()=> {setcont2(cont2+1)}}>adicionar</button>
            <p>Renderizaçoes 2 :{cont2}</p>

        </div>
    )
}