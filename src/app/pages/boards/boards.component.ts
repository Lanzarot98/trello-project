import { Component, OnInit } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faBox, faWaveSquare, faClock, faAngleUp, faAngleDown, faHeart, faBorderAll, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent implements OnInit {

  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faCog = faCog;

  items = [
    {
      label: 'Item 1',
      items : [
        {
          label: 'sub Item 1.1'
        },
        {
          label: 'sub Item 1.2'
        },
      ]
    },
    {
      label: 'Item 2',
      items : [
        {
          label: 'sub Item 2.1'
        },
      ]
    },
    {
      label: 'Item 3',
      items : [
        {
          label: 'sub Item 3.1'
        },
        {
          label: 'sub Item 3.2'
        },
        {
          label: 'sub Item 3.3'
        },
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
