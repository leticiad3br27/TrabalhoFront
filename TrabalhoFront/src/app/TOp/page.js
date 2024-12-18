'use client';
import { useState, useEffect } from 'react';




export default function Batalha() {
  const [vidaUsuario, setVidaUsuario] = useState(100);
  const [vidaMonstro, setVidaMonstro] = useState(100);
  const [golpes, setGolpes] = useState(0);
  const [imagemMonstro, setImagemMonstro] = useState(monstroVivo);
  const [mensagem, setMensagem] = useState('');
  const [atacando, setAtacando] = useState(false);

  useEffect(() => {
    if (vidaMonstro <= 0) {
      setImagemMonstro(monstroMorto);
      setMensagem('Você venceu!');
    } else if (vidaUsuario <= 0) {
      setMensagem('Você perdeu!');
    }
  }, [vidaMonstro, vidaUsuario]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (vidaMonstro > 0 && vidaUsuario > 0) {
        setAtacando(true);
        setTimeout(() => {
          setVidaUsuario(vidaUsuario - 5);
          setAtacando(false);
        }, 500);
      }
    }, 2000);
    return () => clearInterval(intervalo);
  }, [vidaMonstro, vidaUsuario]);

  useEffect(() => {
    if (atacando) {
      setImagemMonstro(monstroAtacando);
    } else {
      setImagemMonstro(monstroVivo);
    }
  }, [atacando]);

  const atacar = () => {
    if (vidaMonstro > 0) {
      setVidaMonstro(vidaMonstro - 10);
      setGolpes(golpes + 1);
    }
  };

  const defender = () => {
    if (vidaUsuario < 100) {
      setVidaUsuario(Math.min(vidaUsuario + 10, 100));
    }
  };

  const reiniciar = () => {
    setVidaUsuario(100);
    setVidaMonstro(100);
    setGolpes(0);
    setImagemMonstro(monstroVivo);
    setMensagem('');
  };

  return (
    <div>
      <h1>Batalha contra o Monstro</h1>
      <img src={imagemMonstro} alt="Monstro" />
      <p>Vida do Usuário: {vidaUsuario}</p>
      <p>Vida do Monstro: {vidaMonstro}</p>
      <p>Golpes: {golpes}</p>
      <p>{mensagem}</p>
      <button onClick={atacar}>Atacar</button>
      <button onClick={defender}>Defender</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
}