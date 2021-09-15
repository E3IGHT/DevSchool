import Conteudo from "./conteudo";
import Cabecalho from "../components/cabecalho/cabecalho"
import { PT3 } from "./styled-conteudo";

export default function DevStore () {
    return (
        <PT3>
            <Cabecalho />
            <Conteudo />
        </PT3>
    )
}