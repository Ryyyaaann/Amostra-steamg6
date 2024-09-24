import React from 'react';
import '../css/Sobre.css';

function Sobre() {
    return (
            <div className='Sobre'>
                <h1 className='titulo'>Nosso Objetivo</h1>
                <div className='subtitulo'>
                    <p>Este projeto, desenvolvido por estudantes do ensino médio técnico, tem como objetivo combater e prestar suporte às artistas que têm seus trabalhos considerados como inferiores, tanto em divulgação quanto em relevância diante das exposições de autoria majoritariamente masculina.<br/><br></br>
                    Portanto, com esta plataforma pretendemos sanar 3 problemáticas:<br></br>
    A falta de espaço para que mulheres mostrem seu trabalho e sejam levadas a sério;<br></br>
    A falta de suporte tanto social quanto técnico para que estas possam viver da exposição artística;<br></br>
    A ausência de uma comunidade de apoio, no sentido profissional e pessoal, para que possamos lhes prestar o máximo de apoio possível.</p>
                </div>

                <div className='mulher-fundo'>
                    <img className='mulher-fundo-img' src={require('../assets/img 1 sobre.png')}/>
                </div>
                <div className='suporte-flores'>
                    <img className='flor1' src={require('../assets/flor1.png')}/>
                    <img className='flor2' src={require('../assets/flor2.png')}/>
                </div>
                <div className='suporte'>
                    <section>
                        <h1>Nosso Suporte</h1>
                        <p>Entre em qualuqer caso de problema no site, transaferencia, verificação de perfil dentre ademais dificuldade que se encontra. Através de nosso e-mail e número para contato.</p>
                        <br></br>
                        <span>WomenSpace@exemplo.com</span>
                        <br></br>
                        <br></br>
                        <span>(71) 9568-1234</span>
                    </section>
                </div>
                    <div className='lowcontainer'>
                        <h1 className='lowtitulo'>Inspirações</h1>
                        <div className='descContainer'>
                            <h3 className='name'>GUERRILLA GIRLS</h3>
                            <p className='subname'>Um coletivo de artistas femininas que utiliza a arte para promover a igualdade de gênero nas artes visuais.</p>
                            <h3 className='name'>Women Artists Archives National Directory <br></br>(WAAND)</h3>
                            <p className='subname'>Uma base de dados online que oferece informações sobre artistas mulheres, especialmente aquelas que contribuíram para o movimento feminista.</p>
                            <h3 className='name'>The Art History Babes</h3>
                            <p className='subname'>Um podcast e plataforma online dedicada a tornar a história da arte mais acessível e inclusiva, incluindo um foco em artistas sub-representadas.</p>
                        </div>
                    </div>
             </div>
    )
}

export default Sobre;