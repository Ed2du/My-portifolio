

const topicos = ['About-me', 'Projects', 'Contact'];

export default function NavbarBtn () {

    return (
        <>
            <input type="checkbox" name="" id="inputcheck-header" />
            <label htmlFor="inputcheck-header">
                <div className="headerIcon">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </div>
            </label>
            <ul className="Header-topics">
                {topicos.map(item => 
                    <li className="header-item" key={item}>
                        <a href={`#${item}`} className="header-link">
                            {item}
                        </a>
                    </li>
                )}
            </ul>
        </>
    )
}