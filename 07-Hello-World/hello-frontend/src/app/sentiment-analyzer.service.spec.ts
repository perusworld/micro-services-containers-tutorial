import { TestBed } from '@angular/core/testing';

import { SentimentAnalyzerService } from './sentiment-analyzer.service';

describe('SentimentAnalyzerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SentimentAnalyzerService = TestBed.get(SentimentAnalyzerService);
    expect(service).toBeTruthy();
  });
});
