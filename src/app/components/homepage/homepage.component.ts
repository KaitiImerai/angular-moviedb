import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }

  results: any = {};
  SearchInputValue = '';

  addResults(newResults: Object) {
    this.results = newResults;
    console.log("Results Received by parent: ");
    console.log(this.results);
  }

  echoPage(page: any){
    console.log(page);
  }

  searchMovie(keyword: String, page=1) {

    console.log('Searching for: ' + keyword);
    this.http.get<any>('https://api.themoviedb.org/3/search/movie?query='+keyword+'&page='+page+'&api_key=85204a8cc33baf447559fb6d51b18313').subscribe(data => {
        this.results = data;
        console.log(this.results);
    })
  }

}
