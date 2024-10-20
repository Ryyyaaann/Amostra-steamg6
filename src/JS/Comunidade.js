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
                         src={require('../assets/Rectangle 14.png')} width={498}
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
                        src={require('../assets/Rectangle 31.png')}
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
                        src={require('../assets/Rectangle 39.png')}
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
                        src={require('../assets/Rectangle 34.png')}
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
                        src={require('../assets/Rectangle 41.png')}
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
                        src={require('../assets/Rectangle 40.png')}
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
