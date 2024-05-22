import Header from './Header';
import Banner from './Banner';
import Perfil from './Perfil';
import ContentAbout from './ContentAbout';
import Contact from './Contact';

export default function Principaldiv() {
  return (
    <>
        <main>
            <Header/>
            <Banner/>
            <Perfil/>
            <ContentAbout />
            <Contact />
        </main>
    </>
  )
}

