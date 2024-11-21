import '../css/login.css';

import nome from '../img/nome.png';
import senha from '../img/senha.png';
import email from '../img/gmail.png';
import info from '../img/info.png';
import seta from '../img/seta.png';

/*<button id="info">
<img src={info} alt="botao de informações sobre segurança e recursos após o cadastro ou login"/>
</button>
<div id="fundo"></div>
<div id="infotexto">
<h2><u>Sua Segurança</u></h2>
<p>
    &ThickSpace;&ThickSpace; &ThickSpace;Você terá uma senha, criada por você, criptografada, 
    que dará acesso à sua conta somente você. Caso 
    esqueça-a, poderá ser redefinida.
</p>
<h2><u>Recursos após o Cadastro</u></h2>
<p>
    &ThickSpace;&ThickSpace; &ThickSpace;Você terá acesso a jogos podendo competir atravéz de um rank 
    das melhores classificações, e também terá acesso a conteúdos de 
    importante relevância à consiência das pessoas e principalente das 
    crianças.
</p>
</div>*/

function Login (){


    return(
        <>
            <div className="conatiner-fluid">
                <a href="/" id="voltar">
                    <img src={seta} alt="seta indicando para voltar"/>
                </a>
                <div className="row">
                    <div className="col-xl-5 col-lg-6" id="ca">
                        <div id="bemvindo">
                            <h2>Bem-Vindo</h2>
                            <hr className="col-8"/>
                            <p className="px-5 col-12 col-sm-10 col-md-7 col-lg-12">
                                Cadastre-se e aproveite o conteúdo 
                                divertido e educativo grátris do site, compita com seus amigos!
                            </p>    
                        </div>
                        
                        <a id="botao" href="cadastro.html" className="p-1">
                            <p className="m-0 py-2">Cadastrar-se</p>
                        </a>
                        <button id="botaolo">
                            <p>Entrar</p>
                        </button>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div id="lo" className="d-none d-lg-block">
                            <a href="login.html" id="voltar2">
                                <img src="img/seta.png" alt="seta indicando para voltar"/>
                            </a>
                            <h2>Bem-Vindo de Volta!</h2>
                            <hr/>
                            <div id="gmail">
                                <h3>e-mail</h3>
                                <div id="entrada">
                                    <div id="simbolo">
                                        <img src="img/gmail.png" alt="simbolo de e-mail"/>
                                    </div>
                                    <input type="email" id="inputgmail"/>
                                </div>
                            </div>
                            <div id="senha">
                                <h3>senha</h3>
                                <div id="entrada">
                                    <div id="simbolo">
                                        <img src="img/senha.png" alt="chave simbolizando a senha"/>
                                    </div>
                                    <input type="password" id="inputsenha"/>
                                </div>
                            </div>
                            <a href="conta.html" id="esquecer"><p>Esqueci a senha</p></a>
                            <a id="botao2" href="index.html">
                                <p>Entrar</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;