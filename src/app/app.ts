import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({

  selector: 'app-root',
  standalone: true,
  
  imports: [RouterOutlet,MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  protected title = 'CrudOperationDemo';
}
