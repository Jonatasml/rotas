import { Component } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss'],
})
export class AlunoDetalheComponent {
  id!: number;
  inscricao!: Subscription;
  aluno!: Aluno;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.inscricao = this.route.params.subscribe((params: any) => {
    //   this.id = params['id'];
    //   this.aluno = this.alunosService.getAluno(this.id);
    //   if (this.aluno == null) {
    //     this.aluno = {};
    //   }
    // });
    console.log('ngOnInit: AlunoDetalheComponent');
    this.inscricao = this.route.data.subscribe();
    (info: { aluno: Aluno }) => {
      console.log('Recebendo o obj Aluno do resolver');
      this.aluno = info.aluno;
    };
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
