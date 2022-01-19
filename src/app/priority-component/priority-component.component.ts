import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-priority-component',
  templateUrl: './priority-component.component.html',
  styleUrls: ['./priority-component.component.css',
    '../appStyle.css']
})
export class PriorityComponentComponent implements OnInit
{

  classDivInterpolation: string = "";
  valInputPriority: string = "";
  jsonPriorities: any = [];
  arrayPriorities: any = [];
  spanInterpolation: string = "";
  classIcon: string = "";
  spanInterpolationSelect: string = "";
  valSelectChoose: string = "";
  classDivInterpolationSelect: string = "";
  arrayVeryImportant: Array<string> = [];
  arrayImportant: Array<string> = [];
  arrayLessImportant: Array<string> = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void
  {
    this.httpClient.get("assets/jsonPriority.json").subscribe(data =>
    {
      this.jsonPriorities = data;

      this.arrayPriorities = this.jsonPriorities.priorities;
    })
  }

  fnAddPriority()
  {
    const inputPriority_ = <HTMLInputElement>document.getElementById("idInputPriority");
    const spanIcon_ = <HTMLSpanElement>document.getElementById("idSpanArrow");
    const selectPriority_ = <HTMLSelectElement>document.getElementById("idSelectPriority");

    if (this.valInputPriority.trim() == "")
    {
      this.classDivInterpolation = "classDivInterpolation";
      this.spanInterpolation = "This field is required!";
      spanIcon_.className = "fa fa-arrow-right";
      inputPriority_.focus();
      return;
    }
    else
    {
      this.classDivInterpolation = "";
      this.spanInterpolation = "";
      spanIcon_.className = "fa fa-level-up";
    }

    if (selectPriority_.value == "")
    {
      this.classDivInterpolationSelect = "classDivInterpolation";
      this.spanInterpolationSelect = "Choose the importance!";
      selectPriority_.focus();
      return;
    }


    if (selectPriority_.value == "1")
    {
      if (this.arrayVeryImportant.includes(this.valInputPriority) == true)
      {
        this.classDivInterpolationSelect = "classDivInterpolation";
        this.spanInterpolationSelect = "This priority was allready introduced in this list!";
        selectPriority_.focus();
      }
      else
      {
        if (this.arrayImportant.includes(this.valInputPriority) == true)
        {
          this.classDivInterpolationSelect = "classDivInterpolation";
          this.spanInterpolationSelect = "This priority was allready introduced in list of Important Priorities!";
          selectPriority_.focus();
        }
        else
        {
          if (this.arrayLessImportant.includes(this.valInputPriority) == true)
          {
            this.classDivInterpolationSelect = "classDivInterpolation";
            this.spanInterpolationSelect = "This priority was allready introduced in list of Less Important Priorities!";
            selectPriority_.focus();
          }
          else
          {
            this.arrayVeryImportant.push(this.valInputPriority);
            this.classDivInterpolationSelect = "";
            this.spanInterpolationSelect = "";
          }
        }
      }
    }

    if (selectPriority_.value == "2")
    {
      if (this.arrayImportant.includes(this.valInputPriority) == true)
      {
        this.classDivInterpolationSelect = "classDivInterpolation";
        this.spanInterpolationSelect = "This priority was allready introduced in this list!";
        selectPriority_.focus();
      }
      else
      {
        if (this.arrayVeryImportant.includes(this.valInputPriority) == true)
        {
          this.classDivInterpolationSelect = "classDivInterpolation";
          this.spanInterpolationSelect = "This priority was allready introduced in list of Very Important Priorities!";
          selectPriority_.focus();
        }
        else
        {
          if (this.arrayLessImportant.includes(this.valInputPriority) == true)
          {
            this.classDivInterpolationSelect = "classDivInterpolation";
            this.spanInterpolationSelect = "This priority was allready introduced in list of Less Important Priorities!";
            selectPriority_.focus();
          }
          else
          {
            this.arrayImportant.push(this.valInputPriority);
            this.classDivInterpolationSelect = "";
            this.spanInterpolationSelect = "";
          }
        }
      }
    }

    if (selectPriority_.value == "3")
    {
      if (this.arrayLessImportant.includes(this.valInputPriority) == true)
      {
        this.classDivInterpolationSelect = "classDivInterpolation";
        this.spanInterpolationSelect = "This priority was allready introduced in this list!";
        selectPriority_.focus();
      }
      else
      {
        if (this.arrayVeryImportant.includes(this.valInputPriority) == true)
        {
          this.classDivInterpolationSelect = "classDivInterpolation";
          this.spanInterpolationSelect = "This priority was allready introduced in list of Very Important Priorities!";
          selectPriority_.focus();
        }
        else
        {
          if (this.arrayImportant.includes(this.valInputPriority) == true)
          {
            this.classDivInterpolationSelect = "classDivInterpolation";
            this.spanInterpolationSelect = "This priority was allready introduced in list of Important Priorities!";
            selectPriority_.focus();
          }
          else
          {
            this.arrayLessImportant.push(this.valInputPriority);
            this.classDivInterpolationSelect = "";
            this.spanInterpolationSelect = "";
          }
        }
      }
    }

    this.valInputPriority = "";

  }

  fnInputPriority()
  {
    const spanIcon_ = <HTMLSpanElement>document.getElementById("idSpanArrow");

    if (this.valInputPriority.trim() == "")
    {
      this.classDivInterpolation = "classDivInterpolation";
      this.spanInterpolation = "This field is required!";
      spanIcon_.className = "fa fa-arrow-right";
    }
    else
    {
      this.classDivInterpolation = "";
      this.spanInterpolation = "";
      spanIcon_.className = "fa fa-level-up";
    }
  }

  fnBlurInputPriority()
  {
    const spanIcon_ = <HTMLSpanElement>document.getElementById("idSpanArrow");

    this.classDivInterpolation = "";
    this.spanInterpolation = "";
    spanIcon_.className = "fa fa-level-up";
  }

  fnFocusInputPriority()
  {

    this.fnInputPriority();
  }

  fnBlurSelectPriority()
  {
    this.classDivInterpolationSelect = "";
    this.spanInterpolationSelect = "";
  }

  fnChangeSelectPriority()
  {
    if (this.valSelectChoose == "")
    {
      this.classDivInterpolationSelect = "classDivInterpolation";
      this.spanInterpolationSelect = "Choose the importance!";
    }
    else
    {
      this.classDivInterpolationSelect = "";
      this.spanInterpolationSelect = "";
    }
  }

  fnMetUpperCaseLetters(param1: string)
  {
    let uppercaseString: string = "";

    uppercaseString = param1.toUpperCase();

    return uppercaseString;
  }

  fnClearLists()
  {
    this.arrayVeryImportant = [];
    this.arrayImportant = [];
    this.arrayLessImportant = [];
  }

  fnClearListVI()
  {
    this.arrayVeryImportant = [];
  }

  fnClearListI()
  {
    this.arrayImportant = [];
  }

  fnClearListLI()
  {
    this.arrayLessImportant = [];
  }

  fnDeleteIP(param1:number)
  {
    this.arrayVeryImportant.splice(param1,1);
  }

  fnDeleteI(param1:number)
  {
    this.arrayImportant.splice(param1,1);
  }

  fnDeleteLI(param1:number)
  {
    this.arrayLessImportant.splice(param1,1);
  }

}
