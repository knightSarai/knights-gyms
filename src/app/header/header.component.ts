import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() pageSelected = new EventEmitter<{pageName: string}>();

  selectPage(pageName: string) {
    this.pageSelected.emit({pageName});
  }

  ngOnInit(): void {
  }

}
