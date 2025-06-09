import "@/components/CardComentariosHome/styleCardComentariosHome.css"

export default function Card({ title = "título padrão", text = "texto padrão lalala", text2 = "titulo2 padrão", src, src2 }) {
    return (
        <>

            <div className="card custom-card mb-3" style={{ maxWidth: 640 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={src} className="img-fluid rounded-start custom-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body custom-body">
                            <h5 className="card-title custom-title">{title}</h5>
                            <p className="card-text custom-text">{text}</p>
                            <div className="pai">
                                <p className="data">{text2}</p>
                                <img src={src2} className="img-fluide" id="estrelaAvaliacao" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}