import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <header>
        <h1><a id="about" href="#">Felipe Duran</a></h1>
        <nav>
            <ul>
                <li>
                    <a href="#">Início</a>
                </li>

                <li>
                    <a href="#about">Sobre</a>
                </li>

                <li>
                    <a href="#">Skills</a>
                </li>

                <li>
                    <a href="#">Projetos</a>
                </li>

                <li>
                    <a href="#">Contato</a>
                </li>
            </ul>
        </nav>
    </header>
    </>
  )
}
