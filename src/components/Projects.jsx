import projetoORGANO from '../imagens/projetoOrgano.png'
import projetoFOKUS from '../imagens/projetoFOKUS.png'
import projetoCALMARIA from '../imagens/projetoCALMARIA.png'
import projetoAluraBOOKS from '../imagens/projetoAluraBOOKS.png'



const text = [
    {title: 'Organo', src: projetoORGANO, p: 'Organo is a web page for team registration. It allows the creation of teams, viewing of users registered in each team, and specification of the desired image and activity type.Project was developed in React.', linkRep: 'https://github.com/Ed2du/React-projects'},

    {title: 'projeto Fokus', src: projetoFOKUS, p: 'Fokus Project is a dynamic Pomodoro timer with mode-switching functions, including Focus, Short Break, and Long Break. It also features optional background music and an editable "to-do list" with "in progress" and "completed" statuses, which updates when the focus timer ends. develped in Javascript.', linkRep: 'https://github.com/Ed2du/Projects-with-alura-Javascript'},

    {title: 'CalmariaSPA', src: projetoCALMARIA, p: 'CalmariaSPA is an inviting landing page designed to convey calm and relaxation through a light color palette, modern layout, and gentle interactions that create a sense of fluidity. This project was developed using SASS.', linkRep: 'https://github.com/Ed2du/CSS-training/tree/main/projetoCALMARIA'},

    {title: 'AluraBooks', src: projetoAluraBOOKS, p: 'AluraBooks is a web page for searching technology books. It utilizes a mobile-first approach and features a fully responsive design adaptable to different screen sizes. The use of Swiper enhances user interaction, and the semantic design improves accessibility.', linkRep: 'https://github.com/Ed2du/Project-with-alura-AluraBooks'}
]

export default function Projects () {
    return (
        <>
            <ul className="Projects-list">
                {text.map (item => (
                    <li className="project" key={item.title}>
                        <div className="project-content">
                            <div className='img-content'>
                                <img src={item.src} alt={`Imagem atual do projeto ${item.title}`} className='img-project'/>
                            </div>
                            <h2 className="project-title">
                                {item.title}
                            </h2>
                            <p className="project-p">
                                {item.p}
                            </p>
                            <a href={item.linkRep} className='btn-link' target='_blank'>
                                Click for view repository
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}