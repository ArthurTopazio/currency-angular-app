import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {
  title = 'My Card Title'

  number = 42

  inputHandler(event: any) {
    console.log(event.target.value)
    const val = event.target.value
    this.title = val
  }

  changeTitle() {
    this.title = 'new title'
  }

  disabled = false

  currenc = null

  takeKurs() {
    fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
      .then(response => response.json())
      .then(commits => { alert(JSON.stringify(commits)); this.currenc = commits; console.log(this.currenc) });
  }

  ngOnInit() {
    setTimeout(() => {
      this.imgUrl = 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Twilight_%282008_film%29_poster.jpg/220px-Twilight_%282008_film%29_poster.jpg'
      this.disabled = true
    }, 3000)
  }

  imgUrl = 'http://www.calendarulmagic.ro/wp-content/uploads/2013/11/mickey.jpg'

  array = [1, 2, 5, 3, 8, 1]

  text = 'My sample text'

  obj = { name: 'Arthur', info: { age: 34, job: 'Front-end' } }

  getInfo() {
    return 'This is my info'
  }
} 