import '../css/home.css'
import {Link} from 'react-router-dom'

function Home(){
    return(
            <div className="Home">
                <div className='Imagem'>
                    <img src={require('../assets/Mulher-2.png')} alt="mulher" width={620}/>
                </div>
                <div className="textinho">
                    <p>Seu espaço para</p>
                    <p>explorar, criar e</p>
                    <p>compartilhar -</p>
                    <p>Woman Space.</p>
                </div>
                <div className='BotaoLogin'>
                    <button class="yellow-button-login"><Link to="/login " className="cad-link">Login</Link></button>
                </div>
                <div className='BotaoSignUp'>
                    <button class="blue-button-signup"><Link to="/cadastro" className="cad-link">Cadastro</Link></button>
                </div>
            </div>
    )
}
    
export default Home;