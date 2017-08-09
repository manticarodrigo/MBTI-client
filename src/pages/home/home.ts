import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MbtiProvider } from '../../providers/mbti/mbti';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  step = 1;

  responseMap: any;

  eCount = 0;
  iCount = 0;
  sCount = 0;
  nCount = 0;
  tCount = 0;
  fCount = 0;
  jCount = 0;
  pCount = 0;

  constructor(public navCtrl: NavController,
              public mbtiProvider: MbtiProvider) {
    this.responseMap = this.mbtiProvider.responseMap;

  }

  resetQuiz() {
    this.step = 1;
    this.iCount = 0;
    this.eCount = 0;
    this.sCount = 0;
    this.nCount = 0;
    this.tCount = 0;
    this.fCount = 0;
    this.jCount = 0;
    this.pCount = 0;
  }

  buttonPressed(i) {
    console.log("button " + i + "pressed")
    if (this.step < 70) {
      this.step++
    } else {
      var results = "";
      if (this.iCount > this.eCount) {
        results += "I";
      } else {
        results += "E";
      }
      if (this.sCount > this.nCount) {
        results += "S";
      } else {
        results += "N";
      }
      if (this.tCount > this.fCount) {
        results += "T";
      } else {
        results += "F";
      }
      if (this.jCount > this.pCount) {
        results += "J";
      } else {
        results += "P";
      }
      console.log("quiz finished, you are " + results);
    }
    var letter = '';

    if (i == 1) {
      letter = this.mbtiProvider.responseMap[this.step].r1type;
    }
    
    if (i == 2) {
      letter = this.mbtiProvider.responseMap[this.step].r2type;
    }
    
    if (letter == "i") {
        this.iCount++;
    }
    if (letter == "e") {
        this.eCount++;
    }
    if (letter == "s") {
        this.sCount++;
    }
    if (letter == "n") {
        this.nCount++;
    }
    if (letter == "t") {
        this.tCount++;
    }
    if (letter == "f") {
        this.fCount++;
    }
    if (letter == "j") {
        this.jCount++;
    }
    if (letter == "p") {
        this.pCount++;
    }
  }
};