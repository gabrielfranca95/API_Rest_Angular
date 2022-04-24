import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';

class AlunoModel{
  nome: string;
  idade: number;
}


@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) { }

  cadastrarAluno(aluno: AlunoModel): Observable<any> {
    return this.http.post(environment.apiUrl, aluno);
  }

  listarAlunos(): Observable<any>{
    return this.http.get(environment.apiUrl);
  }

  atualizarAluno(id:any, aluno: AlunoModel): Observable<any>{
    return this.http.put(environment.apiUrl.concat(id), aluno);
  }
  removerAluno(id:any){
    return this.http.delete(environment.apiUrl.concat(id));
  }
}
