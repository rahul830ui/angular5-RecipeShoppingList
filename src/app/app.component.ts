import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDhNWX2WfZhWK_mnl-BRJztMoKpFXCGHPA",
      authDomain: "angular5-recipe.firebaseapp.com"
    });
  }

  onNavigate(feature) {
    this.loadedFeature = feature;
  }

}
