import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { HomeProjectService } from '../home-project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form-component',
  templateUrl: './register-form-component.component.html',
  styleUrls: ['./register-form-component.component.css',
    '../appStyle.css'
  ]
})
export class RegisterFormComponentComponent implements OnInit
{
  dateFromAppelationSelect: any = [];
  selectSex: any = [];
  valClassBorderLeftFN: string = "";
  interpolationaFirstName: string = "";
  valClassBorderLeftLN: string = "";
  interpolationaLastName: string = "";
  valDate: string = "";
  valClassBorderLeftE: string = "";
  interpolationEmail: string = "";
  valClassBorderLeftU: string = "";
  interpolationUsername: string = "";
  valClassBorderLeftP: string = "";
  interpolationPassword: string = "";
  valClassBorderLeftPC: string = "";
  interpolationCPassword: string = "";

  registerFormDates = new FormGroup({
    person: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    PIN: new FormControl(),
    dateOfBirth: new FormControl(),
    sex: new FormControl(),
    highSchool: new FormControl(),
    college: new FormControl(),
    master: new FormControl(),
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    passwordConfirm: new FormControl()
  });

  constructor(private httpClient: HttpClient, private servRegisterForm: HomeProjectService, 
    private registerFormRouter: Router) { }

  ngOnInit(): void
  {
    this.httpClient.get("assets/jsonAppelation.json").subscribe(data =>
    {
      this.dateFromAppelationSelect = data;


      this.selectSex = this.dateFromAppelationSelect.appelation;
    })

    let todayDate = new Date().toISOString().slice(0, 10);
    this.valDate = todayDate;

    const inputData = <HTMLInputElement>document.getElementById("idDateOfBirth");
    inputData.disabled = true;
  }

  fnSaveData()
  {
    const firstName_ = <HTMLInputElement>document.getElementById("idFirstName");
    const lastName_ = <HTMLInputElement>document.getElementById("idLastName");
    const email_ = <HTMLInputElement>document.getElementById("idEmail");
    const username_ = <HTMLInputElement>document.getElementById("idUsername");
    const password_ = <HTMLInputElement>document.getElementById("idPassword");
    const passwordC_ = <HTMLInputElement>document.getElementById("idConfirmPassword");

    let charNumber = /[0-9]/;
    let uppercaseLetters = /[A-Z]/;
    let lowecaseLetters = /[a-z]/;
    let space = /\s/;
    let charArond = /\@/;
    let charMark = /\./;
    let charSpace = /\_/;

    let firstName:string  = this.registerFormDates.value.firstName || "";
    let lastName:string  = this.registerFormDates.value.firstName || "";
    let email:string  = this.registerFormDates.value.email || "";
    let username:string  = this.registerFormDates.value.username || "";
    let password:string  = this.registerFormDates.value.password || "";
    let passwordConfirm:string  = this.registerFormDates.value.passwordConfirm || "";

    let numberAlert:number = 0;

    const divMessage_ = <HTMLDivElement>document.getElementById("idMessageUserOrEmail");

    if (firstName == "")
    {
      this.interpolationaFirstName = "This field is requiered!";
      this.valClassBorderLeftFN = "classBorderLeft1";
      firstName_.focus();
      return;
    }
    else
    {
      if (charNumber.test(firstName.trim()) == true)
      {
        this.interpolationaFirstName = "First name can't contain numbers!";
        this.valClassBorderLeftFN = "classBorderLeft1";
      }
      else
      {
        this.interpolationaFirstName = "";
        this.valClassBorderLeftFN = "classBorderLeft";
      }
    }


    if (lastName.trim() == "")
    {
      this.interpolationaLastName = "This field is requiered!";
      this.valClassBorderLeftLN = "classBorderLeft1";
      lastName_.focus();
      return;
    }
    else
    {
      if (charNumber.test(lastName.trim()) == true)
      {
        this.interpolationaLastName = "Last name can't contain numbers!";
        this.valClassBorderLeftLN = "classBorderLeft1";
      }
      else
      {
        this.interpolationaLastName = "";
        this.valClassBorderLeftLN = "classBorderLeft";
      }
    }

    if (email.trim() == "")
    {
      this.interpolationEmail = "This field is requiered!";
      this.valClassBorderLeftE = "classBorderLeft1";
      email_.focus();
      return;
    }
    else
    {
      if ((charArond.test(email.trim()) == false) ||
        (space.test(email.trim()) == true) ||
        (charMark.test(email.trim()) == false))
      {
        this.interpolationEmail = "Email must contain @ and . and must not contain spaces!";
        this.valClassBorderLeftE = "classBorderLeft1";
      }
      else
      {
        this.interpolationEmail = "";
        this.valClassBorderLeftE = "classBorderLeft";
      }
    }

    if (username.trim() == "")
    {
      this.interpolationUsername = "This field is requiered!";
      this.valClassBorderLeftU = "classBorderLeft1";
      username_.focus();
      return;

    }
    else
    {
      if ((space.test(username.trim()) == true) ||
        (charMark.test(username.trim()) == false) &&
        (charSpace.test(username.trim()) == false))
      {
        this.interpolationUsername = "Username must contain _ or . and nust not contain spaces!";
        this.valClassBorderLeftU = "classBorderLeft1";
      }
      else
      {
        this.interpolationUsername = "";
        this.valClassBorderLeftU = "classBorderLeft";
      }
    }

    if (password.trim() == "")
    {
      this.interpolationPassword = "This field is requiered!";
      this.valClassBorderLeftP = "classBorderLeft1";
      password_.focus();
      return;
    }
    else
    {
      if ((space.test(password.trim()) == true) ||
        (charNumber.test(password.trim()) == false) ||
        (uppercaseLetters.test(password.trim()) == false) ||
        (lowecaseLetters.test(password.trim()) == false))
      {
        this.interpolationPassword =
          "Password must contain at least a number," + "\r\n" + "an uppercase letter and a lowercase letter"
          + "\r\n" + "and must not contain spaces!";
        this.valClassBorderLeftP = "classBorderLeft1";
      }
      else
      {
        this.interpolationPassword = "";
        this.valClassBorderLeftP = "classBorderLeft";
      }
    }

    if (passwordConfirm.trim() == "")
    {
      this.interpolationCPassword = "This field is requiered!";
      this.valClassBorderLeftPC = "classBorderLeft1";
      passwordC_.focus();
      return;      
    }
    else
    {
      if (passwordConfirm.trim() != password.trim())
      {
        this.interpolationCPassword = "Paswords doesn`t match!";
        this.valClassBorderLeftPC = "classBorderLeft1";
      }
      else
      {
        this.interpolationCPassword = "";
        this.valClassBorderLeftPC = "classBorderLeft";
      }
    }

    for(let i =0; i<this.servRegisterForm.dateFromRegisterForm.length; i++)
    {
      if((this.servRegisterForm.dateFromRegisterForm[i].email == this.registerFormDates.value.email)||
      (this.servRegisterForm.dateFromRegisterForm[i].username == this.registerFormDates.value.username))
      {
        numberAlert = numberAlert + 1;
      }
    }

    if(numberAlert > 0)
    {
      divMessage_.style.display = "block";
      return;
    }
    else
    {
      this.servRegisterForm.dateFromRegisterForm.push(this.registerFormDates.value);
    }
    

    this.registerFormRouter.navigateByUrl("/logInFormComponent");
  }

  fnBack()
  {
    const divMessage_ = <HTMLDivElement>document.getElementById("idMessageUserOrEmail");

    divMessage_.style.display = "none";
  }

  fnBlurFirstName()
  {
    this.interpolationaFirstName = "";
    this.valClassBorderLeftFN = "classBorderLeft";
  }

  fnFocusFirstName()
  {
    this.fnInputFirstName();
  }

  fnInputFirstName()
  {
    let charNumber = /[0-9]/;
    let firstName:string  = this.registerFormDates.value.firstName || "";

    if (firstName.trim() == "")
    {
      this.interpolationaFirstName = "This field is requiered!";
      this.valClassBorderLeftFN = "classBorderLeft1";
    }
    else
    {
      if (charNumber.test(firstName) == true)
      {
        this.interpolationaFirstName = "Last name can't contain numbers!";
        this.valClassBorderLeftFN = "classBorderLeft1";
      }
      else
      {
        this.interpolationaFirstName = "";
        this.valClassBorderLeftFN = "classBorderLeft";
      }
    }
  }

  fnBlurLastName()
  {
    this.interpolationaLastName = "";
    this.valClassBorderLeftLN = "classBorderLeft";
  }

  fnFocusLastName()
  {
    this.fnInputLastName();
  }

  fnInputLastName()
  {
    let charNumber = /[0-9]/;
    let lastName:string  = this.registerFormDates.value.firstName || "";

    if (lastName.trim() == "")
    {
      this.interpolationaLastName = "This field is requiered!";
      this.valClassBorderLeftLN = "classBorderLeft1";
    }
    else
    {
      if (charNumber.test(lastName) == true)
      {
        this.interpolationaLastName = "Last name can't contain numbers!";
        this.valClassBorderLeftLN = "classBorderLeft1";
      }
      else
      {
        this.interpolationaLastName = "";
        this.valClassBorderLeftLN = "classBorderLeft";
      }
    }
  }

  fnInputPIN()
  {
    let PIN:string  = this.registerFormDates.value.PIN || "";

    if ((PIN.slice(1, 2) == "9") ||
      (PIN.slice(1, 2) == "8") ||
      (PIN.slice(1, 2) == "7") ||
      (PIN.slice(1, 2) == "6") ||
      (PIN.slice(1, 2) == "5") ||
      (PIN.slice(1, 2) == "4") ||
      (PIN.slice(1, 2) == "3"))
    {
      this.valDate = "19" + PIN.slice(1, 3) + "-" + PIN.slice(3, 5) + "-"
        + PIN.slice(5, 7);
    }
    else
    {
      this.valDate = "20" + PIN.slice(1, 3) + "-" + PIN.slice(3, 5) + "-"
        + PIN.slice(5, 7);
    }

    if((PIN.slice(0,1) == "1")||
    (PIN.slice(0,1) == "5")||
    (PIN.slice(0,1) == "7"))
    {
      this.registerFormDates.controls.sex.setValue("male");
    }

    if((PIN.slice(0,1) == "2")||
    (PIN.slice(0,1) == "6")||
    (PIN.slice(0,1) == "8"))
    {
      this.registerFormDates.controls.sex.setValue("female");
    }
  }

  fnCollegeClick()
  {
    let college  = this.registerFormDates.value.college || false;

    if (college == false)
    {
      this.registerFormDates.controls.highSchool.setValue(true);
    }

    if (college == true)
    {
      this.registerFormDates.controls.master.setValue(false);
    }
  }

  fnMasterClick()
  {
    let master = this.registerFormDates.value.master || false;

    if (master == false)
    {
      this.registerFormDates.controls.college.setValue(true);
      this.registerFormDates.controls.highSchool.setValue(true);
    }
  }

  fnHIghSchoolClick()
  {
    let highSchool  = this.registerFormDates.value.highSchool || false;

    if (highSchool == true)
    {
      this.registerFormDates.controls.college.setValue(false);
      this.registerFormDates.controls.master.setValue(false);
    }
  }

  fnBlurEmail()
  {
    this.interpolationEmail = "";
    this.valClassBorderLeftE = "classBorderLeft";
  }

  fnFocusEmail()
  {
    this.fnInputEmail();
  }

  fnInputEmail()
  {
    let space = /\s/;
    let charArond = /\@/;
    let charMark = /\./;
    let email:string  = this.registerFormDates.value.email || "";

    if (email.trim() == "")
    {
      this.interpolationEmail = "This field is requiered!";
      this.valClassBorderLeftE = "classBorderLeft1";
    }
    else
    {
      if ((charArond.test(email.trim()) == false) ||
        (space.test(email.trim()) == true) ||
        (charMark.test(email.trim()) == false)) 
      {
        this.interpolationEmail = "Email must contain @ and . and must not contain spaces!";
        this.valClassBorderLeftE = "classBorderLeft1";
      }
      else
      {
        this.interpolationEmail = "";
        this.valClassBorderLeftE = "classBorderLeft";
      }
    }
  }

  fnBlurUsername()
  {
    this.interpolationUsername = "";
    this.valClassBorderLeftU = "classBorderLeft";
  }

  fnFocusUsername()
  {
    this.fnInputUsername();
  }

  fnInputUsername()
  {
    let space = /\s/;
    let charMark = /\./;
    let charSpace = /\_/;
    let username = this.registerFormDates.value.username || "";

    if (username.trim() == "")
    {
      this.interpolationUsername = "This field is requiered!";
      this.valClassBorderLeftU = "classBorderLeft1";
    }
    else
    {
      if ((space.test(username.trim()) == true) ||
        (charMark.test(username.trim()) == false) &&
        (charSpace.test(username.trim()) == false))
      {
        this.interpolationUsername = "Username must contain _ or . and nust not contain spaces!";
        this.valClassBorderLeftU = "classBorderLeft1";
      }
      else
      {
        this.interpolationUsername = "";
        this.valClassBorderLeftU = "classBorderLeft";
      }
    }
  }

  fnShowPassword()
  {
    const inputPassword_ = <HTMLInputElement>document.getElementById("idPassword");
    const showPassord1_ = <HTMLSpanElement>document.getElementById("idSpanShow1");

    inputPassword_.type = "text";
    showPassord1_.className = "fa fa-eye";
    showPassord1_.style.cursor = "pointer";
  }

  fnHidePassword()
  {
    const inputPassword_ = <HTMLInputElement>document.getElementById("idPassword");
    const showPassord1_ = <HTMLSpanElement>document.getElementById("idSpanShow1");

    inputPassword_.type = "password";
    showPassord1_.className = "fa fa-eye-slash";
  }

  fnShowConfirmPassword()
  {
    const inputConfirmPassword_ = <HTMLInputElement>document.getElementById("idConfirmPassword");
    const showConfirmPassord1_ = <HTMLSpanElement>document.getElementById("idSpanShow2");

    inputConfirmPassword_.type = "text";
    showConfirmPassord1_.className = "fa fa-eye";
    showConfirmPassord1_.style.cursor = "pointer";
  }

  fnHideConfirmPassword()
  {
    const inputConfirmPassword_ = <HTMLInputElement>document.getElementById("idConfirmPassword");
    const showConfirmPassord1_ = <HTMLSpanElement>document.getElementById("idSpanShow2");

    inputConfirmPassword_.type = "password";
    showConfirmPassord1_.className = "fa fa-eye-slash";
  }

  fnBlurPassword()
  {
    this.interpolationPassword = "";
    this.valClassBorderLeftP = "classBorderLeft";
  }

  fnFocusPassword()
  {
    this.fnInputPassword();
  }

  fnInputPassword()
  {
    let space = /\s/;
    let charNumber = /[0-9]/;
    let uppercaseLetters = /[A-Z]/;
    let lowecaseLetters = /[a-z]/;
    let password = this.registerFormDates.value.password || "";

    if (password.trim() == "")
    {
      this.interpolationPassword = "This field is requiered!";
      this.valClassBorderLeftP = "classBorderLeft1";
    }
    else
    {
      if ((space.test(password.trim()) == true) ||
        (charNumber.test(password.trim()) == false) ||
        (uppercaseLetters.test(password.trim()) == false) ||
        (lowecaseLetters.test(password.trim()) == false))
      {
        this.interpolationPassword =
          "Password must contain at least a number," + "\r\n" + "an uppercase letter and a lowercase letter"
          + "\r\n" + "and must not contain spaces!";
        this.valClassBorderLeftP = "classBorderLeft1";
      }
      else
      {
        this.interpolationPassword = "";
        this.valClassBorderLeftP = "classBorderLeft";
      }
    }
  }

  fnBlurCPassword()
  {
    this.interpolationCPassword = "";
    this.valClassBorderLeftPC = "classBorderLeft";
  }

  fnFocusCPassword()
  {
    this.fnInputCPassword();
  }

  fnInputCPassword()
  {
    let password = this.registerFormDates.value.password || "";
    let passwordConfirm:string  = this.registerFormDates.value.passwordConfirm || "";

    if (passwordConfirm.trim() == "")
    {
      this.interpolationCPassword = "This field is requiered!";
      this.valClassBorderLeftPC = "classBorderLeft1";
      
    }
    else
    {
      if (passwordConfirm.trim() != password.trim())
      {
        this.interpolationCPassword = "Paswords doesn`t match!";
        this.valClassBorderLeftPC = "classBorderLeft1";
      }
      else
      {
        this.interpolationCPassword = "";
        this.valClassBorderLeftPC = "classBorderLeft";
      }
    }
  }

  fnCompleteData()
  {
    const radioMale = <HTMLInputElement>document.getElementById("idMale");

    this.registerFormDates.controls.person.setValue("1");
    this.registerFormDates.controls.firstName.setValue("Popescu");
    this.registerFormDates.controls.lastName.setValue("Gheorghe");
    this.registerFormDates.controls.PIN.setValue("1790529050031");
    this.valDate = "1979-05-29";
    this.registerFormDates.controls.sex.setValue("male");
    this.registerFormDates.controls.highSchool.setValue(true);
    this.registerFormDates.controls.college.setValue(true);
    this.registerFormDates.controls.master.setValue(false);
    this.registerFormDates.controls.email.setValue("gheorghe.popescu@gmail.com");
    this.registerFormDates.controls.username.setValue("popescu_gheorghe");
    this.registerFormDates.controls.password.setValue("123456Az");
    this.registerFormDates.controls.passwordConfirm.setValue("123456Az");
  }

  fnDeleteData()
  {
    this.registerFormDates.reset();

    let todayDate = new Date().toISOString().slice(0, 10);
    this.valDate = todayDate;
  }
}

