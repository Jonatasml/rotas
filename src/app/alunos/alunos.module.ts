import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

@NgModule({
  declarations: [AlunosComponent, AlunoFormComponent, AlunoDetalheComponent],
  imports: [AlunosRoutingModule, CommonModule, FormsModule],
  providers: [AlunosService, AlunosDeactivateGuard, AlunoDetalheResolver],
  bootstrap: [],
})
export class AlunosModule {}