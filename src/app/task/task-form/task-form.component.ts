import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  public taskFormGroup: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    start: new FormControl('', [Validators.required]),
    finaly: new FormControl('', [Validators.required]),
    hashT: new FormControl('', [Validators.required]),
    priority:new FormControl('', [Validators.required]),
    nivel: new FormControl('', [Validators.required]),
  });

  public onSubmit(){
    const task: Task = this.taskFormGroup.value;
    
    task.startDate = new Date();
    task.complexLevel = 1;
    task.hashtags = ['#prueba'];
    task.priority = 'Alta';
    task.status = 'En Progreso';
  
    this.taskService.addTask(task, this.authService.user.username)
    .subscribe((next)=>{
      alert('Tarea agregada exitosamente');
    }, (error)=>{
      alert('Tarea no fue agregada!');
    });
    
  }
  constructor(private taskService: TaskService,
    private authService: AuthService) { }
  ngOnInit(): void {
  }

}
