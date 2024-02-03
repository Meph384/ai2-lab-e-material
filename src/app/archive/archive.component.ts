import { Component } from '@angular/core';
import { Task } from '../task';
import {TasksService} from "../tasks.service";
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent {
  tasks: Task[] = [];

  constructor(
    private tasksService: TasksService
  ) {
  }

  ngOnInit(): void {
    this.tasksService.index(true).subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  delete(task: Task): void {
    if (!confirm("Are you sure?")) {
      return;
    }

    this.tasksService.delete(task).subscribe(() => {
      this.ngOnInit();
    })
  }
}
