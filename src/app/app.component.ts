import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  title = 'Abush';
  url = "assets/js/custom.min.js";
  loadAPI: any;

  routerSubscription: Subscription;
  constructor(private router: Router){}
  ngOnInit(){
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loadAPI = new Promise(() =>  this.loadScript());
      }
      window.scrollTo(0, 0);
  });
  }
  ngOnDestroy(){
    this.routerSubscription.unsubscribe();
  }

  public loadScript() {
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
}
}
