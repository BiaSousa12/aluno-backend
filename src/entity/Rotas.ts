import { Router, request, response, Request, Response } from 'express'

import { verAlunos } from './controller/ProjetoAlunoController';
import { insereAluno } from './controller/ProjetoAlunoController';
import { consultAluno } from './controller/ProjetoAlunoController';
import { atualizaAluno } from './controller/ProjetoAlunoController';
import { apagaAluno } from './controller/ProjetoAlunoController';
import { trancaMatricula } from './controller/ProjetoAlunoController';

//chamando rotas
const rotas = Router()

//Ver alunos
rotas.get('/alunos', verAlunos)

//Adc novos alunos
rotas.post('/insereAluno', insereAluno)

//Consultar um único aluno
rotas.get('/aluno/:codProjetoAlunoController',consultAluno)

//Atualizar o cadastro do aluno
rotas.put('/aluno/:codProjetoAlunoController', atualizaAluno)

//Excluir aluno da tabela
rotas.delete('/aluno/:codProjetoAlunoController', apagaAluno)

//Trancar a matricula do aluno
rotas.patch('/aluno/:codProjetoAlunoController', trancaMatricula)

export default rotas