import './intro.css'

function Intro() {

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="intro-titulo">Bienvenido a INDIE-ARG</h2>
                    </div>

                </div>

                <div id="intro-textoeimagen" className="row">
                    <div className="col">
                        <p className="intro-text">Gracias por visitarnos. Promovemos el arte latinoamericano. Apoya a nuestros artistas comprando alguna de sus producciones</p>

                    </div>
                    <div className="col">

                        <section id="fotos__index" />

                    </div>
                </div>
            </div>


        </>
    );

}

export default Intro;