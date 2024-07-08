import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PaginaModule } from './pagina/pagina.module';
import { producto } from './interfaces/apiData';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaginaModule, HttpClientModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'examen2';
}
