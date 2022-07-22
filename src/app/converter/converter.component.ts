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

  usdRate = 0

  eurRate = 0

  imgUrl = 'https://currency-graphs.com/Images/Forex_Otzovik/610/270/1068088123-yaponskiy_svechi___udobnyy_instrument_valyutnogo_grafika.jpg'

  inputHandler1(event: any) {
    this.input1 = event.target.value
    let number = event.target.value
    let firstIndex = this.currency1 == 'UAH' ? this.uahIndex : this.currency1 == 'USD'
      ? this.usdIndex : this.eurIndex
    let secondIndex = this.currency2 == 'UAH' ? this.uahIndex : this.currency2 == 'USD'
      ? this.usdIndex : this.eurIndex
    this.input2 = +(number * secondIndex / firstIndex).toFixed(2)
  }

  selectHandler1(event: any) {
    this.currency1 = event.target.value
    let number = this.input1
    let firstIndex = this.currency1 == 'UAH' ? this.uahIndex : this.currency1 == 'USD'
      ? this.usdIndex : this.eurIndex
    let secondIndex = this.currency2 == 'UAH' ? this.uahIndex : this.currency2 == 'USD'
      ? this.usdIndex : this.eurIndex
    this.input2 = +(number * secondIndex / firstIndex).toFixed(2)
  }

  inputHandler2(event: any) {
    this.input2 = event.target.value
    let number = event.target.value
    let firstIndex = this.currency1 == 'UAH' ? this.uahIndex : this.currency1 == 'USD'
      ? this.usdIndex : this.eurIndex
    let secondIndex = this.currency2 == 'UAH' ? this.uahIndex : this.currency2 == 'USD'
      ? this.usdIndex : this.eurIndex
    this.input1 = +(number * firstIndex / secondIndex).toFixed(2)
  }

  selectHandler2(event: any) {
    this.currency2 = event.target.value
    let number = this.input2
    let firstIndex = this.currency1 == 'UAH' ? this.uahIndex : this.currency1 == 'USD'
      ? this.usdIndex : this.eurIndex
    let secondIndex = this.currency2 == 'UAH' ? this.uahIndex : this.currency2 == 'USD'
      ? this.usdIndex : this.eurIndex
    this.input1 = +(number * firstIndex / secondIndex).toFixed(2)
  }

  input1 = 0

  currency1 = 'UAH'

  input2 = 0

  currency2 = 'UAH'

  ngOnInit(): void {
    this.getCrossIndex()
  }

}
