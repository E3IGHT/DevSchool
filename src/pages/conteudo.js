import { useEffect, useState } from "react";
import { PT2 } from "./styled-conteudo";

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'

import Api from "../services/api"
const api = new Api();


export default function Conteudo () {

    const[nome, setNome] = useState('');
    const[precod, setPrecod] = useState('');
    const[precop, setPrecop] = useState('');
    const[produtos, setProdutos] = useState([]);
    const[imagem, setImagem] = useState('');
    const[categoria, setCategoria] = useState('');
    const[avaliacao, setAvaliacao] = useState('');
    const[estoque, setEstoque] = useState('');
    const[descricao, setDescricao] = useState('');
    const[idAlterando, setIdAlterando] = useState(0);
    const loading = useRef(null);


    async function listarProdutos () {
        loading.current.continuousStart();
        let a = await api.listarProdutos();
        setProdutos(a);
        loading.current.complete();
    }


    async function adicionarProduto () {
        
        if(idAlterando == 0) {
            let a = await api.adicionarProduto(nome, categoria, precod, precop, avaliacao, descricao, imagem, estoque);
            
            if(a.erro) {
                toast.warning(a.erro);
            } else {
                toast.success('O produto foi adicionado com sucesso!')
            }

        } else {
            let a = await api.alterarProduto(idAlterando, nome, categoria, precod, precop, avaliacao, descricao, imagem, estoque);

            if(a.erro) {
                toast.warning(a.erro);
            } else {
                toast.success('O produto foi alterado com sucesso!')
            }
        }

        listarProdutos();
        limparCampos();

    }

    async function removerProduto (id){
        confirmAlert({
            title: 'Remover Produto',
            message: `Tem certeza que deseja remover o produto ${id}`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async() => {
                        let r = await api.deletarProduto(id);
                        if(r.erro) {
                            toast.warning(r.erro)
                        } else {
                            toast.success('Produto removido com sucesso!')
                            listarProdutos();
                        }
                    }
                },
                {
                    label: 'Não'
                }
            ]
        })
    }

    async function editar (item) {
        setNome(item.nm_produto);
        setCategoria(item.ds_categoria);
        setPrecod(item.vl_preco_de);
        setPrecop(item.vl_preco_por);
        setAvaliacao(item.vl_avaliacao);
        setDescricao(item.ds_produto);
        setImagem(item.img_produto);
        setEstoque(item.qtd_estoque);
        setIdAlterando(item.id_produto);
    }

    async function limparCampos () {
        setNome('');
        setCategoria('');
        setPrecod('');
        setPrecop('');
        setAvaliacao('');
        setDescricao('');
        setImagem('');
        setEstoque('');
        setIdAlterando(0);
    }



    useEffect(() => {
        listarProdutos();
    },[])

    return (
        <PT2>
            <ToastContainer> </ToastContainer>
            <LoadingBar hidth = "4" color= "blue" ref={loading}> </LoadingBar>
            <div className="conta-admin">
                <div className= "administrador">
                    <div className="foto-administrador"> <img src="/assets/images/Ellipse.svg" alt="" /> </div>
                    <div className="notificacao"> 3 </div>
                    <div className="nome-administrador"> Olá, <b> Bruno de Oliveira </b> </div>
                </div>
                <div className="botoes">
                        <button className="b1-superior"> <img src="/assets/images/refresh2 1.svg" alt="" /> </button>
                        <button className="b1-superior"> <img src="/assets/images/log-out (1).svg" alt="" /> </button>
                </div>
            </div>
            <div className="novos-e-existentes">
                <div className="matricula-novo-aluno">
                    <div className="registro-novo-aluno">
                        <div className="linha-nome"></div>
                        <div className="titulo-novo-aluno">{ idAlterando == 0 ? "Novo Produto" : `Alterando Produto ${idAlterando}`}</div>
                    </div>
                    <div className="linha1-registro">
                        <div className="linha-box">
                            <div className="box-nome1">Nome:</div>
                            <input type="text" className="box-resp" value={nome} onChange={e => setNome(e.target.value)} />
                        </div>
                        <div className="linha-box">
                            <div className="box-nome3">Preço DE:</div>
                            <input type="text" className="box-resp" value={precod} onChange={ e => setPrecod(e.target.value)} />
                        </div>
                    </div>
                    <div className="linha1-registro">
                        <div className="linha-box">
                            <div className="box-nome">Categoria:</div>
                            <input type="text" className="box-resp" value={categoria} onChange={ e => setCategoria(e.target.value)} />
                        </div>
                        <div className="linha-box">
                            <div className="box-nome5">Preço POR:</div>
                            <input type="text" className="box-resp" value={precop} onChange={ e => setPrecop(e.target.value)} />
                        </div>
                    </div>
                    <div className="linha1-registro">
                        <div className="linha-box">
                            <div className="box-nome">Avaliação:</div>
                            <input type="text" className="box-resp" value={avaliacao} onChange={ e => setAvaliacao(e.target.value)} />
                        </div>
                        <div className="linha-box">
                            <div className="box-nome6">Estoque:</div>
                            <input type="text" className="box-resp" value={estoque} onChange={ e => setEstoque(e.target.value)} />
                        </div>
                    </div>
                    <div className="linha1-registro">
                        <div className="linha-box">
                            <div className="box-nome4">Link Imagem:</div>
                            <input type="text" className="box-resp1" value={imagem} onChange={ e => setImagem(e.target.value)} />
                        </div>
                    </div>
                    <div className="linha1-registro">
                        <div className="linha-box">
                            <div className="box-nome7">Descrição:</div>
                            <textarea name="" id="" cols="30" rows="10" value={descricao} onChange={ e => setDescricao(e.target.value)}></textarea>
                        </div>
                        <div className="botaotototo"> <button className="cadastrar-novo-aluno" onClick={adicionarProduto} > {idAlterando == 0 ? "Cadastrar" : "Alterar" } </button> </div>
                    </div>
                </div>
                <div className="alunos-existentes-matriculados">
                    <div className="registros-alunos">
                        <div className="linha-nome"></div>
                        <div className="titulo-novo-aluno"> Produtos Cadastrados </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th> ID </th>
                                <th> Produto </th>
                                <th> Categoria </th>
                                <th> Preço </th>
                                <th> Estoque </th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {produtos.map((item, i) =>
                                <tr className={i % 2 ? "outra-cor" : ""} >
                                    <td> <img src={item.img_produto} alt="" width="50px" height="50px" /> </td>
                                    <td> {item.id_produto} </td>
                                    <td title={item.nm_produto}> 
                                            {item.nm_produto != null && item.nm_produto.length >= 15 
                                                        ? item.nm_produto.substr(0, 15) + '...'
                                                        : item.nm_produto } 
                                    </td>
                                    <td title={item.ds_categoria}>
                                            {item.ds_categoria != null && item.ds_categoria.length >= 15 
                                                        ? item.ds_categoria.substr(0, 15) + '...'
                                                        : item.ds_categoria } 
                                    </td>
                                    <td> {item.vl_preco_por} </td>
                                    <td> {item.qtd_estoque} </td>
                                    <td></td>
                                    <td><button class="bot" onClick={ () => editar(item) }><img src="/assets/images/edit (1).svg" alt = "" /></button></td>
                                    <td><button class="bot" onClick= { () => removerProduto(item.id_produto) }> <img src="/assets/images/trash-2 (1).svg" alt= "" /></button></td>
                             </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </PT2>
    )
}
