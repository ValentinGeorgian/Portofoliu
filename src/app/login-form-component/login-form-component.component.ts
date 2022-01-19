import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HomeProjectService } from '../home-project.service';

@Component({
  selector: 'app-login-form-component',
  templateUrl: './login-form-component.component.html',
  styleUrls: ['./login-form-component.component.css',
    '../appStyle.css']
})
export class LoginFormComponentComponent implements OnInit
{

  interpolationEmailorUsername: string = "";
  valEmailorUsername: string = "";
  interpolationPassword: string = "";
  valPassword: string = "";
  jsonLanguages: any = [];
  arrayLanguages: any = [];
  classColor1: string = "";
  classColor2: string = "";
  datesRegisterForm: any = [];

  sablonArray: any = {
    person: "",
    firstName: "",
    lastName: "",
    PIN: "",
    dateOfBirth: "",
    sex: "",
    highSchool: false,
    college: false,
    master: false,
    email: "",
    username: "",
    password: "",
    passwordConfirm: ""
  }

  constructor(private httpClient: HttpClient, private varRouter: Router,
    private servLoginForm: HomeProjectService)
  {

  }

  ngOnInit(): void
  {
    this.httpClient.get("assets/jsonLanguageLogin.json").subscribe(data =>
    {
      this.jsonLanguages = data;

      this.arrayLanguages = this.jsonLanguages.chooseLanguage;

      this.datesRegisterForm = this.servLoginForm.dateFromRegisterForm;

    })
  }

  fnLogin()
  {
    const email_ = <HTMLInputElement>document.getElementById("idEmailorPhone");
    const password_ = <HTMLInputElement>document.getElementById("idPassword");
    let cntAlert: number = 0;
    const message = <HTMLDivElement>document.getElementById("finalMessage");

    if (this.valEmailorUsername.trim() == "")
    {
      this.interpolationEmailorUsername = "This field is required!";
      this.classColor1 = "classColorRed";
      email_.focus();
      return;
    }
    else
    {
      this.interpolationEmailorUsername = "";
      this.classColor1 = "classColorBlack";
    }

    if (this.valPassword.trim() == "")
    {
      this.interpolationPassword = "This field is required!";
      this.classColor2 = "classColorRed";
      password_.focus();
      return;
    }
    else
    {
      this.interpolationPassword = "";
      this.classColor2 = "classColorBlack";
    }

    if (this.datesRegisterForm.length > 0)
    {
      for (let i = 0; i < this.datesRegisterForm.length; i++)
      {
        if (

          ((this.datesRegisterForm[i].username != this.valEmailorUsername) ||
            (this.datesRegisterForm[i].email != this.valEmailorUsername))
          &&
          (this.datesRegisterForm[i].password != this.valPassword))
        {
          cntAlert = cntAlert + 1;
        }
        else
        {
          this.varRouter.navigateByUrl("/formComponent");
        }
      }
    }
    else
    {
      message.style.display = "block";
    }

    if (cntAlert > 0)
    {
      message.style.display = "block";
    }
  }

  fnGoRegister()
  {
    const message = <HTMLDivElement>document.getElementById("finalMessage");

    message.style.display = "none";

    this.varRouter.navigateByUrl("/registerFormComponent");
  }

  fnBlurEmailorUsername()
  {
    this.interpolationEmailorUsername = "";
    this.classColor1 = "classColorBlack";
  }

  fnInputEmailorUsername()
  {
    if (this.valEmailorUsername.trim() == "")
    {
      this.interpolationEmailorUsername = "This field is required!";
      this.classColor1 = "classColorRed";
    }
    else
    {
      this.interpolationEmailorUsername = "";
      this.classColor1 = "classColorBlack";
    }
  }

  fnFocusEmailorUsername()
  {
    this.fnInputEmailorUsername();
  }

  fnBlurPassword()
  {
    this.interpolationPassword = "";
    this.classColor2 = "classColorBlack";
  }

  fnInputPassword()
  {
    if (this.valPassword.trim() == "")
    {
      this.interpolationPassword = "This field is required!";
      this.classColor2 = "classColorRed";
    }
    else
    {
      this.interpolationPassword = "";
      this.classColor2 = "classColorBlack";
    }
  }

  fnFocusPassword()
  {
    this.fnInputPassword();
  }

  fnBack()
  {
    this.servLoginForm.dateFromRegisterForm = [];
    this.varRouter.navigateByUrl("/mainComponent");
  }

}
