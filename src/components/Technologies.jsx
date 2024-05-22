import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiSass, DiBootstrap } from "react-icons/di"

const Techs = [ 
    {id: "html", name: "HTML5", icon: <DiHtml5 />},
    {id: "css", name: "CSS3", icon: <DiCss3 />},
    {id: "js", name: "JavaScript", icon: <DiJavascript1 />},
    {id: "react", name: "React", icon: <DiReact />},
    {id: "node", name: "Node.js", icon: <DiNodejsSmall />},
    {id: "sass", name: "Sass", icon: <DiSass />},
    {id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap />}
];

export default function Technologies () {
    return (
        <>
            <div className="tech-skills">
                <ul className="tech-list">
                    {Techs.map (icon => (
                        <li className="tech-card" key={icon.id} id={icon.id}>
                            {icon.icon}
                            <h3 className="tech-name">
                                {icon.name}
                            </h3>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}