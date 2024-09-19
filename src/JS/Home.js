import '../css/home.css'
import {Link} from 'react-router-dom'


function Home(){
    return(
            <div className="Home">
                    <img src={require('../assets/imgfundo1.png')} className='Imagem2' alt='fundo1' width={600}/>
                    <img src={require('../assets/fthome.png')} className='Imagem' alt="mulher" width={950}/>
            
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