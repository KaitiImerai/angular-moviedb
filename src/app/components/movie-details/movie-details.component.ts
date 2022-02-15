import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  id: number;
  private sub: any;
  movie: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number


      console.log('Searching for: ' + this.id);
        this.http.get<any>('https://api.themoviedb.org/3/movie/'+this.id+'?api_key=85204a8cc33baf447559fb6d51b18313').subscribe(data => {
            this.movie = data;
            console.log(this.movie);
        })
      
   });

 

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }



}
