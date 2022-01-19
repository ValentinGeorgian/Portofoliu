import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-component',
  templateUrl: './timer-component.component.html',
  styleUrls: ['./timer-component.component.css',
    '../appStyle.css']
})
export class TimerComponentComponent implements OnInit
{

  spanSeconds: string = "00";
  spanMinutes: string = "00";
  spanHours: string = "00";
  valueProgress: string = "";
  varInterval: any = "";

  constructor() { }

  ngOnInit(): void
  {
  }

  fnPlay()
  {
    const progress_ = <HTMLDivElement>document.getElementById("idProgress");
    let x: number = 0;
    let y: number = 0;
    let z: number = 0;
    let nrProgress: number = 0;

    if ((this.spanSeconds == "00") && (this.spanMinutes == "00") && (this.spanHours == "00"))
    {
      this.varInterval = setInterval(() =>
      {
        if (this.spanSeconds != "")
        {
          x = parseInt(this.spanSeconds) + 1;
          this.spanSeconds = x.toString();
          nrProgress = nrProgress + 1.66;
          progress_.style.width = nrProgress + "%";
        }
        else
        {
          x = x + 1;
          this.spanSeconds = x.toString();
          nrProgress = nrProgress + 1.66;
          progress_.style.width = nrProgress + "%";
        }

        if (x <= 9)
        {
          this.spanSeconds = "0" + x.toString();
        }
        else
        {
          this.spanSeconds = x.toString();
        }

        if (x == 60)
        {
          x = 0;
          this.spanSeconds = "0" + x.toString();
          nrProgress = 0;
          progress_.style.width = nrProgress + "%";

          if (this.spanMinutes != "")
          {
            y = parseInt(this.spanMinutes) + 1;
            this.spanMinutes = y.toString();
          }
          else
          {
            y = y + 1;
            this.spanMinutes = y.toString();
          }

          if (y <= 9)
          {
            this.spanMinutes = "0" + y.toString();
          }
          else
          {
            this.spanMinutes = y.toString();
          }
        }

        if (y == 60)
        {
          y = 0;
          this.spanMinutes = "0" + y.toString();

          if (this.spanHours != "")
          {
            z = parseInt(this.spanHours) + 1;
            this.spanHours = z.toString();
          }
          else
          {
            z = z + 1;
            this.spanHours = z.toString();
          }

          if (z <= 9)
          {
            this.spanHours = "0" + z.toString();
          }
          else
          {
            this.spanHours = z.toString();
          }
        }

        if ((this.spanSeconds == "59") && (this.spanMinutes == "59") && (this.spanHours == "23"))
        {
          this.spanSeconds = "00";
          this.spanMinutes = "00";
          this.spanHours = "00";
        }
      }, 1000);
    }
  }

  fnStop()
  {
    const progress_ = <HTMLDivElement>document.getElementById("idProgress");
    clearInterval(this.varInterval);

    this.spanSeconds = "00";
    this.spanMinutes = "00";
    this.spanHours = "00";

    progress_.style.width = 0 + "%";
  }

  fnPause()
  {
    const buttonPause_ = <HTMLButtonElement>document.getElementById("idButtonPause");

    if ((this.spanSeconds != "00") || (this.spanMinutes != "00") || (this.spanHours != "00"))
    {
      if (buttonPause_.className == "fa fa-pause fa-lg")
      {
        clearInterval(this.varInterval);
        buttonPause_.className = "fa fa-play-circle fa-lg";
      }
      else
      {
        this.fnResume();
        buttonPause_.className = "fa fa-pause fa-lg";
      }
    }
  }

  fnResume()
  {
    const progress_ = <HTMLDivElement>document.getElementById("idProgress");
    let x: number = 0;
    let y: number = 0;
    let z: number = 0;
    let nrProgress: number = 0;

    this.varInterval = setInterval(() =>
    {
      if (this.spanSeconds != "")
      {
        x = parseInt(this.spanSeconds) + 1;
        this.spanSeconds = x.toString();
        nrProgress = parseFloat(progress_.style.width) + 1.66;
        progress_.style.width = nrProgress + "%";
      }
      else
      {
        x = x + 1;
        this.spanSeconds = x.toString();
      }

      if (x <= 9)
      {
        this.spanSeconds = "0" + x.toString();
      }
      else
      {
        this.spanSeconds = x.toString();
      }

      if (x == 60)
      {
        x = 0;
        this.spanSeconds = "0" + x.toString();
        nrProgress = 0;
        progress_.style.width = nrProgress + "%";

        if (this.spanMinutes != "")
        {
          y = parseInt(this.spanMinutes) + 1;
          this.spanMinutes = y.toString();
        }
        else
        {
          y = y + 1;
          this.spanMinutes = y.toString();
        }

        if (y <= 9)
        {
          this.spanMinutes = "0" + y.toString();
        }
        else
        {
          this.spanMinutes = y.toString();
        }
      }

      if (y == 60)
      {
        y = 0;
        this.spanMinutes = "0" + y.toString();

        if (this.spanHours != "")
        {
          z = parseInt(this.spanHours) + 1;
          this.spanHours = z.toString();
        }
        else
        {
          z = z + 1;
          this.spanHours = z.toString();
        }

        if (z <= 9)
        {
          this.spanHours = "0" + z.toString();
        }
        else
        {
          this.spanHours = z.toString();
        }
      }

      if ((this.spanSeconds == "59") && (this.spanMinutes == "59") && (this.spanHours == "23"))
      {
        this.spanSeconds = "00";
        this.spanMinutes = "00";
        this.spanHours = "00";
      }
    }, 1000);
  }
}
