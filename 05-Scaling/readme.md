# Scaling

 * Scale
 * Monitor
 * Logging
 * Update
 * Rollback

## Scale

### Node [http://localhost:8090](http://localhost:8090)
```bash
kubectl apply -f hello-node-v1.yaml
```

```bash
loadtest -c 10 -n 10000 http://localhost:8090
```

### Spring [http://localhost:8091](http://localhost:8091)
```bash
kubectl apply -f hello-spring-v1.yaml
```

```bash
loadtest -c 10 -n 10000 http://localhost:8091
```

## Update

### Node
```bash
cd hello-node-v2
```

#### Build Image
```bash
docker build -t hello-node:v2 .
cd ..
```

#### Update [http://localhost:8090](http://localhost:8090)
```bash
kubectl apply -f hello-node-v2.yaml --record
kubectl rollout status deployment hello-node

minikube service hello-node
curl http://localhost:8090
```

#### Rollback
```bash
kubectl rollout history deployment hello-node

kubectl rollout undo deployment hello-node --to-revision=1
kubectl rollout status deployment hello-node

kubectl rollout history deployment hello-node
```

#### Stop
```bash
kubectl delete -f hello-node-v2.yaml
```

### Spring Boot
```bash
cd hello-spring-v2
```

#### Build Image
```bash
mvn clean package
docker build -t hello-spring:v2 .
cd ..
```

#### Update [http://localhost:8091](http://localhost:8091)
```bash
kubectl apply -f hello-spring-v2.yaml --record
kubectl rollout status deployment hello-spring

minikube service hello-spring
curl http://localhost:8091
```

#### Rollback
```bash
kubectl rollout history deployment hello-spring

kubectl rollout undo deployment hello-spring --to-revision=1
kubectl rollout status deployment hello-spring

kubectl rollout history deployment hello-spring
```

#### Stop
```bash
kubectl delete -f hello-spring-v2.yaml
```

## Monitor
--TBA--

## Logging
--TBA--

