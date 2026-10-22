import { TbAlertSquareRoundedFilled } from "react-icons/tb";

interface ExclamacaoProps {
    selecionado: boolean,
    aoSelecionar: () => void
}


const Exclamacao = ({ selecionado, aoSelecionar }: ExclamacaoProps) => {
    return (
    <TbAlertSquareRoundedFilled 
        color={`${selecionado ? 'red' : 'gray'}`}
        onClick={aoSelecionar}
    />)
}

export default Exclamacao