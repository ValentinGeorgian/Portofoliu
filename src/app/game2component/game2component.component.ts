import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game2component',
  templateUrl: './game2component.component.html',
  styleUrls: ['./game2component.component.css']
})
export class Game2componentComponent implements OnInit
{

  valMoves: string = "0";
  x: number = 0;
  valSpan: string = "00";
  valSpan1: string = "00";
  varInterval = setInterval(() => { }, 0);
  valInputAdd: string = "";
  arrayUser: any = [];
  arrayValues: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
  classButton:string = "";

  constructor() { }

  ngOnInit(): void
  {
    const buttonReset_ = <HTMLButtonElement>document.getElementById("idButtonReset");
    const inputAddName_ = <HTMLInputElement>document.getElementById("idInputAddName");

    buttonReset_.disabled = true;
    inputAddName_.disabled = true;
  }

  fnClick1()
  {
    const button1_ = <HTMLButtonElement>document.getElementById("idButton1");
    const button2_ = <HTMLButtonElement>document.getElementById("idButton2");
    const button5_ = <HTMLButtonElement>document.getElementById("idButton5");

    if (button2_.innerText == "")
    {
      button2_.innerText = button1_.innerText;
      button1_.innerText = "";
      this.x = this.x + 1;
    }

    if (button5_.innerText == "")
    {
      button5_.innerText = button1_.innerText;
      button1_.innerText = "";
      this.x = this.x + 1;
    }

    if(button1_.innerText == "1")
    {
      button1_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button1_.className = "btn btn-light class16Buttons";
    }

    if(button2_.innerText == "2")
    {
      button2_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button2_.className = "btn btn-light class16Buttons";
    }

    if(button5_.innerText == "5")
    {
      button5_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button5_.className = "btn btn-light class16Buttons";
    }

    this.valMoves = this.x.toString();
  }

  fnClick2()
  {
    const button1_ = <HTMLButtonElement>document.getElementById("idButton1");
    const button2_ = <HTMLButtonElement>document.getElementById("idButton2");
    const button3_ = <HTMLButtonElement>document.getElementById("idButton3");
    const button6_ = <HTMLButtonElement>document.getElementById("idButton6");

    if (button1_.innerText == "")
    {
      button1_.innerText = button2_.innerText;
      button2_.innerText = "";
      this.x = this.x + 1;
    }

    if (button3_.innerText == "")
    {
      button3_.innerText = button2_.innerText;
      button2_.innerText = "";
      this.x = this.x + 1;
    }

    if (button6_.innerText == "")
    {
      button6_.innerText = button2_.innerText;
      button2_.innerText = "";
      this.x = this.x + 1;
    }

    if(button1_.innerText == "1")
    {
      button1_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button1_.className = "btn btn-light class16Buttons";
    }

    if(button2_.innerText == "2")
    {
      button2_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button2_.className = "btn btn-light class16Buttons";
    }

    if(button3_.innerText == "3")
    {
      button3_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button3_.className = "btn btn-light class16Buttons";
    }

    if(button6_.innerText == "6")
    {
      button6_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button6_.className = "btn btn-light class16Buttons";
    }

    this.valMoves = this.x.toString();
  }

  fnClick3()
  {
    const button2_ = <HTMLButtonElement>document.getElementById("idButton2");
    const button3_ = <HTMLButtonElement>document.getElementById("idButton3");
    const button4_ = <HTMLButtonElement>document.getElementById("idButton4");
    const button7_ = <HTMLButtonElement>document.getElementById("idButton7");

    if (button2_.innerText == "")
    {
      button2_.innerText = button3_.innerText;
      button3_.innerText = "";
      this.x = this.x + 1;
    }

    if (button4_.innerText == "")
    {
      button4_.innerText = button3_.innerText;
      button3_.innerText = "";
      this.x = this.x + 1;
    }

    if (button7_.innerText == "")
    {
      button7_.innerText = button3_.innerText;
      button3_.innerText = "";
      this.x = this.x + 1;
    }

    if(button2_.innerText == "2")
    {
      button2_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button2_.className = "btn btn-light class16Buttons";
    }

    if(button3_.innerText == "3")
    {
      button3_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button3_.className = "btn btn-light class16Buttons";
    }

    if(button4_.innerText == "4")
    {
      button4_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button4_.className = "btn btn-light class16Buttons";
    }

    if(button7_.innerText == "7")
    {
      button7_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button7_.className = "btn btn-light class16Buttons";
    }

    this.valMoves = this.x.toString();
  }

  fnClick4()
  {
    const button3_ = <HTMLButtonElement>document.getElementById("idButton3");
    const button4_ = <HTMLButtonElement>document.getElementById("idButton4");
    const button8_ = <HTMLButtonElement>document.getElementById("idButton8");

    if (button3_.innerText == "")
    {
      button3_.innerText = button4_.innerText;
      button4_.innerText = "";
      this.x = this.x + 1;
    }

    if (button8_.innerText == "")
    {
      button8_.innerText = button4_.innerText;
      button4_.innerText = "";
      this.x = this.x + 1;
    }

    if(button3_.innerText == "3")
    {
      button3_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button3_.className = "btn btn-light class16Buttons";
    }

    if(button4_.innerText == "4")
    {
      button4_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button4_.className = "btn btn-light class16Buttons";
    }

    if(button8_.innerText == "8")
    {
      button8_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button8_.className = "btn btn-light class16Buttons";
    }

    this.valMoves = this.x.toString();
  }

  fnClick5()
  {
    const button1_ = <HTMLButtonElement>document.getElementById("idButton1");
    const button5_ = <HTMLButtonElement>document.getElementById("idButton5");
    const button6_ = <HTMLButtonElement>document.getElementById("idButton6");
    const button9_ = <HTMLButtonElement>document.getElementById("idButton9");

    if (button1_.innerText == "")
    {
      button1_.innerText = button5_.innerText;
      button5_.innerText = "";
      this.x = this.x + 1;
    }

    if (button6_.innerText == "")
    {
      button6_.innerText = button5_.innerText;
      button5_.innerText = "";
      this.x = this.x + 1;
    }

    if (button9_.innerText == "")
    {
      button9_.innerText = button5_.innerText;
      button5_.innerText = "";
      this.x = this.x + 1;
    }

    if(button1_.innerText == "1")
    {
      button1_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button1_.className = "btn btn-light class16Buttons";
    }

    if(button5_.innerText == "5")
    {
      button5_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button5_.className = "btn btn-light class16Buttons";
    }

    if(button6_.innerText == "6")
    {
      button6_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button6_.className = "btn btn-light class16Buttons";
    }

    if(button9_.innerText == "9")
    {
      button9_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button9_.className = "btn btn-light class16Buttons";
    }

    this.valMoves = this.x.toString();
  }

  fnClick6()
  {
    const button2_ = <HTMLButtonElement>document.getElementById("idButton2");
    const button5_ = <HTMLButtonElement>document.getElementById("idButton5");
    const button6_ = <HTMLButtonElement>document.getElementById("idButton6");
    const button7_ = <HTMLButtonElement>document.getElementById("idButton7");
    const button10_ = <HTMLButtonElement>document.getElementById("idButton10");

    if (button2_.innerText == "")
    {
      button2_.innerText = button6_.innerText;
      button6_.innerText = "";
      this.x = this.x + 1;
    }

    if (button5_.innerText == "")
    {
      button5_.innerText = button6_.innerText;
      button6_.innerText = "";
      this.x = this.x + 1;
    }

    if (button7_.innerText == "")
    {
      button7_.innerText = button6_.innerText;
      button6_.innerText = "";
      this.x = this.x + 1;
    }

    if (button10_.innerText == "")
    {
      button10_.innerText = button6_.innerText;
      button6_.innerText = "";
      this.x = this.x + 1;
    }

    if(button2_.innerText == "2")
    {
      button2_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button2_.className = "btn btn-light class16Buttons";
    }

    if(button5_.innerText == "5")
    {
      button5_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button5_.className = "btn btn-light class16Buttons";
    }

    if(button6_.innerText == "6")
    {
      button6_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button6_.className = "btn btn-light class16Buttons";
    }

    if(button7_.innerText == "7")
    {
      button7_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button7_.className = "btn btn-light class16Buttons";
    }

    if(button10_.innerText == "10")
    {
      button10_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button10_.className = "btn btn-light class16Buttons";
    }

    this.valMoves = this.x.toString();
  }

  fnClick7()
  {
    const button3_ = <HTMLButtonElement>document.getElementById("idButton3");
    const button6_ = <HTMLButtonElement>document.getElementById("idButton6");
    const button7_ = <HTMLButtonElement>document.getElementById("idButton7");
    const button8_ = <HTMLButtonElement>document.getElementById("idButton8");
    const button11_ = <HTMLButtonElement>document.getElementById("idButton11");

    if (button3_.innerText == "")
    {
      button3_.innerText = button7_.innerText;
      button7_.innerText = "";
      this.x = this.x + 1;
    }

    if (button6_.innerText == "")
    {
      button6_.innerText = button7_.innerText;
      button7_.innerText = "";
      this.x = this.x + 1;
    }

    if (button8_.innerText == "")
    {
      button8_.innerText = button7_.innerText;
      button7_.innerText = "";
      this.x = this.x + 1;
    }

    if (button11_.innerText == "")
    {
      button11_.innerText = button7_.innerText;
      button7_.innerText = "";
      this.x = this.x + 1;
    }

    if(button3_.innerText == "3")
    {
      button3_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button3_.className = "btn btn-light class16Buttons";
    }

    if(button6_.innerText == "6")
    {
      button6_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button6_.className = "btn btn-light class16Buttons";
    }

    if(button7_.innerText == "7")
    {
      button7_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button7_.className = "btn btn-light class16Buttons";
    }

    if(button8_.innerText == "8")
    {
      button8_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button8_.className = "btn btn-light class16Buttons";
    }

    if(button11_.innerText == "11")
    {
      button11_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button11_.className = "btn btn-light class16Buttons";
    }

    this.valMoves = this.x.toString();
  }

  fnClick8()
  {
    const button4_ = <HTMLButtonElement>document.getElementById("idButton4");
    const button7_ = <HTMLButtonElement>document.getElementById("idButton7");
    const button8_ = <HTMLButtonElement>document.getElementById("idButton8");
    const button12_ = <HTMLButtonElement>document.getElementById("idButton12");

    if (button4_.innerText == "")
    {
      button4_.innerText = button8_.innerText;
      button8_.innerText = "";
      this.x = this.x + 1;
    }

    if (button7_.innerText == "")
    {
      button7_.innerText = button8_.innerText;
      button8_.innerText = "";
      this.x = this.x + 1;
    }

    if (button12_.innerText == "")
    {
      button12_.innerText = button8_.innerText;
      button8_.innerText = "";
      this.x = this.x + 1;
    }

    if(button4_.innerText == "4")
    {
      button4_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button4_.className = "btn btn-light class16Buttons";
    }

    if(button7_.innerText == "7")
    {
      button7_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button7_.className = "btn btn-light class16Buttons";
    }

    if(button8_.innerText == "8")
    {
      button8_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button8_.className = "btn btn-light class16Buttons";
    }

    if(button12_.innerText == "12")
    {
      button12_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button12_.className = "btn btn-light class16Buttons";
    }

    this.valMoves = this.x.toString();
  }

  fnClick9()
  {
    const button5_ = <HTMLButtonElement>document.getElementById("idButton5");
    const button9_ = <HTMLButtonElement>document.getElementById("idButton9");
    const button10_ = <HTMLButtonElement>document.getElementById("idButton10");
    const button13_ = <HTMLButtonElement>document.getElementById("idButton13");

    if (button5_.innerText == "")
    {
      button5_.innerText = button9_.innerText;
      button9_.innerText = "";
      this.x = this.x + 1;
    }

    if (button10_.innerText == "")
    {
      button10_.innerText = button9_.innerText;
      button9_.innerText = "";
      this.x = this.x + 1;
    }

    if (button13_.innerText == "")
    {
      button13_.innerText = button9_.innerText;
      button9_.innerText = "";
      this.x = this.x + 1;
    }

    if(button5_.innerText == "5")
    {
      button5_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button5_.className = "btn btn-light class16Buttons";
    }

    if(button9_.innerText == "9")
    {
      button9_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button9_.className = "btn btn-light class16Buttons";
    }

    if(button10_.innerText == "10")
    {
      button10_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button10_.className = "btn btn-light class16Buttons";
    }

    if(button13_.innerText == "13")
    {
      button13_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button13_.className = "btn btn-light class16Buttons";
    }

    this.valMoves = this.x.toString();
  }

  fnClick10()
  {
    const button6_ = <HTMLButtonElement>document.getElementById("idButton6");
    const button9_ = <HTMLButtonElement>document.getElementById("idButton9");
    const button10_ = <HTMLButtonElement>document.getElementById("idButton10");
    const button11_ = <HTMLButtonElement>document.getElementById("idButton11");
    const button14_ = <HTMLButtonElement>document.getElementById("idButton14");

    if (button6_.innerText == "")
    {
      button6_.innerText = button10_.innerText;
      button10_.innerText = "";
      this.x = this.x + 1;
    }

    if (button9_.innerText == "")
    {
      button9_.innerText = button10_.innerText;
      button10_.innerText = "";
      this.x = this.x + 1;
    }

    if (button11_.innerText == "")
    {
      button11_.innerText = button10_.innerText;
      button10_.innerText = "";
      this.x = this.x + 1;
    }

    if (button14_.innerText == "")
    {
      button14_.innerText = button10_.innerText;
      button10_.innerText = "";
      this.x = this.x + 1;
    }

    if(button6_.innerText == "6")
    {
      button6_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button6_.className = "btn btn-light class16Buttons";
    }

    if(button9_.innerText == "9")
    {
      button9_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button9_.className = "btn btn-light class16Buttons";
    }

    if(button10_.innerText == "10")
    {
      button10_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button10_.className = "btn btn-light class16Buttons";
    }

    if(button11_.innerText == "11")
    {
      button11_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button11_.className = "btn btn-light class16Buttons";
    }

    if(button14_.innerText == "14")
    {
      button14_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button14_.className = "btn btn-light class16Buttons";
    }

    this.valMoves = this.x.toString();
  }

  fnClick11()
  {
    const button7_ = <HTMLButtonElement>document.getElementById("idButton7");
    const button10_ = <HTMLButtonElement>document.getElementById("idButton10");
    const button11_ = <HTMLButtonElement>document.getElementById("idButton11");
    const button12_ = <HTMLButtonElement>document.getElementById("idButton12");
    const button15_ = <HTMLButtonElement>document.getElementById("idButton15");

    if (button7_.innerText == "")
    {
      button7_.innerText = button11_.innerText;
      button11_.innerText = "";
      this.x = this.x + 1;
    }

    if (button10_.innerText == "")
    {
      button10_.innerText = button11_.innerText;
      button11_.innerText = "";
      this.x = this.x + 1;
    }

    if (button12_.innerText == "")
    {
      button12_.innerText = button11_.innerText;
      button11_.innerText = "";
      this.x = this.x + 1;
    }

    if (button15_.innerText == "")
    {
      button15_.innerText = button11_.innerText;
      button11_.innerText = "";
      this.x = this.x + 1;
    }

    if(button7_.innerText == "7")
    {
      button7_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button7_.className = "btn btn-light class16Buttons";
    }

    if(button10_.innerText == "10")
    {
      button10_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button10_.className = "btn btn-light class16Buttons";
    }

    if(button11_.innerText == "11")
    {
      button11_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button11_.className = "btn btn-light class16Buttons";
    }

    if(button12_.innerText == "12")
    {
      button12_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button12_.className = "btn btn-light class16Buttons";
    }

    if(button15_.innerText == "15")
    {
      button15_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button15_.className = "btn btn-light class16Buttons";
    }

    this.valMoves = this.x.toString();
  }

  fnClick12()
  {
    const button8_ = <HTMLButtonElement>document.getElementById("idButton8");
    const button11_ = <HTMLButtonElement>document.getElementById("idButton11");
    const button12_ = <HTMLButtonElement>document.getElementById("idButton12");
    const button16_ = <HTMLButtonElement>document.getElementById("idButton16");

    if (button16_.innerText == "")
    {
      button16_.innerText = button12_.innerText;
      button12_.innerText = "";
      this.x = this.x + 1;
    }

    if (button11_.innerText == "")
    {
      button11_.innerText = button12_.innerText;
      button12_.innerText = "";
      this.x = this.x + 1;
    }

    if (button8_.innerText == "")
    {
      button8_.innerText = button12_.innerText;
      button12_.innerText = "";
      this.x = this.x + 1;
    }

    if(button8_.innerText == "8")
    {
      button8_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button8_.className = "btn btn-light class16Buttons";
    }

    if(button11_.innerText == "11")
    {
      button11_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button11_.className = "btn btn-light class16Buttons";
    }

    if(button12_.innerText == "12")
    {
      button12_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button12_.className = "btn btn-light class16Buttons";
    }

    
    if(button16_.innerText == "")
    {
      button16_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button16_.className = "btn btn-light class16Buttons";
    }

    this.valMoves = this.x.toString();
  }

  fnClick13()
  {
    const button9_ = <HTMLButtonElement>document.getElementById("idButton9");
    const button13_ = <HTMLButtonElement>document.getElementById("idButton13");
    const button14_ = <HTMLButtonElement>document.getElementById("idButton14");

    if (button9_.innerText == "")
    {
      button9_.innerText = button13_.innerText;
      button13_.innerText = "";
      this.x = this.x + 1;
    }

    if (button14_.innerText == "")
    {
      button14_.innerText = button13_.innerText;
      button13_.innerText = "";
      this.x = this.x + 1;
    }

    if(button9_.innerText == "9")
    {
      button9_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button9_.className = "btn btn-light class16Buttons";
    }

    if(button13_.innerText == "13")
    {
      button13_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button13_.className = "btn btn-light class16Buttons";
    }

    if(button14_.innerText == "14")
    {
      button14_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button14_.className = "btn btn-light class16Buttons";
    }

    this.valMoves = this.x.toString();
  }

  fnClick14()
  {
    const button10_ = <HTMLButtonElement>document.getElementById("idButton10");
    const button13_ = <HTMLButtonElement>document.getElementById("idButton13");
    const button14_ = <HTMLButtonElement>document.getElementById("idButton14");
    const button15_ = <HTMLButtonElement>document.getElementById("idButton15");

    if (button13_.innerText == "")
    {
      button13_.innerText = button14_.innerText;
      button14_.innerText = "";
      this.x = this.x + 1;
    }

    if (button15_.innerText == "")
    {
      button15_.innerText = button14_.innerText;
      button14_.innerText = "";
      this.x = this.x + 1;
    }

    if (button10_.innerText == "")
    {
      button10_.innerText = button14_.innerText;
      button14_.innerText = "";
      this.x = this.x + 1;
    }

    if(button10_.innerText == "10")
    {
      button10_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button10_.className = "btn btn-light class16Buttons";
    }

    if(button13_.innerText == "13")
    {
      button13_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button13_.className = "btn btn-light class16Buttons";
    }

    if(button14_.innerText == "14")
    {
      button14_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button14_.className = "btn btn-light class16Buttons";
    }

    if(button15_.innerText == "15")
    {
      button15_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button15_.className = "btn btn-light class16Buttons";
    }

    this.valMoves = this.x.toString();
  }

  fnClick15()
  {
    const button11_ = <HTMLButtonElement>document.getElementById("idButton11");
    const button14_ = <HTMLButtonElement>document.getElementById("idButton14");
    const button15_ = <HTMLButtonElement>document.getElementById("idButton15");
    const button16_ = <HTMLButtonElement>document.getElementById("idButton16");

    if (button14_.innerText == "")
    {
      button14_.innerText = button15_.innerText;
      button15_.innerText = "";
      this.x = this.x + 1;
    }

    if (button16_.innerText == "")
    {
      button16_.innerText = button15_.innerText;
      button15_.innerText = "";
      this.x = this.x + 1;
    }

    if (button11_.innerText == "")
    {
      button11_.innerText = button15_.innerText;
      button15_.innerText = "";
      this.x = this.x + 1;
    }

    if(button11_.innerText == "11")
    {
      button11_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button11_.className = "btn btn-light class16Buttons";
    }

    if(button14_.innerText == "14")
    {
      button14_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button14_.className = "btn btn-light class16Buttons";
    }

    if(button15_.innerText == "15")
    {
      button15_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button15_.className = "btn btn-light class16Buttons";
    }

    
    if(button16_.innerText == "")
    {
      button16_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button16_.className = "btn btn-light class16Buttons";
    }

    this.valMoves = this.x.toString();
  }

  fnClick16()
  {
    const button12_ = <HTMLButtonElement>document.getElementById("idButton12");
    const button15_ = <HTMLButtonElement>document.getElementById("idButton15");
    const button16_ = <HTMLButtonElement>document.getElementById("idButton16");

    if (button15_.innerText == "")
    {
      button15_.innerText = button16_.innerText;
      button16_.innerText = "";
      this.x = this.x + 1;
    }

    if (button12_.innerText == "")
    {
      button12_.innerText = button16_.innerText;
      button16_.innerText = "";
      this.x = this.x + 1;
    }

    if(button12_.innerText == "12")
    {
      button12_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button12_.className = "btn btn-light class16Buttons";
    }

    if(button15_.innerText == "15")
    {
      button15_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button15_.className = "btn btn-light class16Buttons";
    }

    if(button16_.innerText == "")
    {
      button16_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button16_.className = "btn btn-light class16Buttons";
    }

    this.valMoves = this.x.toString();

    this.fnFinalResult();
  }

  fnPlay()
  {
    const modal = <HTMLDivElement>document.getElementById("myModal");
    let y: number = 0;
    let z: number = 0;
    const inputAddName_ = <HTMLInputElement>document.getElementById("idInputAddName");
    const buttonReset_ = <HTMLButtonElement>document.getElementById("idButtonReset");
    
    inputAddName_.disabled = false;

    if(this.valInputAdd == "")
    {
      modal.style.display = "block";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";

        inputAddName_.focus();
      }
    }

    this.fnReset();

    this.varInterval = setInterval(() =>
    {
      y = y + 1;

      if (y == 60)
      {
        y = 0;
        z = z + 1;
      }

      if (y <= 9)
      {
        this.valSpan = "0" + y.toString();
      }
      else
      {
        this.valSpan = y.toString();
      }


      if (z <= 9)
      {
        this.valSpan1 = "0" + z.toString();
      }
      else
      {
        this.valSpan1 = z.toString();
      }
    }, 1000);

    buttonReset_.disabled = false;
  }

  fnReset()
  {
    const button1_ = <HTMLButtonElement>document.getElementById("idButton1");
    const button2_ = <HTMLButtonElement>document.getElementById("idButton2");
    const button3_ = <HTMLButtonElement>document.getElementById("idButton3");
    const button4_ = <HTMLButtonElement>document.getElementById("idButton4");
    const button5_ = <HTMLButtonElement>document.getElementById("idButton5");
    const button6_ = <HTMLButtonElement>document.getElementById("idButton6");
    const button7_ = <HTMLButtonElement>document.getElementById("idButton7");
    const button8_ = <HTMLButtonElement>document.getElementById("idButton8");
    const button9_ = <HTMLButtonElement>document.getElementById("idButton9");
    const button10_ = <HTMLButtonElement>document.getElementById("idButton10");
    const button11_ = <HTMLButtonElement>document.getElementById("idButton11");
    const button12_ = <HTMLButtonElement>document.getElementById("idButton12");
    const button13_ = <HTMLButtonElement>document.getElementById("idButton13");
    const button14_ = <HTMLButtonElement>document.getElementById("idButton14");
    const button15_ = <HTMLButtonElement>document.getElementById("idButton15");
    const button16_ = <HTMLButtonElement>document.getElementById("idButton16");
    const inputAddName_ = <HTMLInputElement>document.getElementById("idInputAddName");
    let y: number = 0;
    let z: number = 0;

    button1_.disabled = true;
    button2_.disabled = true;
    button3_.disabled = true;
    button4_.disabled = true;
    button5_.disabled = true;
    button6_.disabled = true;
    button7_.disabled = true;
    button8_.disabled = true;
    button9_.disabled = true;
    button10_.disabled = true;
    button11_.disabled = true;
    button12_.disabled = true;
    button13_.disabled = true;
    button14_.disabled = true;
    button15_.disabled = true;
    button16_.disabled = true;

    this.arrayValues.sort(() => Math.random() - 0.5);

    button1_.innerText = this.fnResetInnerButton(this.arrayValues[0]);
    button2_.innerText = this.fnResetInnerButton(this.arrayValues[1]);
    button3_.innerText = this.fnResetInnerButton(this.arrayValues[2]);
    button4_.innerText = this.fnResetInnerButton(this.arrayValues[3]);
    button5_.innerText = this.fnResetInnerButton(this.arrayValues[4]);
    button6_.innerText = this.fnResetInnerButton(this.arrayValues[5]);
    button7_.innerText = this.fnResetInnerButton(this.arrayValues[6]);
    button8_.innerText = this.fnResetInnerButton(this.arrayValues[7]);
    button9_.innerText = this.fnResetInnerButton(this.arrayValues[8]);
    button10_.innerText = this.fnResetInnerButton(this.arrayValues[9]);
    button11_.innerText = this.fnResetInnerButton(this.arrayValues[10]);
    button12_.innerText = this.fnResetInnerButton(this.arrayValues[11]);
    button13_.innerText = this.fnResetInnerButton(this.arrayValues[12]);
    button14_.innerText = this.fnResetInnerButton(this.arrayValues[13]);
    button15_.innerText = this.fnResetInnerButton(this.arrayValues[14]);
    button16_.innerText = this.fnResetInnerButton(this.arrayValues[15]);

    if(button1_.innerText == "1")
    {
      button1_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button1_.className = "btn btn-light class16Buttons";
    }

    if(button2_.innerText == "2")
    {
      button2_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button2_.className = "btn btn-light class16Buttons";
    }

    if(button3_.innerText == "3")
    {
      button3_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button3_.className = "btn btn-light class16Buttons";
    }

    if(button4_.innerText == "4")
    {
      button4_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button4_.className = "btn btn-light class16Buttons";
    }

    if(button5_.innerText == "5")
    {
      button5_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button5_.className = "btn btn-light class16Buttons";
    }

    if(button6_.innerText == "6")
    {
      button6_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button6_.className = "btn btn-light class16Buttons";
    }

    if(button7_.innerText == "7")
    {
      button7_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button7_.className = "btn btn-light class16Buttons";
    }

    if(button8_.innerText == "8")
    {
      button8_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button8_.className = "btn btn-light class16Buttons";
    }

    if(button9_.innerText == "9")
    {
      button9_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button9_.className = "btn btn-light class16Buttons";
    }

    if(button10_.innerText == "10")
    {
      button10_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button10_.className = "btn btn-light class16Buttons";
    }

    if(button11_.innerText == "11")
    {
      button11_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button11_.className = "btn btn-light class16Buttons";
    }

    if(button12_.innerText == "12")
    {
      button12_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button12_.className = "btn btn-light class16Buttons";
    }

    if(button13_.innerText == "13")
    {
      button13_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button13_.className = "btn btn-light class16Buttons";
    }

    if(button14_.innerText == "14")
    {
      button14_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button14_.className = "btn btn-light class16Buttons";
    }

    if(button15_.innerText == "15")
    {
      button15_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button15_.className = "btn btn-light class16Buttons";
    }

    if(button16_.innerText == "")
    {
      button16_.className = "btn btn-success class16Buttons";
    }
    else
    {
      button16_.className = "btn btn-light class16Buttons";
    }

    clearInterval(this.varInterval);

    this.valSpan = "00";
    this.valSpan1 = "00";
    this.x = 0;
    this.valMoves = "0";

    this.valInputAdd = "";
    inputAddName_.focus();

    y=0;
    z=0;
  }

  fnResetInnerButton(param1: number)
  {
    if (param1 == 0)
    {
      return "";
    }
    else
    {
      return param1.toString();
    }
  }

  fnFinalResult()
  {
    const button1_ = <HTMLButtonElement>document.getElementById("idButton1");
    const button2_ = <HTMLButtonElement>document.getElementById("idButton2");
    const button3_ = <HTMLButtonElement>document.getElementById("idButton3");
    const button4_ = <HTMLButtonElement>document.getElementById("idButton4");
    const button5_ = <HTMLButtonElement>document.getElementById("idButton5");
    const button6_ = <HTMLButtonElement>document.getElementById("idButton6");
    const button7_ = <HTMLButtonElement>document.getElementById("idButton7");
    const button8_ = <HTMLButtonElement>document.getElementById("idButton8");
    const button9_ = <HTMLButtonElement>document.getElementById("idButton9");
    const button10_ = <HTMLButtonElement>document.getElementById("idButton10");
    const button11_ = <HTMLButtonElement>document.getElementById("idButton11");
    const button12_ = <HTMLButtonElement>document.getElementById("idButton12");
    const button13_ = <HTMLButtonElement>document.getElementById("idButton13");
    const button14_ = <HTMLButtonElement>document.getElementById("idButton14");
    const button15_ = <HTMLButtonElement>document.getElementById("idButton15");
    const button16_ = <HTMLButtonElement>document.getElementById("idButton16");
    const inputAddName_ = <HTMLInputElement>document.getElementById("idInputAddName");
    
    let obiectUser = {
      user: "",
      moves: "",
      time: ""
    }

    if ((button1_.innerText == "1") &&
      (button2_.innerText == "2") &&
      (button3_.innerText == "3") &&
      (button4_.innerText == "4") &&
      (button5_.innerText == "5") &&
      (button6_.innerText == "6") &&
      (button7_.innerText == "7") &&
      (button8_.innerText == "8") &&
      (button9_.innerText == "9") &&
      (button10_.innerText == "10") &&
      (button11_.innerText == "11") &&
      (button12_.innerText == "12") &&
      (button13_.innerText == "13") &&
      (button14_.innerText == "14") &&
      (button15_.innerText == "15") &&
      (button16_.innerText == ""))
    {
      alert("You win!");
      clearInterval(this.varInterval);
      this.x = 0;
      obiectUser.user = this.valInputAdd;
      obiectUser.moves = this.valMoves;
      obiectUser.time = this.valSpan1 + " : " + this.valSpan;
      this.arrayUser.unshift(obiectUser);

      this.valInputAdd = "";
      inputAddName_.focus();

      button1_.disabled = true;
      button2_.disabled = true;
      button3_.disabled = true;
      button4_.disabled = true;
      button5_.disabled = true;
      button6_.disabled = true;
      button7_.disabled = true;
      button8_.disabled = true;
      button9_.disabled = true;
      button10_.disabled = true;
      button11_.disabled = true;
      button12_.disabled = true;
      button13_.disabled = true;
      button14_.disabled = true;
      button15_.disabled = true;
      button16_.disabled = true;
    }
  } 
  
  fnInputAddName()
  {
    const button1_ = <HTMLButtonElement>document.getElementById("idButton1");
    const button2_ = <HTMLButtonElement>document.getElementById("idButton2");
    const button3_ = <HTMLButtonElement>document.getElementById("idButton3");
    const button4_ = <HTMLButtonElement>document.getElementById("idButton4");
    const button5_ = <HTMLButtonElement>document.getElementById("idButton5");
    const button6_ = <HTMLButtonElement>document.getElementById("idButton6");
    const button7_ = <HTMLButtonElement>document.getElementById("idButton7");
    const button8_ = <HTMLButtonElement>document.getElementById("idButton8");
    const button9_ = <HTMLButtonElement>document.getElementById("idButton9");
    const button10_ = <HTMLButtonElement>document.getElementById("idButton10");
    const button11_ = <HTMLButtonElement>document.getElementById("idButton11");
    const button12_ = <HTMLButtonElement>document.getElementById("idButton12");
    const button13_ = <HTMLButtonElement>document.getElementById("idButton13");
    const button14_ = <HTMLButtonElement>document.getElementById("idButton14");
    const button15_ = <HTMLButtonElement>document.getElementById("idButton15");
    const button16_ = <HTMLButtonElement>document.getElementById("idButton16");
    
    button1_.disabled = false;
    button2_.disabled = false;
    button3_.disabled = false;
    button4_.disabled = false;
    button5_.disabled = false;
    button6_.disabled = false;
    button7_.disabled = false;
    button8_.disabled = false;
    button9_.disabled = false;
    button10_.disabled = false;
    button11_.disabled = false;
    button12_.disabled = false;
    button13_.disabled = false;
    button14_.disabled = false;
    button15_.disabled = false;
    button16_.disabled = false;
  }
}
