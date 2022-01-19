
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todocomponent',
  templateUrl: './todocomponent.component.html',
  styleUrls: ['./todocomponent.component.css',
    '../appStyle.css']
})
export class TodocomponentComponent implements OnInit
{

  spanInterpolationTask: string = "";
  valInputTask: string = "";
  arrayDateList: Array<any> = [];
  spanInterpolationMessage: string = "";

  constructor() { }

  ngOnInit(): void
  {
  }

  fnAddTask()
  {
    const inputTask_ = <HTMLInputElement>document.getElementById("idInputTask");

    if (this.valInputTask.trim() == "")
    {
      this.spanInterpolationTask = "This field is requiered!";
      this.spanInterpolationMessage = "";
      inputTask_.focus();
      return;
    }
    else
    {
      if (this.arrayDateList.includes(this.valInputTask) == true)
      {
        this.spanInterpolationMessage = "This task was allready introduced!";
        inputTask_.focus();
      }
      else
      {
        this.arrayDateList.unshift(this.valInputTask);
        this.valInputTask = "";
      }
    }
  }

  fnBlurInputTask()
  {
    this.spanInterpolationTask = "";
  }

  fnFocusInputTask()
  {
    this.fnInputTask();
  }

  fnInputTask()
  {
    if (this.valInputTask.trim() == "")
    {
      this.spanInterpolationTask = "This field is requiered!";
      this.spanInterpolationMessage = "";
    }
    else
    {
      this.spanInterpolationTask = "";
    }
  }

  fnDeleteTask(param1: number)
  {
    this.arrayDateList.splice(param1, 1);
  }

  fnMarkTask(param1: number)
  {
    const spanCheck_ = <HTMLInputElement>document.getElementById("idSpanCheck_" + param1.toString());
    const buttonCheck_ = <HTMLButtonElement>document.getElementById("idButtonChecked_" + param1.toString());

    spanCheck_.className = "fa fa-check";
    buttonCheck_.disabled = true;
  }

  fnDeleteList()
  {
    this.arrayDateList = [];
  }

  fnMetUpperCase(param1: string)
  {
    let stringUpperCase: string = "";

    stringUpperCase = param1.slice(0, 1).toUpperCase() + param1.slice(1, param1.length).toLowerCase();

    return stringUpperCase;
  }

  fnDrop(event: CdkDragDrop<any[]>)
  {
    moveItemInArray(this.arrayDateList, event.previousIndex, event.currentIndex);
  }
}
