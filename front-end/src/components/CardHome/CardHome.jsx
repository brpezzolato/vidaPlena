import "@/components/CardHome/styleCardHome.css"

export default function Card({ text = "texto padrão lalala", src }) {
    return (
        <>
            <div className="card" id="cardInicial" style={{ width: "15rem" }}>
                <img src={src} className="card-img-top" style={{width: "40%", justifyContent: "center", display: "block", margin: "auto", marginTop: "8%"}} alt="..." />
                <div className="card-body">
                    <p className="card-text">
                        {text}
                    </p>
                </div>
            </div>
        </>
    )
}