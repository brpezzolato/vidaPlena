import "@/components/CardMedicos/styleCardMedicos.css"

export default function Card({ title = "Título padrão", text = "texto padrão lalala", text2 = "segundo texto" ,src }) {
    return (
        <>

            <div className="card" id="corpoCard" style={{ width: "18rem" }}>
                <img src={src} id="imgDoutores" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" id="tituloCard">{title}</h5>
                    <p className="card-text" id="textoCard">
                        {text}
                    </p>
                    <p className="card-text2">{text2}</p>
                </div>
            </div>


        </>
    )
}