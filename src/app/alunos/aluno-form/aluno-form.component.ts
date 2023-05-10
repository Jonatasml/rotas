import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs';
import { IFormCanDeactivate } from 'src/app/guards/iform-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss'],
})
export class AlunoFormComponent implements IFormCanDeactivate {
  id!: number;
  inscricao!: Subscription;
  aluno: any = {};
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) {}

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.aluno = this.alunosService.getAluno(this.id);
      if (this.aluno === null) {
        this.aluno = {};
      }
    });
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
  }

  podeMudarRota() {
    if (this.formMudou) {
      confirm('tem certeza que deseja sair');
    }
    return true;
  }
  podeDesativar() {
    return this.podeMudarRota();
  }
}
