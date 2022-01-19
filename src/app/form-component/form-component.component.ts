import { Component, OnInit } from '@angular/core';
import { HomeProjectService } from '../home-project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit
{

  arrayDatesFromTable: any = [];
  messageUpdateandDelete: string = "";
  intervalInterpolation = setTimeout(() => { }, 0);
  positionFromArray: number = 0;

  constructor(private formComponentService: HomeProjectService, private formComponentRouter: Router) { }

  ngOnInit(): void
  {
    this.arrayDatesFromTable = this.formComponentService.dateFromRegisterForm;
  }

  fnButtonBack()
  {
    this.formComponentRouter.navigateByUrl("/logInFormComponent");
  }

  fnButtonLogOut()
  {
    this.formComponentService.dateFromRegisterForm = [];
    this.formComponentRouter.navigateByUrl("/mainComponent");
  }

  fnStudies(param1: boolean, param2: boolean, param3: boolean)
  {
    let returnStudiesValue: string = "";

    if (param1 == true)
    {
      returnStudiesValue = "High School ";
    }

    if (param2 == true)
    {
      returnStudiesValue = returnStudiesValue + "College ";
    }

    if (param3 == true)
    {
      returnStudiesValue = returnStudiesValue + "Master";
    }

    return returnStudiesValue;
  }

  fnDeleteRow(param1: number)
  {
    let divInterpolation_ = <HTMLDivElement>document.getElementById("idDivInterpolationMessage");
    let spanMessage_ = <HTMLSpanElement>document.getElementById("idSpanMessage");

    this.arrayDatesFromTable.splice(param1, 1);

    this.intervalInterpolation = setTimeout(() =>
    {
      divInterpolation_.style.visibility = "visible";
      divInterpolation_.style.border = "1px dotted red";
      spanMessage_.style.color = "red";
      this.messageUpdateandDelete = "Deleted succesfully!";
    }, 500);
  }

  fnMainDivMouseMove()
  {
    let divInterpolation_ = <HTMLDivElement>document.getElementById("idDivInterpolationMessage");
    this.messageUpdateandDelete = "";
    divInterpolation_.style.visibility = "hidden";

  }

  fnDblClickInputFirstName(param1: number)
  {
    const inputFirstName = <HTMLInputElement>document.getElementById("idFirstName_" + param1);

    inputFirstName.readOnly = false;
  }

  fnDblClickInputLastName(param1: number)
  {
    const inputLastName = <HTMLInputElement>document.getElementById("idLastName_" + param1);

    inputLastName.readOnly = false;
  }

  fnDblClickInputPIN(param1: number)
  {
    const inputPIN = <HTMLInputElement>document.getElementById("idPin_" + param1);

    inputPIN.readOnly = false;
  }

  fnDblClickInputDateOfBirth(param1: number)
  {
    const inputDateofBirth = <HTMLInputElement>document.getElementById("idDateOfBirth_" + param1);

    inputDateofBirth.readOnly = false;
  }

  fnDblClickInputEmail(param1: number)
  {
    const inputEmail = <HTMLInputElement>document.getElementById("idEmail_" + param1);

    inputEmail.readOnly = false;
  }

  fnDblClickInputUsername(param1: number)
  {
    const inputUsername = <HTMLInputElement>document.getElementById("idUsername_" + param1);

    inputUsername.readOnly = false;
  }

  fnDblClickInputPassword(param1: number)
  {
    const inputPassword = <HTMLInputElement>document.getElementById("idPassword_" + param1);

    inputPassword.readOnly = false;
    inputPassword.type = "text";
  }

  fnUpdateTable(param1: number)
  {
    const inputFirstName = <HTMLInputElement>document.getElementById("idFirstName_" + param1);
    const inputLastName = <HTMLInputElement>document.getElementById("idLastName_" + param1);
    const inputPIN = <HTMLInputElement>document.getElementById("idPin_" + param1);
    const inputDateofBirth = <HTMLInputElement>document.getElementById("idDateOfBirth_" + param1);
    const inputEmail = <HTMLInputElement>document.getElementById("idEmail_" + param1);
    const inputUsername = <HTMLInputElement>document.getElementById("idUsername_" + param1);
    const inputPassword = <HTMLInputElement>document.getElementById("idPassword_" + param1);
    const divInterpolation_ = <HTMLDivElement>document.getElementById("idDivInterpolationMessage");
    const spanMessage_ = <HTMLSpanElement>document.getElementById("idSpanMessage");
    const highSchool_ = <HTMLInputElement>document.getElementById("idHighSchool");
    const college_ = <HTMLInputElement>document.getElementById("idCollege");
    const master_ = <HTMLInputElement>document.getElementById("idMaster");
    const radioMale_ = <HTMLInputElement>document.getElementById("idMale");
    const radioFemale_ = <HTMLInputElement>document.getElementById("idFemale");

    let newObject = {
      person: "",
      firstName: "",
      lastName: "",
      PIN: "",
      dateOfBirth: "",
      highSchool: false,
      college: false,
      master: false,
      sex:"",
      email: "",
      username: "",
      password: "",
      passwordConfirm: ""
    }

    newObject.firstName = inputFirstName.value;
    newObject.lastName = inputLastName.value;
    newObject.PIN = inputPIN.value;
    newObject.dateOfBirth = inputDateofBirth.value;
    newObject.email = inputEmail.value;
    newObject.username = inputUsername.value;
    newObject.password = inputPassword.value;
    newObject.highSchool = highSchool_.checked;
    newObject.college = college_.checked;
    newObject.master = master_.checked;

    if (radioMale_.checked == true)
    {
      newObject.sex = "male";
    }

    if (radioFemale_.checked == true)
    {
      newObject.sex = "female";
    }





    this.arrayDatesFromTable.splice(param1, 1, newObject);


    this.intervalInterpolation = setTimeout(() =>
    {
      divInterpolation_.style.visibility = "visible";
      divInterpolation_.style.border = "1px dotted green";
      spanMessage_.style.color = "green";
      this.messageUpdateandDelete = "Updated succesfully!";
    }, 500);
  }

  fnMouseLeaveFirstName(param1: number)
  {
    const inputFirstName = <HTMLInputElement>document.getElementById("idFirstName_" + param1);

    inputFirstName.readOnly = true;
  }

  fnMouseLeaveLastName(param1: number)
  {
    const inputLastName = <HTMLInputElement>document.getElementById("idLastName_" + param1);

    inputLastName.readOnly = true;
  }

  fnMouseLeavePIN(param1: number)
  {
    const inputPIN = <HTMLInputElement>document.getElementById("idPin_" + param1);

    inputPIN.readOnly = true;
  }

  fnMouseLeaveDateOfBirth(param1: number)
  {
    const inputDateofBirth = <HTMLInputElement>document.getElementById("idDateOfBirth_" + param1);

    inputDateofBirth.readOnly = true;
  }

  fnMouseLeaveEmail(param1: number)
  {
    const inputEmail = <HTMLInputElement>document.getElementById("idEmail_" + param1);

    inputEmail.readOnly = true;
  }

  fnMouseLeaveUsername(param1: number)
  {
    const inputUsername = <HTMLInputElement>document.getElementById("idUsername_" + param1);

    inputUsername.readOnly = true;
  }

  fnMouseLeavePassword(param1: number)
  {
    const inputPassword = <HTMLInputElement>document.getElementById("idPassword_" + param1);

    inputPassword.readOnly = true;
    inputPassword.type = "password";
  }

  fnSexTable(param1: number)
  {
    let modal = <HTMLDivElement>document.getElementById("myModalSex");
    let radioMale_ = <HTMLInputElement>document.getElementById("idMale");
    let radioFemale_ = <HTMLInputElement>document.getElementById("idFemale");

    if (this.arrayDatesFromTable[param1].sex == "male")
    {
      radioMale_.checked = true;
    }

    if (this.arrayDatesFromTable[param1].sex == "female")
    {
      radioFemale_.checked = true;
    }

    modal.style.display = "block";

    this.formComponentService.kFromArray = param1;
  }

  fnUpdateModalSex()
  {
    let modal = <HTMLDivElement>document.getElementById("myModalSex");
    let radioMale_ = <HTMLInputElement>document.getElementById("idMale");
    let radioFemale_ = <HTMLInputElement>document.getElementById("idFemale");

    if (radioMale_.checked == true)
    {
      this.arrayDatesFromTable[this.formComponentService.kFromArray].sex = "male";
    }

    if (radioFemale_.checked == true)
    {
      this.arrayDatesFromTable[this.formComponentService.kFromArray].sex = "female";
    }

    modal.style.display = "none";
  }

  fnCloseSexModal()
  {
    let modal = <HTMLDivElement>document.getElementById("myModalSex");

    modal.style.display = "none";
  }

  fnStudiesTable(param1: number)
  {debugger
    let modal = <HTMLDivElement>document.getElementById("myModalStudies");
    let highSchool_ = <HTMLInputElement>document.getElementById("idHighSchool");
    let college_ = <HTMLInputElement>document.getElementById("idCollege");
    let master_ = <HTMLInputElement>document.getElementById("idMaster");

    highSchool_.checked = this.arrayDatesFromTable[param1].highSchool;
    college_.checked = this.arrayDatesFromTable[param1].college;
    master_.checked = this.arrayDatesFromTable[param1].master;

    modal.style.display = "block";

    this.formComponentService.kFromArray = param1;
  }

  fnCloseModalStudies()
  {
    let modal = <HTMLDivElement>document.getElementById("myModalStudies");

    modal.style.display = "none";
  }

  fnClickMaster()
  {
    let highSchool_ = <HTMLInputElement>document.getElementById("idHighSchool");
    let college_ = <HTMLInputElement>document.getElementById("idCollege");
    let master_ = <HTMLInputElement>document.getElementById("idMaster");

    if (master_.checked == true)
    {
      highSchool_.checked = true;
      college_.checked = true;
    }
  }

  fnClickCollege()
  {
    let highSchool_ = <HTMLInputElement>document.getElementById("idHighSchool");
    let college_ = <HTMLInputElement>document.getElementById("idCollege");

    if (college_.checked == true)
    {
      highSchool_.checked = true;
    }
  }

  fnUpdateModalStudies()
  {
    let modal = <HTMLDivElement>document.getElementById("myModalStudies");
    let highSchool_ = <HTMLInputElement>document.getElementById("idHighSchool");
    let college_ = <HTMLInputElement>document.getElementById("idCollege");
    let master_ = <HTMLInputElement>document.getElementById("idMaster");

    modal.style.display = "none";

    if (highSchool_.checked == true)
    {
      this.arrayDatesFromTable[this.formComponentService.kFromArray].highSchool = true;
    }
    else
    {
      this.arrayDatesFromTable[this.formComponentService.kFromArray].highSchool = false;
    }

    if (college_.checked == true)
    {
      this.arrayDatesFromTable[this.formComponentService.kFromArray].college = true;
    }
    else
    {
      this.arrayDatesFromTable[this.formComponentService.kFromArray].college = false;
    }

    if (master_.checked == true)
    {
      this.arrayDatesFromTable[this.formComponentService.kFromArray].master = true;
    }
    else
    {
      this.arrayDatesFromTable[this.formComponentService.kFromArray].master = false;
    }
  }
}
