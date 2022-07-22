import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  getCrossIndex() {
    fetch('https://v6.exchangerate-api.com/v6/f63bbf96b4bb455955e68f52/latest/USD')
      .then(response => response.json())
      .then(commits => {
        this.usdIndex = commits['conversion_rates']['USD']
        this.eurIndex = commits['conversion_rates']['EUR']
        this.uahIndex = commits['conversion_rates']['UAH']
        this.usdRate = +(this.uahIndex / this.usdIndex).toFixed(2)
        this.eurRate = +(this.uahIndex / (this.usdIndex * this.eurIndex)).toFixed(2)
      });
  }

  usdIndex = 0

  eurIndex = 0

  uahIndex = 0

  methods = {
    "USD": {
      index: this.usdIndex,
      result: 'this.convertFunc',
    },
    "UAH": {
      index: this.uahIndex / this.usdIndex,
      result: 'this.convertFunc',
    },
    "EUR": {
      index: this.eurIndex / this.usdIndex,
      result: 'ddscv'
    },
  }

  // convertFunc = (metric1: any, val: any, metric2: any): any => (val * metr1 / metr2).toFixed(2)
  usdRate = 0
  eurRate = 0
  imgUrl = 'https://d2v9ipibika81v.cloudfront.net/uploads/sites/67/20220113bemb1140x440.jpg'

  inputHandler1(event: any) {
    console.log(event.target.value)
    const val = event.target.value
  }

  inputHandler2(event: any) {
    console.log(event.target.value)
    const val = event.target.value
  }

  ngOnInit(): void {
    //  this.getCrossIndex()
  }

}
