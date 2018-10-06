import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SentimentAnalyzerComponent } from './sentiment-analyzer/sentiment-analyzer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';
import { ClassificationPipe } from './classification.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SentimentAnalyzerComponent,
    ClassificationPipe
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
