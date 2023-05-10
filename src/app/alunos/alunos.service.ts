import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable()
export class AlunosService {
  private alunos: Aluno[] = [
    { id: 1, nome: 'Alunos 01', email: 'alunos1@email.com' },
    { id: 2, nome: 'Alunos 02', email: 'alunos2@email.com' },
    { id: 3, nome: 'Alunos 03', email: 'alunos3@email.com' },
  ];

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    let alunos = this.getAlunos();
    for (let i = 0; i < alunos.length; i++) {
      let aluno = alunos[i];
      if (aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }

  constructor() {}
}
