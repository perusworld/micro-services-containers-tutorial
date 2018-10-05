package com.example.hellorest;

import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
@CrossOrigin
public class APIController {

	@Autowired
	private SentimentService sentimentService;

	@RequestMapping(path = "sentiment-analyze", method = RequestMethod.POST)
	@ResponseBody
	public SentimentResponse analyze(@NotNull @RequestBody String text) {
		return sentimentService.analyze(text).join();
	}
}
