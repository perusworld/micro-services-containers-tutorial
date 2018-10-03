# Hello World - Containers

## Setup Docker
[Platform specific instructions](https://docs.docker.com/install/#supported-platforms)

## Node
```bash
cd hello-node
```

### Build Image
```bash
docker build -t hello-node:v1 .
```

### Launch Image [http://localhost:8090](http://localhost:8090)
```bash
docker run --rm --name hello-node -p 8090:8080 -d hello-node:v1
curl http://localhost:8090
```

### Stop Image
```bash
docker stop hello-node
```

## Spring Boot
```bash
cd hello-spring
```

### Build Image
```bash
mvn clean package
docker build -t hello-spring:v1 .
```

### Launch Image [http://localhost:8091](http://localhost:8091)
```bash
docker run --rm --name hello-spring -p 8091:8080 -d hello-spring:v1
curl http://localhost:8091
```

### Stop Image
```bash
docker stop hello-spring
```
