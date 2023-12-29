import { Component, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
  article: Article;

 constructor(){
  this.article = new Article(
    'Angular',
    'http://angular.io',
    10);
 }


 voteUp(): boolean{
  console.log("Votes Up");
  this.article.voteUp(); return false;
 }

 voteDown(){
  console.log("Votes Down");
  this.article.voteDown(); return false;
 }

  ngOnInit(){

  }

}
