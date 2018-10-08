# Micro Services

## Python Back End

### Local Run

* Setup
    ```bash
    cd hello-backend
    pip install -r requirements.txt
    python -m textblob.download_corpora
    ```
* Run
    ```bash
    python server.py
 
    curl -XPOST -H "Content-Type: application/json" -d "This is awesome" http://localhost:8080/api/textblob
    curl -XPOST -H "Content-Type: application/json" -d "yeah whatever" http://localhost:8080/api/textblob
    curl -XPOST -H "Content-Type: application/json" -d "I am not pleased" http://localhost:8080/api/textblob
    ```
### Docker Run

* Build Image
    ```bash
    docker build -t hello-backend:v1 .
    ```
* Launch Image [http://localhost:8092/api/ping](http://localhost:8092/api/ping)
    ```bash
    docker run --rm --name hello-backend -p 8092:8080 -d hello-backend:v1
    curl http://localhost:8092/api/ping
    ```
* Test API
    ```bash
    curl -XPOST -H "Content-Type: application/json" -d "This is awesome" http://localhost:8092/api/textblob
    curl -XPOST -H "Content-Type: application/json" -d "yeah whatever" http://localhost:8092/api/textblob
    curl -XPOST -H "Content-Type: application/json" -d "I am not pleased" http://localhost:8092/api/textblob
    ```
* Stop Image
    ```bash
    docker stop hello-backend
    ```

## Java Rest

### Local Run

* Setup
    ```bash
    cd hello-rest
    mvn clean package -DskipTests=true
    ```
* Run
    ```bash
    mvn -DSENTIMENT_API_URL=http://localhost:8092 spring-boot:run
 
    curl -XPOST -H "Content-Type: application/json" -d "This is awesome" http://localhost:8080/api/sentiment-analyze
    curl -XPOST -H "Content-Type: application/json" -d "yeah whatever" http://localhost:8080/api/sentiment-analyze
    curl -XPOST -H "Content-Type: application/json" -d "I am not pleased" http://localhost:8080/api/sentiment-analyze
    ```
### Docker Run

* Build Image
    ```bash
    docker build -t hello-rest:v1 .
    ```
* Launch Image [http://localhost:8091/actuator/health](http://localhost:8091/actuator/health)
    ```bash
    docker run --rm --name hello-rest -p 8091:8080 --link hello-backend -d hello-rest:v1
    curl http://localhost:8091/actuator/health
    ```
* Test API
    ```bash
    curl -XPOST -H "Content-Type: application/json" -d "This is awesome" http://localhost:8091/api/sentiment-analyze
    curl -XPOST -H "Content-Type: application/json" -d "yeah whatever" http://localhost:8091/api/sentiment-analyze
    curl -XPOST -H "Content-Type: application/json" -d "I am not pleased" http://localhost:8091/api/sentiment-analyze
    ```
* Stop Image
    ```bash
    docker stop hello-rest
    ```

## Angular Front End

### Local Run

* Setup
    ```bash
    cd hello-frontend
    npm install
    ```
* Run [http://localhost:4200](http://localhost:4200)
    ```bash
    npm start
    ```
### Docker Run

* Build Image
    ```bash
    npm run build
    docker build -t hello-frontend:v1 .
    ```
* Launch Image [http://localhost:8090](http://localhost:8090)
    ```bash
    docker run --rm --name hello-frontend -p 8090:80 -d hello-frontend:v1
    ```
* Stop Image
    ```bash
    docker stop hello-frontend
    ```

## Orchestration

### Docker Compose
* Build
    ```bash
    docker-compose -f docker-compose.yml build
    ```
* Launch [http://localhost:8090](http://localhost:8090)
    ```bash
    docker-compose -f docker-compose.yml up -d
    ```
* Stop
    ```bash
    docker-compose -f docker-compose.yml stop
    ```

### Kubernetes
* Launch [http://localhost:8090](http://localhost:8090)
    ```bash
    kubectl apply -f hello-world.yaml
    ```
* Stop
    ```bash
    kubectl delete -f hello-world.yaml
    ```

