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
                <div className="button-section">
                    <Link to="/login" className="button yellow-button">Login</Link>
                    <Link to="/cadastro" className="button blue-button">Cadastro</Link>
                </div>
            </div>
    )
}
    
export default Home;