import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {
  title = 'My Card Title'

  number = 42

  ngOnInit() {


  }

  imgUrl = 'http://www.calendarulmagic.ro/wp-content/uploads/2013/11/mickey.jpg'

  array = [1, 2, 5, 3, 8, 1]

  text = 'My sample text'

  obj = { name: 'Arthur', info: { age: 34, job: 'Front-end' } }

  getInfo() {
    return 'This is my info'
  }
} 