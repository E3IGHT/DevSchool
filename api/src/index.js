import db from './db.js';
import express from 'express'
import cors from 'cors'
  
const app = express(); 
app.use(cors()); 
app.use(express.json());

app.get('/produto', async (req,resp) => {
    try {

        let r = await db.tb_produto.findAll({ order: [[ "id_produto", "desc" ]] });
        resp.send(r);
    } catch (e) {
        resp.send ({ error: e.toString() });
    }
})

app.post ('/produto', async (req, resp) => {
    try {
        let { nome, categoria, precode, precopor, avaliacao, descricao, estoque, imagem } = req.body;

        if(nome == '' || categoria == '' || precode == '' || precopor == '' || avaliacao == ''
               || descricao == '' || estoque == '' || imagem == '' ) {
                   return resp.send( { erro: 'Todos os campos são obrigatórios.'} )
               }

        if(nome == null || categoria == null || precode == null || precopor == null || avaliacao == null
               || descricao == null || estoque == null || imagem == null ) {
                   return resp.send( { erro: 'Todos os campos são obrigatórios.'} )
               }

        if(isNaN(estoque) || isNaN(precode) || isNaN(precopor) || isNaN(avaliacao)) {
                return resp.send( { erro: 'Os campos estoque, preço de, preço por e avaliação precisam ser campos numéricos.'} )
            }
            
        if (estoque < 0 || precode < 0 || precopor < 0 || avaliacao < 0)  {
            return resp.send( { erro: 'Os campos devem possuir valor positivo.' } )
        } 

        let d = await db.tb_produto.findOne( { where: { nm_produto: nome } } );
        
        if( d != null ) {
            return resp.send( { erro: 'Não podem existir produtos com o mesmo nome.'} )
        }

        let t = {
            nm_produto: nome,
            ds_categoria: categoria,
            vl_preco_de: precode,
            vl_preco_por: precopor,
            vl_avaliacao: avaliacao,
            ds_produto: descricao,
            qtd_estoque: estoque,
            img_produto: imagem,
            bt_ativo: true,
            dt_inclusao: new Date()
        }; 

        let r = await db.tb_produto.create(t);
        resp.send(r);

    } catch (e) {
        resp.send ({ erro: e.toString() })
    }
})

app.put('/produto/:id', async (req,resp) => {
    try {
        let a = req.params.id;
        let { nome, categoria, precode, precopor, avaliacao, descricao, estoque, imagem } = req.body;

        if(nome == '' || categoria == '' || precode == '' || precopor == '' || avaliacao == ''
               || descricao == '' || estoque == '' || imagem == '' ) {
                   return resp.send( { erro: 'Todos os campos são obrigatórios.'} )
        }

        if(isNaN(estoque) || isNaN(precode) || isNaN(precopor) || isNaN(avaliacao)) {
            return resp.send( { erro: 'Os campos estoque, preço de, preço por e avaliação precisam ser campos numéricos.'} )
        } 
        
        if (estoque < 0 || precode < 0 || precopor < 0 || avaliacao < 0)  {
            return resp.send( { erro: 'Os campos devem possuir valor positivo.' } )
        } 

        let d = await db.tb_produto.findOne( { where: { nm_produto: nome } } );
        
        if( d != null ) {
            if( d.id_produto == a )
            return resp.send( {erro: 'Não podem existir produtos com o mesmo nome.'} )
        }


        let r = await db.tb_produto.update ( 
            {
                nm_produto: nome,
                ds_categoria: categoria,
                vl_preco_de: precode,
                vl_preco_por: precopor,
                vl_avaliacao: avaliacao,
                ds_produto: descricao,
                qtd_estoque: estoque,
                img_produto: imagem,
                bt_ativo: true,
                dt_inclusao: new Date()
            }, 
            { where: { id_produto: a } })


        resp.sendStatus(200);
    } catch(e) {
        resp.send( { erro: e.toString() } );
    }
})

app.delete('/produto/:id', async (req,resp) => {
    try {
        let r = await db.tb_produto.destroy( { where: { id_produto: req.params.id }} );
        resp.sendStatus(200);
    } catch(e) {
        resp.send({ erro: e.toString() });
    }

})


app.listen(process.env.PORT,
x => console.log(`Server up at port ${process.env.PORT}`))