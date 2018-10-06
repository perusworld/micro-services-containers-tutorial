import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Sentiment, SentimentResponse } from "../sentiment";
import { SentimentAnalyzerService } from "../sentiment-analyzer.service";

const sampleText = ['This is awesome', 'yeah whatever', 'I am not pleased', 'this might be ok'];

@Component({
  selector: 'app-sentiment-analyzer',
  templateUrl: './sentiment-analyzer.component.html',
  styleUrls: ['./sentiment-analyzer.component.scss']
})
export class SentimentAnalyzerComponent implements OnInit {

  sentiment: Sentiment = {
    text: ""
  };

  response: SentimentResponse = new SentimentResponse();

  constructor(private sentimentAnalyzer: SentimentAnalyzerService) { }

  ngOnInit() {
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : sampleText.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  analyze(sentiment: Sentiment): void {
    this.sentimentAnalyzer.analyze(sentiment).subscribe(resp => {
      this.response = resp;
    });
  }
}
