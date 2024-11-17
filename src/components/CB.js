import '../css/CB.css';

import tresLixeiras from '../img/header2.png';
import elipse1 from '../img/eli1.png';
import elipse2 from '../img/eli2.png';
import homeImg from '../img/fhome.png';
import cbImg from '../img/fcb.png';
import feedbackImg from '../img/fconta.png';
import lixosImg from '../img/flixos.png';
import jogosImg from '../img/fjogos.png';

function CB (){


    return(
        <>
            <header className="container-fluid">
                <div className="row align-items-center d-flex py-3">
                    <div className="col-8 d-flex align-items-center">
                        <a href="index.html" className="ms-3 a hover1 mt-1"><h1 id="cleanBeach">Clean Beach</h1></a>
                    </div>
                    <div className="col-4 d-none d-sm-flex justify-content-end pe-4">
                        <div>
                            <div id="loginCadastro" className="d-inline-block py-2 mt-2">
                                <a href="login.html" id="login" className="a m-0 p-3 px-4 hover1">
                                    Login
                                </a>
                                <a href="cadastro.html" id="cadastro" className="a m-0 p-3 px-4 hover1">
                                    Cadastrar
                                </a>        
                            </div>
                        </div>
                    </div>
                    <div className="col-2 d-flex justify-content-end d-none">
                        <div>
                            <a href="lixos.html" className="a"><img src={tresLixeiras} className="hover1" id="imgHeader" alt="Três lixeiras, uma verde, uma amarela e uma vermelha (representando a reciclagem na praia)"/></a>
                        </div>
                    </div>
                </div>
            </header>
            
            <div class="container-fluid">
                <div class="row mt-4 d-sm-flex justify-content-center d-none">
                    <nav class="col-11 col-md-9 col-lg-7 d-flex justify-content-around">
                        <a href="/" class="a"><p id="anavSec" class="hover1">Home</p></a>
                        <a href="/recycle-garbage" class="a"><p id="anavSec" class="hover1">Recycle Garbage</p></a>
                        <a href="/divert-fish" class="a"><p id="anavSec" class="hover1">Divert Fish</p></a>
                        <a href="/lixos" class="a"><p id="anavSec" class="hover1">Lixos</p></a>
                        <a href="/clean-beach" class="a"><p id="anavPri">Clean Beach</p></a>
                        <a href="/feedback" class="a me-4"><p id="anavSec" class="hover1">Feedback</p></a>
                        <hr class="hrNav"/>
                    </nav>
                </div>
            </div>
            <div id="nav2" class="d-block d-sm-none">
                <hr id="selecionadoCB"/>
                <a href="/clean-beach"><img src={cbImg} alt="Clean Beach (Explicações)" id="fcb"/></a>
                <a href="/feedback"><img src={feedbackImg} alt="Feedback" id="fco" className="aNav2"/></a>
                <a href="/"><img src={homeImg} alt="Home (Início)" id="fho" className="aNav2"/></a>
                <a href="/jogos"><img src={jogosImg} alt="Jogos" id="fjo" className="aNav2"/></a>
                <a href="/lixos"><img src={lixosImg} alt="Lixos (Curiosidades e Conscientização)" id="fli" className="aNav2"/></a>
                <img src={elipse1} id="eli1" alt="nav"/>
                <img src={elipse2} id="eli2" alt="detalhe da nav"/>
            </div>
            
            <div class="container-fluid mb-5 pb-5 pb-sm-0">
                <div class="row d-none">
                    <div id="conhecer" class="col-12">
                        <p>Conheça Nosso TCC</p>
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="col-12">
                        <div class="row py-5">
                            <div class="col-12 col-sm-10 col-md-8 col-lg-6 px-0">
                                <div id="bgTitulo" class="ps-0 ps-sm-5">
                                    <h2 id="titulo" class="px-4 px-sm-5">O que é?</h2>    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-11 col-lg-10 px-3">
                        <p id="texto">
                            Um dos animais que foram estudados, tinha no seu corpo 742 resíduos 
                            de lixo, em que boa parte desse lixo era plástico.Um dos animais que 
                            foram estudados, tinha no seu corpo 742 resíduos de lixo, em que boa 
                            parte desse lixo era plástico.Um dos animais que foram estudados, tinha 
                            no seu corpo 742 resíduos de lixo, em que boa parte desse lixo era 
                            plástico.Um dos animais que foram estudados, tinha no seu corpo 742 
                            resíduos de lixo, em que boa parte desse lixo era plástico.Um dos animais 
                            que foram estudados, tinha no seu corpo 742 resíduos de lixo, em que 
                            boa parte desse lixo era plástico.Um dos animais que foram estudados, 
                            tinha no seu corpo 742 resíduos de lixo, em que boa parte desse lixo 
                            era plástico.
                        </p>
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="col-12">
                        <div class="row py-5">
                            <div class="col-12 col-sm-10 col-md-8 col-lg-6 px-0">
                                <div id="bgTitulo">
                                    <h2 id="titulo" class="px-4 px-sm-5">Qual é a finalidade?</h2>    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-11 col-lg-10 px-3">
                        <p id="texto">
                            Um dos animais que foram estudados, tinha no seu corpo 742 resíduos 
                            de lixo, em que boa parte desse lixo era plástico.Um dos animais que 
                            foram estudados, tinha no seu corpo 742 resíduos de lixo, em que boa 
                            parte desse lixo era plástico.Um dos animais que foram estudados, tinha 
                            no seu corpo 742 resíduos de lixo, em que boa parte desse lixo era 
                            plástico.Um dos animais que foram estudados, tinha no seu corpo 742 
                            resíduos de lixo, em que boa parte desse lixo era plástico.Um dos animais 
                            que foram estudados, tinha no seu corpo 742 resíduos de lixo, em que 
                            boa parte desse lixo era plástico.Um dos animais que foram estudados, 
                            tinha no seu corpo 742 resíduos de lixo, em que boa parte desse lixo 
                            era plástico.
                        </p>
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="col-12">
                        <div class="row py-5">
                            <div class="col-12 col-sm-10 col-md-8 col-lg-6 px-0">
                                <div id="bgTitulo">
                                    <h2 id="titulo" class="px-4 px-sm-5">Como funciona o site?</h2>    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-11 col-lg-10 px-3">
                        <p id="texto">
                            Um dos animais que foram estudados, tinha no seu corpo 742 resíduos 
                            de lixo, em que boa parte desse lixo era plástico.Um dos animais que 
                            foram estudados, tinha no seu corpo 742 resíduos de lixo, em que boa 
                            parte desse lixo era plástico.Um dos animais que foram estudados, tinha 
                            no seu corpo 742 resíduos de lixo, em que boa parte desse lixo era 
                            plástico.Um dos animais que foram estudados, tinha no seu corpo 742 
                            resíduos de lixo, em que boa parte desse lixo era plástico.Um dos animais 
                            que foram estudados, tinha no seu corpo 742 resíduos de lixo, em que 
                            boa parte desse lixo era plástico.Um dos animais que foram estudados, 
                            tinha no seu corpo 742 resíduos de lixo, em que boa parte desse lixo 
                            era plástico.
                        </p>
                    </div>
                </div>
                <div class="row mt-4 pb-5 pb-sm-0">
                    <div class="col-12 d-flex justify-content-center">
                        <a class="a raio bg1 py-3 px-5 hover1" id="pdf" href="https://drive.google.com/uc?export=download&id=1VRG6_wf4EYs6W-iVZQJGLzQ9hDLBsla7">
                            <p>Click aqui e veja nosso PDF</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CB;