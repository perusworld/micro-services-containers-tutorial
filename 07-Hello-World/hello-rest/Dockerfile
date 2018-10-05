FROM openjdk:jre
VOLUME /tmp
ENV SENTIMENT_API_URL http://hello-backend:8080
ADD target/hello-rest-*.jar app.jar
RUN sh -c 'touch /app.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]