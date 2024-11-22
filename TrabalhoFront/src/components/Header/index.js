"use client"
import Link from "next/link"
import style from "./header.module.css"
import { useState } from "react";

export default function Header() {
    const [showMenu, setShowMenu] = useState(true)
    const [buttonText, setButtonText] = useState("Achou!")

    const handleClick = () => {
        setShowMenu(!showMenu)
        setButtonText(showMenu ? "Cade?" : "Achou!")
    }

    return (
        <header className={style.header}>
            <button className={style.botao} onClick={handleClick}>{buttonText}</button>
            {
                showMenu &&
                <nav>
                    <ul className={style.li}>
                        <li>
                            <Link href="/sobre" className={style.link}>Sobre</Link>
                        </li>
                        <li>
                            <Link href="/state" className={style.link}>Diverção</Link>
                        </li>
                        <li>
                            <Link href="/bolo" className={style.link}>Cookie</Link>
                        </li>
                        <li>
                            <Link href="/" className={style.link}>Inicial</Link>
                        </li>
                    </ul>
                </nav>
            }
        </header>
    )
}
