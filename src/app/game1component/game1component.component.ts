import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game1component',
  templateUrl: './game1component.component.html',
  styleUrls: ['./game1component.component.css']
})
export class Game1componentComponent implements OnInit
{

  x: number = 0;
  intervalCheckResult = setInterval(() => { }, 0);
  valSeconds: string = "00";
  y: number = 0;
  intervalTime = setInterval(() => { }, 0);
  z: number = 0;
  valMinutes: string = "00";
  scoreX: string = "0";
  score0: string = "0";
  resultX: number = 0;
  result0: number = 0;

  constructor() { }

  ngOnInit(): void
  {
    const butonReset = <HTMLButtonElement>document.getElementById("idButtonReset");

    butonReset.disabled = true;
  }

  fnClick1()
  {
    const button1_ = <HTMLButtonElement>document.getElementById("idButton1");

    this.x = this.x + 1;

    if (this.x % 2 == 1)
    {
      button1_.innerText = "X";
    }
    else
    {
      button1_.innerText = "0";
    }

    button1_.disabled = true;
  }

  fnClick2()
  {
    const button2_ = <HTMLButtonElement>document.getElementById("idButton2");

    this.x = this.x + 1;

    if (this.x % 2 == 1)
    {
      button2_.innerText = "X";
    }
    else
    {
      button2_.innerText = "0";
    }

    button2_.disabled = true;
  }

  fnClick3()
  {
    const button3_ = <HTMLButtonElement>document.getElementById("idButton3");

    this.x = this.x + 1;

    if (this.x % 2 == 1)
    {
      button3_.innerText = "X";
    }
    else
    {
      button3_.innerText = "0";
    }

    button3_.disabled = true;
  }

  fnClick4()
  {
    const button4_ = <HTMLButtonElement>document.getElementById("idButton4");

    this.x = this.x + 1;

    if (this.x % 2 == 1)
    {
      button4_.innerText = "X";
    }
    else
    {
      button4_.innerText = "0";
    }

    button4_.disabled = true;
  }

  fnClick5()
  {
    const button5_ = <HTMLButtonElement>document.getElementById("idButton5");

    this.x = this.x + 1;

    if (this.x % 2 == 1)
    {
      button5_.innerText = "X";
    }
    else
    {
      button5_.innerText = "0";
    }

    button5_.disabled = true;
  }

  fnClick6()
  {
    const button6_ = <HTMLButtonElement>document.getElementById("idButton6");

    this.x = this.x + 1;

    if (this.x % 2 == 1)
    {
      button6_.innerText = "X";
    }
    else
    {
      button6_.innerText = "0";
    }

    button6_.disabled = true;
  }

  fnClick7()
  {
    const button7_ = <HTMLButtonElement>document.getElementById("idButton7");

    this.x = this.x + 1;

    if (this.x % 2 == 1)
    {
      button7_.innerText = "X";
    }
    else
    {
      button7_.innerText = "0";
    }

    button7_.disabled = true;
  }

  fnClick8()
  {
    const button8_ = <HTMLButtonElement>document.getElementById("idButton8");

    this.x = this.x + 1;

    if (this.x % 2 == 1)
    {
      button8_.innerText = "X";
    }
    else
    {
      button8_.innerText = "0";
    }

    button8_.disabled = true;
  }

  fnClick9()
  {
    const button9_ = <HTMLButtonElement>document.getElementById("idButton9");

    this.x = this.x + 1;

    if (this.x % 2 == 1)
    {
      button9_.innerText = "X";
    }
    else
    {
      button9_.innerText = "0";
    }

    button9_.disabled = true;
  }

  fnCheckResult()
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
    const buttonStart_ = <HTMLInputElement>document.getElementById("idButtonStart");

    if (
      ((button1_.innerText == button2_.innerText) && (button2_.innerText == button3_.innerText)) && (
        button1_.innerText != "") ||
      ((button4_.innerText == button5_.innerText) && (button5_.innerText == button6_.innerText)) && (
        button4_.innerText != "") ||
      ((button7_.innerText == button8_.innerText) && (button8_.innerText == button9_.innerText)) && (
        button7_.innerText != "") ||
      ((button1_.innerText == button5_.innerText) && (button5_.innerText == button9_.innerText)) && (
        button1_.innerText != "") ||
      ((button3_.innerText == button5_.innerText) && (button5_.innerText == button7_.innerText)) && (
        button3_.innerText != "") ||
      ((button1_.innerText == button4_.innerText) && (button4_.innerText == button7_.innerText)) && (
        button1_.innerText != "") ||
      ((button2_.innerText == button5_.innerText) && (button5_.innerText == button8_.innerText)) && (
        button2_.innerText != "") ||
      ((button3_.innerText == button6_.innerText) && (button6_.innerText == button9_.innerText)) && (
        button3_.innerText != "")
    )
    {
      this.fnCheckWinner();

      clearInterval(this.intervalCheckResult);

      if ((button1_.innerText == "") || (button2_.innerText == "") || (button3_.innerText == "") ||
        (button4_.innerText == "") || (button5_.innerText == "") || (button6_.innerText == "") ||
        (button7_.innerText == "") || (button8_.innerText == "") || (button9_.innerText == ""))
      {
        button1_.disabled = true;
        button2_.disabled = true;
        button3_.disabled = true;
        button4_.disabled = true;
        button5_.disabled = true;
        button6_.disabled = true;
        button7_.disabled = true;
        button8_.disabled = true;
        button9_.disabled = true;
      }

      clearInterval(this.intervalTime);

      buttonStart_.disabled = true;
    }
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

    clearInterval(this.intervalTime);
    clearInterval(this.intervalCheckResult);

    this.valSeconds = "00";
    this.valMinutes = "00";
    this.x = 0;

    button1_.innerText = "";
    button2_.innerText = "";
    button3_.innerText = "";
    button4_.innerText = "";
    button5_.innerText = "";
    button6_.innerText = "";
    button7_.innerText = "";
    button8_.innerText = "";
    button9_.innerText = "";

    button1_.disabled = false;
    button2_.disabled = false;
    button3_.disabled = false;
    button4_.disabled = false;
    button5_.disabled = false;
    button6_.disabled = false;
    button7_.disabled = false;
    button8_.disabled = false;
    button9_.disabled = false;

    this.y = 0;
    this.intervalTime = setInterval(() =>
    {
      this.y = this.y + 1;

      if (this.y == 60)
      {
        this.y = 0;
        this.z = this.z + 1;

        if (this.z <= 9)
        {
          this.valMinutes = "0" + this.z.toString();
        }
        else
        {
          this.valMinutes = this.z.toString();
        }
      }

      if (this.y <= 9)
      {
        this.valSeconds = "0" + this.y.toString();
      }
      else
      {
        this.valSeconds = this.y.toString();
      }
    }, 1000);

    this.intervalCheckResult = setInterval(() =>
    {
      this.fnCheckResult();
    }, 100);
  }

  fnStartgame()
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
    const butonReset = <HTMLButtonElement>document.getElementById("idButtonReset");

    button1_.disabled = false;
    button2_.disabled = false;
    button3_.disabled = false;
    button4_.disabled = false;
    button5_.disabled = false;
    button6_.disabled = false;
    button7_.disabled = false;
    button8_.disabled = false;
    button9_.disabled = false;
    butonReset.disabled = false;

    this.intervalTime = setInterval(() =>
    {
      this.y = this.y + 1;

      if (this.y == 60)
      {
        this.y = 0;
        this.z = this.z + 1;

        if (this.z <= 9)
        {
          this.valMinutes = "0" + this.z.toString();
        }
        else
        {
          this.valMinutes = this.z.toString();
        }
      }

      if (this.y <= 9)
      {
        this.valSeconds = "0" + this.y.toString();
      }
      else
      {
        this.valSeconds = this.y.toString();
      }
    }, 1000);

    this.intervalCheckResult = setInterval(() =>
    {
      this.fnCheckResult();
    }, 100);
  }

  fnCheckWinner()
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

    if ((button1_.innerText == "X") && (button2_.innerText == "X") && (button3_.innerText == "X"))
    {
      this.resultX = this.resultX + 1;
      this.scoreX = this.resultX.toString();
    }

    if ((button1_.innerText == "0") && (button2_.innerText == "0") && (button3_.innerText == "0"))
    {
      this.result0 = this.result0 + 1;
      this.score0 = this.result0.toString();
    }

    if ((button4_.innerText == "X") && (button5_.innerText == "X") && (button6_.innerText == "X"))
    {
      this.resultX = this.resultX + 1;
      this.scoreX = this.resultX.toString();
    }

    if ((button4_.innerText == "0") && (button5_.innerText == "0") && (button6_.innerText == "0"))
    {
      this.result0 = this.result0 + 1;
      this.score0 = this.result0.toString();
    }

    if ((button7_.innerText == "X") && (button8_.innerText == "X") && (button9_.innerText == "X"))
    {
      this.resultX = this.resultX + 1;
      this.scoreX = this.resultX.toString();
    }

    if ((button7_.innerText == "0") && (button8_.innerText == "0") && (button9_.innerText == "0"))
    {
      this.result0 = this.result0 + 1;
      this.score0 = this.result0.toString();
    }

    if ((button1_.innerText == "X") && (button5_.innerText == "X") && (button9_.innerText == "X"))
    {
      this.resultX = this.resultX + 1;
      this.scoreX = this.resultX.toString();
    }

    if ((button1_.innerText == "0") && (button5_.innerText == "0") && (button9_.innerText == "0"))
    {
      this.result0 = this.result0 + 1;
      this.score0 = this.result0.toString();
    }

    if ((button3_.innerText == "X") && (button5_.innerText == "X") && (button7_.innerText == "X"))
    {
      this.resultX = this.resultX + 1;
      this.scoreX = this.resultX.toString();
    }

    if ((button3_.innerText == "0") && (button5_.innerText == "0") && (button7_.innerText == "0"))
    {
      this.result0 = this.result0 + 1;
      this.score0 = this.result0.toString();
    }

    if ((button1_.innerText == "X") && (button4_.innerText == "X") && (button7_.innerText == "X"))
    {
      this.resultX = this.resultX + 1;
      this.scoreX = this.resultX.toString();
    }

    if ((button1_.innerText == "0") && (button4_.innerText == "0") && (button7_.innerText == "0"))
    {
      this.result0 = this.result0 + 1;
      this.score0 = this.result0.toString();
    }

    if ((button2_.innerText == "X") && (button5_.innerText == "X") && (button8_.innerText == "X"))
    {
      this.resultX = this.resultX + 1;
      this.scoreX = this.resultX.toString();
    }

    if ((button2_.innerText == "0") && (button5_.innerText == "0") && (button8_.innerText == "0"))
    {
      this.result0 = this.result0 + 1;
      this.score0 = this.result0.toString();
    }

    if ((button3_.innerText == "X") && (button6_.innerText == "X") && (button9_.innerText == "X"))
    {
      this.resultX = this.resultX + 1;
      this.scoreX = this.resultX.toString();
    }

    if ((button3_.innerText == "0") && (button6_.innerText == "0") && (button9_.innerText == "0"))
    {
      this.result0 = this.result0 + 1;
      this.score0 = this.result0.toString();
    }

    button1_.disabled = true;
    button2_.disabled = true;
    button3_.disabled = true;
    button4_.disabled = true;
    button5_.disabled = true;
    button6_.disabled = true;
    button7_.disabled = true;
    button8_.disabled = true;
    button9_.disabled = true;
  }

  fnCheckFinalWinner()
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
    const buttonStart_ = <HTMLInputElement>document.getElementById("idButtonStart");
    const butonReset = <HTMLButtonElement>document.getElementById("idButtonReset");
    const alertWinner_ = <HTMLDivElement>document.getElementById("idAlertWinner");
    const spanMessage_ = <HTMLSpanElement>document.getElementById("idSpanMessage");

    if (this.result0 < this.resultX)
    {
      alertWinner_.style.display = "block";
      spanMessage_.innerText = "Congratulations X! You won this game!";
    }
    else
    {
      alertWinner_.style.display = "block";
      spanMessage_.innerText = "Congratulations 0! You won this game!";
    }

    if(this.result0 == this.resultX)
    {
      alertWinner_.style.display = "block";
      spanMessage_.innerText = "No one is winner yet! Keep playing!";
    }

    this.result0 = 0;
    this.resultX = 0;

    this.score0 = "0";
    this.scoreX = "0";

    button1_.innerText = "";
    button2_.innerText = "";
    button3_.innerText = "";
    button4_.innerText = "";
    button5_.innerText = "";
    button6_.innerText = "";
    button7_.innerText = "";
    button8_.innerText = "";
    button9_.innerText = "";
    button1_.disabled = true;
    button2_.disabled = true;
    button3_.disabled = true;
    button4_.disabled = true;
    button5_.disabled = true;
    button6_.disabled = true;
    button7_.disabled = true;
    button8_.disabled = true;
    button9_.disabled = true;
    buttonStart_.disabled = false;
    butonReset.disabled = true;

    clearInterval(this.intervalTime);
    clearInterval(this.intervalCheckResult);

    this.y = 0;
    this.z = 0;
    this.x = 0;

    this.valMinutes = "00";
    this.valSeconds = "00";
  }

  fnCloseMessage()
  {
    const alertWinner_ = <HTMLDivElement>document.getElementById("idAlertWinner");

    alertWinner_.style.display = "none";
  }
}
