package com.example.hellorest;

import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class SentimentService {

	@Value("${com.example.hello-rest.sentiment.apiURL}")
	private String apiURL;

	@Autowired
	private RestTemplate restTemplate;

	public CompletableFuture<SentimentResponse> analyze(String text) {
		return CompletableFuture.supplyAsync(() -> {
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_JSON);
			HttpEntity<String> request = new HttpEntity<>(text, headers);
			return restTemplate.postForObject(apiURL, request, SentimentResponse.class);
		});
	}

}
