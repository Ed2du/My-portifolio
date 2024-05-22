import Techonogies from './Technologies';
import Projects from './Projects';

export default function Aboutme () {
    return (
        <>
            <section className="about" id="About-me">
                <div>    
                    <h1 className="about-title">
                        About-me :
                    </h1>
                    <p className="about-p">
                        Hi world! I'm a student of Systems Analysis and Development (ADS), committed to becoming an excellent front-end developer. My goal is to build a solid and rewarding career in this field, and I'm determined to achieve it through my commitment and passion for technology.
                    </p>
                </div>
                <div className='about-tech'>
                    <h1 className="about-skills">
                        My skills : 
                    </h1>
                    <Techonogies/>
                </div>
                <div className='projects-box' id='Projects'>
                    <h1 className='about-title'>
                        My Projects: 
                    </h1>
                    <Projects/>
                </div>
            </section>
        </>
    )
}

