import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Array<object> = [
    {
      author: "Bobby Tables",
      content: "It seems quite complicated, how much previous experience is required to enroll the course",
      date: new Date(2016, 6, 19, 19, 30)
    },
    {
      author: "Ironhack",
      content: "We give you a prework, that you have to do at home, that will help you face the course without problems",
      date: new Date(2016, 6, 19, 20, 35)
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
