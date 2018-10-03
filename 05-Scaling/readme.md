# Scaling

 * Scale
 * Update
 * Monitor
 * Rollback

## Scale

### Node [http://localhost:8090](http://localhost:8090)
```bash
kubectl apply -f hello-node-v1.yaml
```

```bash
kubectl delete -f hello-node-v1.yaml
```

### Spring [http://localhost:8091](http://localhost:8091)
```bash
kubectl apply -f hello-spring-v1.yaml
```

```bash
kubectl delete -f hello-spring-v1.yaml
```