/* import Image from "next/image"; */
import styles from "./page.module.css";
import Image from "next/image";
import header from "@/components/Header";

export default function Home() {
  const nome = 'Leticia Silva Almeida'
  return (
    <div>
      <header />
      <h1>
        Essa é a minha pagina
      </h1>
      <p>Eu sou a: {nome}</p>
      <Image 
        className={styles.imagem}
        src={"/imagens/OIP.jpg"} 
        alt={"imagem"} 
        layout="responsive" 
        width={850} 
        height={500} 
      />
      <p>Esses aqui são Percy Anne e grover ^</p>
    </div>
  );
}
