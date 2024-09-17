import "./Banner.css"

//JSX Parece html, mas é a forma que o react enxerga e cria o HTML
function Banner() {
    return (
        <header className="banner">
            <img src="/imagens/banner.png" alt="Banner principal do organograma" />
        </header>
    )
}

export default Banner