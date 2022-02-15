import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router'
import { SearchInputComponent } from './components/search-input/search-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';


const appRoutes:Routes = [
{path: '', component: HomepageComponent},
{path: 'movie/:id', component: MovieDetailsComponent},


]
@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    HomepageComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

