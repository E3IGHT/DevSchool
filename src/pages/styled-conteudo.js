import styled from "styled-components";

const PT2 = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;

.conta-admin {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1em 1em;

}

.administrador {
    display: flex;
    flex-direction: row;
    align-items: center;

}

.notificacao {
    width: 20px;
    height: 20px;

    font-size: 10px;
    text-align: center;
    color: white;
    font-weight: 700;
    

    border: 2px solid white;
    border-radius: 50%;
    background-color: #119FDC;
    position: absolute;
    left: 328px;
    top: 16px;
}

.nome-administrador {
    margin-left: 0.5em;
    font-size: 16px;

}

.botoes {
    display: flex;
    align-items: center;
}

.b1-superior {
    border-radius: 50%;
    border: none;
    width: 3.2em;
    height: 3.2em;
    background-color: #119FDC;
    margin-right: 1em;
}

.bt1-superior img {
    display: flex;
    align-items: center;
}

.novos-e-existentes {
    display: flex;
    flex-direction: column;
    padding: 3em;
    width: 100%;
    background-color: #F5F5F5; 
}

.matricula-novo-aluno {
    background-color: #fff;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
    padding: 2em 2em;
    margin-bottom: 2em;
}

.registro-novo-aluno {
    display: flex;
    flex-direction: row;
}

.linha-nome {
    border-left: 6px solid #119FDC;
    border-radius: 2em;
    height: 30px;
}

.titulo-novo-aluno {
    font-size: 32px;
    margin-left: 0.5em;
    margin-bottom: 1em;
    font-weight: 700;
    color: #3C3939;
}

.linha1-registro {
    display: flex;
    flex-direction: row;
}

.linha-box {
    display: flex;
    flex-direction: row;
}

.box-nome, .box-nome1, .box-nome2, .box-nome3, .box-nome4, .box-nome5, .box-nome6, .box-nome7 {
    font: 18px #615858;
    display: flex;
    align-items: center;
    margin-right: 10px;

}
.box-nome1 {
    margin-left: 48px;
}

.box-nome2 {
    margin-left: 35px; 
}

.box-nome3 {
    margin-left: 35px; 
}

.box-nome, .box-nome7 {
    margin-left: 22px;
}

.box-nome5 {
    margin-left: 23px;
}

.box-nome6 {
    margin-left: 42px;
}


.box-resp, .box-resp1 {
    background: #FFFFFF;
    border: 1px solid #A8A8A8;
    box-sizing: border-box;
    border-radius: 5px; 
    width: 209px;
    height: 36px;
    margin-bottom: 12px;
    margin-right: 10px;
}

.box-resp1 {
    width: 543px;
}

.box-nome7 {
    display: flex;
    align-items: flex-start;
}

textarea {
    resize: none;
    width: 543px;
    border: 1px solid #A8A8A8;
    border-radius: 5px; 
}

.cadastrar-novo-aluno {
    border: none;
    background: #119FDC;
    color: #fff;
    border-radius: 44px;
    width: 106px;
    height: 36px;
    margin-left: 10px;
}

.botaotototo {
    display: flex;
    align-items: flex-end;
}

.alunos-existentes-matriculados {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
    padding: 2em 2em;
}

.registros-alunos {
    display: flex;
    flex-direction: row;

}

table {
    border-collapse: collapse;
    border: 1px solid #E2E2E2;
}

thead {
    text-align: left;
    background: #6CC3DF;
    border: none;
    color: #fff;
    height: 3em;
    margin-right: 2em;
    border: rgba(186, 186, 186);

}

th, td {
    padding-left: 2em;
}

tbody, tr {
    height: 3em;
}

.outra-cor {
    background-color: #F5F5F5;
}

.bot {
    border: none;
    background: #565656;
    border-radius: 50%;
    padding: 8px 8px;
}

.bot img {
    align-items: center;
}

`

const PT3 = styled.div `
    display: flex;
    flex-direction: row;
    font-family: Roboto;
    font-weight: 500;
`

export { PT2, PT3 }