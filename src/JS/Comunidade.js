import React from "react";
import '../css/comunidade.css';


function Comunidade() {
    return (
        <div className='comunidades'>
            <div>
                <img src={require('../assets/grupo2.png')} className='grupo3-imagem' alt="nome" />
                <img src={require('../assets/Grupo1.png')} className='grupo1-imagem' alt="nome" />
                <img src={require('../assets/Exposicoes.png')} className='exposicoes-imagem' alt="nome" width={800}/>
                <img src={require('../assets/grupo3.png')} className='grupo2-imagem' alt="nome" />
                <img src={require('../assets/grupo4.png')} className='grupo4-imagem' alt="nome" />
                <img src={require('../assets/grupo5.png')} className='grupo5-imagem' alt="nome" />
                    <p className='titulo-page'>Comunidades</p>
            </div>
            <div className='cartoes1'>
                <div className="card" style={{ backgroundColor: '#FFDC52' }}>
                    <img
                        // src={require('../assets/artistas-negras.png')} width={498}
                        alt="Descrição da imagem"
                        className="card-img"
                    />
                    <div className="card-content">
                        <div className="title-container">
                            <h2 className="card-title">Artistas Negras</h2>
                            <span className="verified-icon">
                                <i className="fas fa-check-circle"></i>
                            </span>
                        </div>
                    </div>
                </div>


                <div className="card" style={{ backgroundColor: '#FF4D4D' }}>
                    <img
                        // src={require('../assets/lgbtq.png')}
                        alt="Descrição da imagem"
                        className="card-img"
                        width={498}
                    />
                    <div className="card-content">
                        <div className="title-container">
                            <h2 className="card-title">LGBTQIAPN+</h2>
                            <span className="verified-icon">
                                <i className="fas fa-check-circle"></i>
                            </span>
                        </div>
                    </div>
                </div>


                <div className="card" style={{ backgroundColor: '#0C6893' }}>
                    <img
                        // src={require('../assets/arte-game-3d.png')}
                        alt="Descrição da imagem"
                        className="card-img"
                        width={498}
                    />
                    <div className="card-content">
                        <div className="title-container">
                            <h2 className="card-title">Modelagem 3D</h2>
                            <span className="verified-icon">
                                <i className="fas fa-check-circle"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cartoes2'>
                <div className="card" style={{ backgroundColor: '#303C4D' }}>
                    <img
                        // src={require('../assets/arte-game-2d.png')}
                        alt="Descrição da imagem"
                        className="card-img"
                        width={498}
                    />
                    <div className="card-content">
                        <div className="title-container">
                            <h2 className="card-title">Modelagem 2D</h2>
                            <span className="verified-icon">
                                <i className="fas fa-check-circle"></i>
                            </span>
                        </div>
                    </div>
                </div>


                <div className="card" style={{ backgroundColor: '#F2A8F1' }}>
                    <img
                        //src={require('../assets/arte-ceramica.png')}
                        alt="Descrição da imagem"
                        className="card-img"
                        width={498}
                    />
                    <div className="card-content">
                        <div className="title-container">
                            <h2 className="card-title">Arte Realista</h2>
                            <span className="verified-icon">
                                <i className="fas fa-check-circle"></i>
                            </span>
                        </div>
                       
                    </div>
                </div>


                <div className="card" style={{ backgroundColor: '#F7E7B6' }}>
                    <img
                        //src={require('../assets/animacao.png')}
                        alt="Descrição da imagem"
                        className="card-img"
                        width={498}
                    />
                    <div className="card-content">
                        <div className="title-container">
                            <h2 className="card-title">Animação</h2>
                            <span className="verified-icon">
                                <i className="fas fa-check-circle"></i>
                            </span>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Comunidade;
