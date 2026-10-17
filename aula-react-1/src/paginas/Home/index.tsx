import Cabecalho from "../Cabecalho"
import Principal from "../Principal"
import Rodape from "../Rodape"

const Home = () => {
    return (
        <>
            <Cabecalho titulo="Quadro Kanban"/>
            <Principal />
            <Rodape />
        </>
    )
}

export default Home