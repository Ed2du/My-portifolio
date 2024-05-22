let midiaArray = [
    {icon: 'bi bi-linkedin', link: 'https://www.linkedin.com/in/eduardo-de-oliveira-galdino-176709280/'},
    {icon: 'bi bi-github', link: 'https://github.com/Ed2du'}
]

export default function MidiaList () {
    return (
        <>
            <ul className="midia-list">
                {midiaArray.map(icon =>
                    <li className="icon-box" key={icon.icon}>
                        <a href={icon.link} target="_blank" className={icon.icon}></a>
                    </li>
                )}
            </ul>
        </>
    )
}