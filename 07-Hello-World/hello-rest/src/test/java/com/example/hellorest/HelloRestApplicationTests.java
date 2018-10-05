package com.example.hellorest;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class HelloRestApplicationTests {

	@Autowired
	private SentimentService sentimentService;

	@Test
	public void contextLoads() {
	}

	@Test
	public void checkSentimentService() throws Exception {
		assertEquals("pos", sentimentService.analyze("This is awesome").get().getClassification());
	}

}
