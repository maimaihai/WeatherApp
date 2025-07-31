import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-start-page',
  imports: [MatIconModule, RouterLink],
  templateUrl: './start-page.html',
  styleUrl: './start-page.css'
})
export class StartPage {

}
