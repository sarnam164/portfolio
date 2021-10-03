import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showmenu:boolean = false;
  dark:boolean = false;

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }

  showthemenu(){
    this.showmenu = true;
  }

  hidethemenu(){
    this.showmenu = false;
  }

  goLight(){
    this.dark = false;
    this.renderer.removeClass(document.body,"dark-theme")
  }

  goDark(){
    this.dark = true;
    this.renderer.addClass(document.body,"dark-theme")
  }

}
