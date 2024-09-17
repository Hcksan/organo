import { useState } from "react"
import Botao from "../botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

const Formulario = (props) => {
    const times = [
        "Programação",
        "Front-End",
        "Data Science",
        "Devops",
        "Mobile",
        "Inovação e Gestão"
    ]

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({nome, cargo, imagem, time})
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha Os Dados Para Criar o Card Do Colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome"
                    placeholder="Digite O Seu Nome" valor={nome} aoAlterado={valor => setNome(valor)} />
                <CampoTexto obrigatorio={true} label="Cargo"
                    placeholder="Digite O Seu Cargo" valor={cargo} aoAlterado={valor => setCargo(valor)} />
                <CampoTexto label="Imagem"
                    placeholder="Digite O Endereço Da Imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario