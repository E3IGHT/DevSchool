import { PT1 } from "./styled-cabecalho"

export default function Cabecalho () {
    return (
        <PT1>
            <div class="cabecalho-escola">
                <div class="cb-logo"> <img src="/assets/images/gitlab.svg" alt="" /> </div>
                <div class="cb-titulo"> <b class="coloridinho">Dev</b>Store </div>
            </div>
            <div className="cor-diferente"> </div>
            <div className="area-gerenciamento"> 
                <div className="area-gern"> Gerenciamento </div>
                <div className="chevron-area"> <img src="/assets/images/chevron-down.svg" alt="" /> </div>
            </div>
            <div className="area-alunos"> <div className= "a-alunos"> Alunos </div> </div>
        </PT1>
    )
}