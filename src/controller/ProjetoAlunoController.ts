import { getRepository } from "typeorm";
import { ProjetoAluno } from "../entity/ProjetoAluno";
import { Request, Response } from "express";

//Serve para verificar a tabela ProjetoAluno
export const verProjetoAluno = async(request: Request, response: Response) => {
    const ProjetoAluno = await getRepository(ProjetoAluno).find()
    return response.json(ProjetoAluno);
};

//Serve para adc Aluno
export const insereProjetoAluno = async(request: Request, response: Response) => {
    const ProjetoAluno = await getRepository(ProjetoAluno).save(request.body)
    return response.json(ProjetoAluno);
};

//Serve para verificar apenas um Aluno
export const consultProjetoAluno = async(request: Request, response: Response) => {
    const {codProjetoAluno} = request.params
    const consulta = await getRepository(ProjetoAluno).findOne(codProjetoAluno)
    return response.json(consulta);
}; 

// Serve para atualizar o Aluno
export const atualizaAluno = async(request: Request, response: Response) => {
    const {codProjetoAluno} = request.params
    const atualiza = await getRepository(ProjetoAluno).update(codProjetoAluno, request.body)

    //Server para verficiar se à Alno existente no sistema
    if (atualiza.affected == 1){
        const alunoAtualizado = await getRepository(ProjetoAluno).findOne(codProjetoAluno)
        return response.json(alunoAtualizado);
    }
    else
    {
        return response.status(404).json( { mensagem: 'Aluno não encontrado no sistema!' });
    }
};

//Para excluir Alunos
export const apagaAluno = async(request: Request, response: Response) => {
    const {ProjetoAluno} = request.params
    const deleta = await getRepository(ProjetoAluno).delete(ProjetoAluno)

    if (deleta.affected == 1){
        return response.status(200).json( { mensagem: 'Aluno excluído com sucesso!' } );
    }
    else
    {
        return response.status(404).json( { mensagem: 'Aluno não localizado' } );
    }
};

//Para trancar a matrícula
export const trancaMatricula = async(request: Request, response: Response) => {
    const {codProjetoAluno} = request.params
    const trancado = await getRepository(ProjetoAluno).update(codProjetoAluno, {matricula: false,})

    if (trancado.affected == 1){
        const matriculaTrancada = await getRepository(ProjetoAluno).findOne(codProjetoAluno)
        return response.json(matriculaTrancada);
    }
    else
    {
        return response.status(404).json( { mensagem: 'Aluno não localizado!' } )
    }
};