import Link from 'next/link';

export const metadata = {
    title: 'Vida Plena | Not Found',
};

export default function NotFound() {
    return (
        <>
            <div className="container text-center not-found">
                <div className="row p-4 mb-4">
                    <h1 className="text-info-emphasis mt-4">Esta página não está se sentindo muito bem...</h1>
                    <p className="text-body-secondary">
                        Mas nossa equipe está sempre pronta para cuidar de você. Tente outra rota ou fale com a gente.
                    </p>
                    <div className="col-md-12 text-center">
                        <img src="/imgNotFound/image404.png" className="w-50 img-fluid img-speak" />
                    </div>
                    <Link href="/">
                        <button type="button" className="btn btn rounded-5 botaoMensagemContactUs mt-4" style={{ backgroundColor: '#00715E', color: '#fff', width: '20%' }}>Voltar</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
