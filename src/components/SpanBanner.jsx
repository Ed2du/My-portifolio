let texto = "Hi,  I'm  Eduardo!";
let textoArray = texto.split('');

export default function SpanBanner () {

    return (
        <>
                <ul className="letter-group">
                    {textoArray.map ((letra, index) => 
                        <li className="letter" key={index}>
                            {letra}
                        </li>
                    )}
                </ul>
        </>
    )
}