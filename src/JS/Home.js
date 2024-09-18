import '../css/home.css'
import {Link} from 'react-router-dom'


function Home(){
    return(
            <div className="Home">
            <div claName="">
                <div className='decor-ball3'></div>
                <div className='decor-ball2'></div>
                <div className='decor-ball'>
            </div>

            </div>
                    <img src={require('../assets/imgfundo1.png')} alt='fundo1' width={500}/>
                    <img src={require('../assets/fthome.png')} className='Imagem' alt="mulher" width={680}/>
            
                <div className="textinho">
                    <p >Seu espaço para explorar, criar e compartilhar - Woman Space.</p> 
                </div>
                <div className="button-section">
                    <Link to="/login" className="button yellow-button">Login</Link>
                    <Link to="/cadastro" className="button blue-button">Cadastro</Link>
                </div>
            </div>
    )
}
    
export default Home;