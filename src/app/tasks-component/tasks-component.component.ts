import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-component',
  templateUrl: './tasks-component.component.html',
  styleUrls: ['./tasks-component.component.css']
})
export class TasksComponentComponent implements OnInit
{

  taskDates = new FormGroup({
    taskName: new FormControl(),
    taskDescription: new FormControl(),
    taskDate: new FormControl(),
    taskTime: new FormControl(),
    taskDeadline: new FormControl(),
    taskPerson: new FormControl(),
    taskImportance: new FormControl(),
    taskHours: new FormControl(),
    taskComments: new FormArray([])
  });
  arrayNotPlanned: any = [];
  arrayToBeDone: any = [];
  arrayInProgress: any = [];
  arrayDone: any = [];
  valNotPlanned: string = "";
  valToBeDone: string = "";
  valInProgress: string = "";
  valDone: string = "";
  valNameTask: string = "";
  arrayPersons: string[] = [];
  valInputNewPerson: string = "";
  valColor1: string = "";
  valInputFontSize: string = "";
  valColor2: string = "";
  valInputFontSize1: string = "";
  valColor3: string = "";
  valInputFontSize2: string = "";
  valColor4: string = "";
  valInputFontSize3: string = "";
  dateFontFamily: any;
  arrayFontFamily:any = [];
  valSelectNotPlanned: string = "";
  valSelectToBeDone: string = "";
  valSelectInProgress: string = "";
  valSelectDone: string = "";
  valInputTaskName: string = "";
  valTaskDescription: string = "";
  valInputDeadline: string = "";
  valInputImportance: string = "";
  valInputHours: string = "";
  valInputResponsiblePerson: string = "";
  valK: number = 0;
  valTextareaComments: string = "";
  arrayComments: any = [];

  constructor(private taskRouter: Router) { }

  ngOnInit(): void
  {
    this.fnFontFamily();

    let today = new Date().toISOString().slice(0, 10);
    let currentTime = new Date().toISOString().substring(11, 16);
    const selectPersonValue_ = <HTMLSelectElement>document.getElementById("idResponsiblePerson");

    this.taskDates.controls.taskName.setValue("");
    this.taskDates.controls.taskDescription.setValue("");
    this.taskDates.controls.taskDate.setValue(today);
    this.taskDates.controls.taskTime.setValue(currentTime);
    this.taskDates.controls.taskDeadline.setValue(today);
    selectPersonValue_.value = "Choose person";
    this.taskDates.controls.taskImportance.setValue("2");
    this.taskDates.controls.taskHours.setValue("1");
  }

  async fnFontFamily()
  {
    let datesFontFamily:string = "assets/jsonFontFamily.json";
    let responseDatesFontFamily:any = await fetch(datesFontFamily);
    let jsonDatesFontFamily:any = await responseDatesFontFamily.json();

    this.dateFontFamily = jsonDatesFontFamily;

    this.arrayFontFamily = this.dateFontFamily.font_family;

  }
  fnAddTask()
  {
    const div1_ = <HTMLDivElement>document.getElementById("mySidenav");
    const taskName_ = <HTMLInputElement>document.getElementById("idNameTask");
    const paragraphAlert_ = <HTMLParagraphElement>document.getElementById("idPAlert");
    const taskDeadline_ = <HTMLInputElement>document.getElementById("idDeadline");

    let currentTime = new Date().toISOString().substring(11, 16);
    const selectPersonValue_ = <HTMLSelectElement>document.getElementById("idResponsiblePerson");

    if (this.taskDates.value.taskImportance == "1")
    {
      this.taskDates.value.taskImportance = "High";
    }

    if (this.taskDates.value.taskImportance == "2")
    {
      this.taskDates.value.taskImportance = "Middle";
    }

    if (this.taskDates.value.taskImportance == "3")
    {
      this.taskDates.value.taskImportance = "Lower";
    }

    this.taskDates.value.taskPerson = selectPersonValue_.value;

    if ((this.taskDates.value.taskName == "") || (this.taskDates.value.taskPerson == "") 
    || (this.taskDates.value.taskDeadline.length > 10))
    {
      taskName_.focus();
      this.valNameTask = "The task name/responsible person is not specified or date is not valid!";

      if (this.taskDates.value.taskName != "")
      {
        selectPersonValue_.focus();
      }

      if (this.taskDates.value.taskPerson != "")
      {
        taskName_.focus();
      }

      if((this.taskDates.value.taskName != "")&&(this.taskDates.value.taskPerson != ""))
      {
        taskDeadline_.focus();
      }

      paragraphAlert_.style.display = "block";
      paragraphAlert_.className = "";
      paragraphAlert_.style.backgroundColor = "rgb(207, 135, 135)";
      return;
    }
    else
    {
      this.arrayNotPlanned.push(this.taskDates.value);
      paragraphAlert_.style.display = "none";
      this.taskDates.reset();
      this.taskDates.controls.taskTime.setValue(currentTime);
      this.taskDates.controls.taskName.setValue("");
    }
    
    div1_.style.width = "0%";
    div1_.style.border = "none";

    this.valNotPlanned = "(" + this.arrayNotPlanned.length.toString() + ")";
  }

  openNav()
  {
    const div_ = <HTMLDivElement>document.getElementById("mySidenav");
    const taskName_ = <HTMLInputElement>document.getElementById("idNameTask");
    let date = new Date();
    let time = "";
    let minutes = date.getMinutes();
    let hour = date.getHours();
    let today = new Date().toISOString().slice(0, 10);
   
    time = hour + ":" + minutes;

    taskName_.focus();
    
    if( window.innerWidth >= 767 ) 
    {
      div_.style.width = "50%";
    }
    else
    {
      div_.style.width = "100%";
    }
    
    this.taskDates.controls.taskImportance.setValue("2");
    this.taskDates.controls.taskHours.setValue("1");
    this.taskDates.controls.taskTime.setValue(time);
    this.taskDates.controls.taskDate.setValue(today);
    this.taskDates.controls.taskDeadline.setValue(today);
  }

  closeNav()
  {
    const div1_ = <HTMLDivElement>document.getElementById("mySidenav");
    const paragraphAlert_ = <HTMLParagraphElement>document.getElementById("idPAlert");
    
    let today = new Date().toISOString().slice(0, 10);
    let date = new Date();
    let time = "";
    let minutes = date.getMinutes();
    let hour = date.getHours();

    time = hour + ":" + minutes;

    div1_.style.width = "0%";
    div1_.style.border = "none";
    paragraphAlert_.style.display = "none";
    this.taskDates.controls.taskDeadline.setValue(today);
    this.taskDates.controls.taskTime.setValue(time);
    this.taskDates.controls.taskDate.setValue(today);
  }

  fnNotPlanned(event: CdkDragDrop<any>)
  {
    this.fnMoveTasks(event);

    this.valNotPlanned = "(" + this.arrayNotPlanned.length.toString() + ")";
  }

  fnToBeDone(event: CdkDragDrop<any>)
  {
    this.fnMoveTasks(event);

    this.valToBeDone = "(" + this.arrayToBeDone.length.toString() + ")";
  }

  fnInProgress(event: CdkDragDrop<any>)
  {
    this.fnMoveTasks(event);

    this.valInProgress = "(" + this.arrayInProgress.length.toString() + ")";
  }

  fnDone(event: CdkDragDrop<any>)
  {
    this.fnMoveTasks(event);

    this.valDone = "(" + this.arrayDone.length.toString() + ")";
  }

  fnMoveTasks(event: CdkDragDrop<any>)
  {
    if (event.previousContainer === event.container)
    {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else
    {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex);
    }


    this.valNotPlanned = "(" + this.arrayNotPlanned.length.toString() + ")";
    this.valToBeDone = "(" + this.arrayToBeDone.length.toString() + ")";
    this.valInProgress = "(" + this.arrayInProgress.length.toString() + ")";
    this.valDone = "(" + this.arrayDone.length.toString() + ")";
  }

  fnAddPerson()
  {
    const modal = <HTMLDivElement>document.getElementById("myModal");

    modal.style.display = "block";
  }

  fnCloseModal()
  {
    const modal = <HTMLDivElement>document.getElementById("myModal");
    modal.style.display = "none";
  }

  fnAddNewPerson()
  {
    const idNewPerson_ = <HTMLInputElement>document.getElementById("idNewPerson");

    if (this.valInputNewPerson == "")
    {
      idNewPerson_.focus();
      return;
    }
    else
    {
      this.arrayPersons.push(this.valInputNewPerson);
    }

    this.valInputNewPerson = "";
  }

  fnDeletePerson(param1: number)
  {
    this.arrayPersons.splice(param1, 1);
  }

  fnChangeStyle()
  {
    const modal = <HTMLDivElement>document.getElementById("myModal1");

    modal.style.display = "block";
  }

  fnCloseModalStyle()
  {
    const modal = <HTMLDivElement>document.getElementById("myModal1");

    modal.style.display = "none";
  }

  fnB()
  {
    const notPlannedP_ = <HTMLParagraphElement>document.getElementById("idNotPlanned");

    if (notPlannedP_.style.fontWeight == "700")
    {
      notPlannedP_.style.fontWeight = "100";
    }
    else
    {
      notPlannedP_.style.fontWeight = "700";
    }
  }

  fnU()
  {
    const notPlannedP_ = <HTMLParagraphElement>document.getElementById("idNotPlanned");

    if (notPlannedP_.style.textDecoration == "underline")
    {
      notPlannedP_.style.textDecoration = "none";
    }
    else
    {
      notPlannedP_.style.textDecoration = "underline";
    }
  }

  fnI()
  {
    const notPlannedP_ = <HTMLParagraphElement>document.getElementById("idNotPlanned");

    if (notPlannedP_.style.fontStyle == "italic")
    {
      notPlannedP_.style.fontStyle = "normal";
    }
    else
    {
      notPlannedP_.style.fontStyle = "italic";
    }
  }

  fnColorNotPlanned()
  {
    const notPlannedP_ = <HTMLParagraphElement>document.getElementById("idNotPlanned");
    let r:number = parseInt(this.valColor1.slice(1,2),16);
    var g:number = parseInt(this.valColor1.slice(3,2),16);
    var b:number = parseInt(this.valColor1.slice(4,2),16);

    notPlannedP_.style.backgroundColor = this.valColor1;

    if((r>180)||(g>180)||(b>180))
    {
      notPlannedP_.style.color = "black";
    }
    else
    {
      notPlannedP_.style.color = "white";
    }
  }

  fnChangeFontNotPlanned()
  {
    const notPlannedP_ = <HTMLParagraphElement>document.getElementById("idNotPlanned");

    notPlannedP_.style.fontFamily = this.valSelectNotPlanned;
  }

  fnFontSizeNotPlanned()
  {
    const notPlannedP_ = <HTMLParagraphElement>document.getElementById("idNotPlanned");

    notPlannedP_.style.fontSize = this.valInputFontSize + "px";
  }

  fnChangeStyle1()
  {
    const modal = <HTMLDivElement>document.getElementById("myModal2");

    modal.style.display = "block";
  }

  fnCloseModalStyle1()
  {
    const modal = <HTMLDivElement>document.getElementById("myModal2");

    modal.style.display = "none";
  }

  fnFontSizeToBeDone()
  {
    const toBeDone_ = <HTMLParagraphElement>document.getElementById("idToBeDone");

    toBeDone_.style.fontSize = this.valInputFontSize1 + "px";
  }

  fnColorToBeDone()
  {
    const toBeDone_ = <HTMLParagraphElement>document.getElementById("idToBeDone");
    let r:number = parseInt(this.valColor2.slice(1,2),16);
    var g:number = parseInt(this.valColor2.slice(3,2),16);
    var b:number = parseInt(this.valColor2.slice(4,2),16);

    toBeDone_.style.backgroundColor = this.valColor2;

    if((r>180)||(g>180)||(b>180))
    {
      toBeDone_.style.color = "black";
    }
    else
    {
      toBeDone_.style.color = "white";
    }
  }

  fnChangeFontFamilyToBeDone()
  {
    const toBeDone_ = <HTMLParagraphElement>document.getElementById("idToBeDone");

    toBeDone_.style.fontFamily = this.valSelectToBeDone;
  }

  fnB1()
  {
    const toBeDone_ = <HTMLParagraphElement>document.getElementById("idToBeDone");

    if (toBeDone_.style.fontWeight == "700")
    {
      toBeDone_.style.fontWeight = "100";
    }
    else
    {
      toBeDone_.style.fontWeight = "700";
    }

  }

  fnU1()
  {
    const toBeDone_ = <HTMLParagraphElement>document.getElementById("idToBeDone");

    if (toBeDone_.style.textDecoration == "underline")
    {
      toBeDone_.style.textDecoration = "none";
    }
    else
    {
      toBeDone_.style.textDecoration = "underline";
    }
  }

  fnI1()
  {
    const toBeDone_ = <HTMLParagraphElement>document.getElementById("idToBeDone");

    if (toBeDone_.style.fontStyle == "italic")
    {
      toBeDone_.style.fontStyle = "normal";
    }
    else
    {
      toBeDone_.style.fontStyle = "italic";
    }
  }

  fnChangeStyle2()
  {
    const modal = <HTMLDivElement>document.getElementById("myModal3");

    modal.style.display = "block";
  }

  fnCloseModalStyle2()
  {
    const modal = <HTMLDivElement>document.getElementById("myModal3");

    modal.style.display = "none";

  }

  fnColorInProgress()
  {
    const inProgress_ = <HTMLParagraphElement>document.getElementById("idInProgress");
    let r:number = parseInt(this.valColor3.slice(1,2),16);
    var g:number = parseInt(this.valColor3.slice(3,2),16);
    var b:number = parseInt(this.valColor3.slice(4,2),16);

    inProgress_.style.backgroundColor = this.valColor3;

    if((r>180)||(g>180)||(b>180))
    {
      inProgress_.style.color = "black";
    }
    else
    {
      inProgress_.style.color = "white";
    }
  }

  fnFontSizeInProgress()
  {
    const inProgress_ = <HTMLParagraphElement>document.getElementById("idInProgress");

    inProgress_.style.fontSize = this.valInputFontSize2 + "px";
  }

  fnChangeInProgress()
  {
    const inProgress_ = <HTMLParagraphElement>document.getElementById("idInProgress");

    inProgress_.style.fontFamily = this.valSelectInProgress;
  }

  fnB2()
  {
    const inProgress_ = <HTMLParagraphElement>document.getElementById("idInProgress");

    if (inProgress_.style.fontWeight == "700")
    {
      inProgress_.style.fontWeight = "100";
    }
    else
    {
      inProgress_.style.fontWeight = "700";
    }

  }

  fnU2()
  {
    const inProgress_ = <HTMLParagraphElement>document.getElementById("idInProgress");

    if (inProgress_.style.textDecoration == "underline")
    {
      inProgress_.style.textDecoration = "none";
    }
    else
    {
      inProgress_.style.textDecoration = "underline";
    }
  }

  fnI2()
  {
    const inProgress_ = <HTMLParagraphElement>document.getElementById("idInProgress");

    if (inProgress_.style.fontStyle == "italic")
    {
      inProgress_.style.fontStyle = "normal";
    }
    else
    {
      inProgress_.style.fontStyle = "italic";
    }
  }

  fnChangeStyle3()
  {
    const modal = <HTMLDivElement>document.getElementById("myModal4");

    modal.style.display = "block";
  }

  fnCloseModalStyle3()
  {
    const modal = <HTMLDivElement>document.getElementById("myModal4");

    modal.style.display = "none";
  }

  fnFontSizeDone()
  {
    const done_ = <HTMLParagraphElement>document.getElementById("idDone");

    done_.style.fontSize = this.valInputFontSize3 + "px";
  }

  fnColorDone()
  {
    const done_ = <HTMLParagraphElement>document.getElementById("idDone");
    let r:number = parseInt(this.valColor4.slice(1,2),16);
    var g:number = parseInt(this.valColor4.slice(3,2),16);
    var b:number = parseInt(this.valColor4.slice(4,2),16);

    done_.style.backgroundColor = this.valColor4;

    if((r>180)||(g>180)||(b>180))
    {
      done_.style.color = "black";
    }
    else
    {
      done_.style.color = "white";
    }
  }

  fnChangeFontFamilyDone()
  {
    const done_ = <HTMLParagraphElement>document.getElementById("idDone");

    done_.style.fontFamily = this.valSelectDone;
  }

  fnB3()
  {
    const done_ = <HTMLParagraphElement>document.getElementById("idDone");

    if (done_.style.fontWeight == "700")
    {
      done_.style.fontWeight = "100";
    }
    else
    {
      done_.style.fontWeight = "700";
    }
  }

  fnU3()
  {
    const done_ = <HTMLParagraphElement>document.getElementById("idDone");

    if (done_.style.textDecoration == "underline")
    {
      done_.style.textDecoration = "none";
    }
    else
    {
      done_.style.textDecoration = "underline";
    }
  }

  fnI3()
  {
    const done_ = <HTMLParagraphElement>document.getElementById("idDone");

    if (done_.style.fontStyle == "italic")
    {
      done_.style.fontStyle = "normal";
    }
    else
    {
      done_.style.fontStyle = "italic";
    }
  }

  fnInfo()
  {
    const modalInfo_ = <HTMLDivElement>document.getElementById("modalInfo");

    modalInfo_.style.display = "block";
  }

  fnCloseModalInfo()
  {
    const modalInfo_ = <HTMLDivElement>document.getElementById("modalInfo");

    modalInfo_.style.display = "none";
  }

  fnDblClickNotPlanned(param1: number)
  {
    const modalTask_ = <HTMLDivElement>document.getElementById("modalTask");

    modalTask_.style.display = "block";

    this.valInputTaskName = this.arrayNotPlanned[param1].taskName;
    this.valTaskDescription = this.arrayNotPlanned[param1].taskDescription;
    this.valInputDeadline = this.arrayNotPlanned[param1].taskDeadline;
    this.arrayComments = this.arrayNotPlanned[param1].taskComments;
    this.valInputImportance = this.arrayNotPlanned[param1].taskImportance;
    this.valInputHours = this.arrayNotPlanned[param1].taskHours;
    this.valInputResponsiblePerson = this.arrayNotPlanned[param1].taskPerson;
    this.valK = param1;
    this.valTextareaComments = "";
  }

  fnCloseWindowNotPlanned()
  {
    const modalTask_ = <HTMLDivElement>document.getElementById("modalTask");

    modalTask_.style.display = "none";
  }

  fnUpdateWindowNotPlanned()
  {
    const modalTask_ = <HTMLDivElement>document.getElementById("modalTask");

    modalTask_.style.display = "none";

    this.arrayNotPlanned[this.valK].taskName = this.valInputTaskName;
    this.arrayNotPlanned[this.valK].taskDescription = this.valTaskDescription;
    this.arrayNotPlanned[this.valK].taskDeadline = this.valInputDeadline;
    this.arrayNotPlanned[this.valK].taskImportance = this.valInputImportance;
    this.arrayNotPlanned[this.valK].taskHours = this.valInputHours;
    this.arrayNotPlanned[this.valK].taskPerson = this.valInputResponsiblePerson;

    for (let i = 0; i < this.arrayPersons.length; i++)
    {
      if (this.arrayPersons.includes(this.valInputResponsiblePerson) == true)
      {
        return;
      }
      else
      {
        this.arrayPersons.push(this.valInputResponsiblePerson);
      }
    }
  }

  fnBackToMainPage()
  {
    this.taskRouter.navigateByUrl("/mainComponent");
  }

  fnAddComment()
  {
    let obiectComments = {
      valComment: ""
    }

    let obiectClona = { ...obiectComments }

    obiectClona.valComment = this.valTextareaComments;

    this.arrayNotPlanned[this.valK].taskComments.push(obiectClona);
  }

  fnDeleteNotPlanned(param1: number)
  {
    this.arrayNotPlanned.splice(param1, 1);
  }

  fnDeleteToBeDone(param1: number)
  {
    this.arrayToBeDone.splice(param1, 1);
  }

  fnDeleteInProgress(param1: number)
  {
    this.arrayInProgress.splice(param1, 1);
  }

  fnDeleteDone(param1: number)
  {
    this.arrayDone.splice(param1, 1);
  }

  fnArhivate(param1:number)
  {
    const divUnlock_ = <HTMLDivElement>document.getElementById("idDivUnlock_" + param1);
    const divLock_ = <HTMLDivElement>document.getElementById("idDivLock_" + param1);
    const div_ = <HTMLDivElement>document.getElementById("idDivTask_" + param1);

    divUnlock_.style.display = "none";
    divLock_.style.display = "block";
    div_.style.backgroundColor = "#A8FAF7";
  }
}
