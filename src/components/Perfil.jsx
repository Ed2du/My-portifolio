import MidiaList from './MidiaList';
import imgPerfil from '../imagens/Perfil.jpeg';

export default function Perfil ( ) {
    return (
        <>
            <div className="PerfilContent" id='Home'>

                <img src={imgPerfil} alt=""  className='imgperfil'/>

                <div className='text-perfil'>

                    <div className='profile-box'>
                        <p className='profile'>
                            Hello! <br/>
                            I'm a Front-end Developer
                        </p>
                    </div>
                    <MidiaList/>
                </div>

            </div>
        </>
    )
}