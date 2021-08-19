import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {

  countdown: number = 0;

  startTime: number = 10;

  presentTime: number = this.startTime;

  constructor() {
  }

  ngOnInit(): void {
  }

  start() {
    this.stop();
    let t = this;
    this.countdown = setInterval(function () {
      t.presentTime--;
      if (t.presentTime == 0) {
        alert('Happy New Year!');
        t.reset();
      }
    }, 100)
  }

  stop() {
    clearInterval(this.countdown);
  }

  reset() {
    this.stop();
    this.presentTime = this.startTime;
  }
}
