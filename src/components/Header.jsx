import NavbarBtn from '../components/NavbarBtn'

export default function Header () {
    return (
        <>
            <header>
                <nav className="navbar">
                    <div>
                        <a href="https://github.com/Ed2du" target="blank">
                            <img src="https://github.com/Ed2du.png" alt="Icone de perfil do meu github" className="logoImg"/>
                        </a>
                    </div>
                    <div className='navbar-topics'>
                        <NavbarBtn/>
                    </div>
                </nav>
            </header>
        </>
    )
}