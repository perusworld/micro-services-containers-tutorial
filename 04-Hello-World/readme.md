# Hello World - Kubernetes

## Setup Kubernetes
[Local-machine Solutions](https://kubernetes.io/docs/setup/pick-right-solution/#local-machine-solutions)

[Kubernetes on Docker for Windows](https://docs.docker.com/docker-for-windows/#kubernetes)

[Kubernetes on Docker for Mac](https://docs.docker.com/docker-for-mac/#kubernetes)

### [Dashboard UI](http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/)
```bash
kubectl create -f https://raw.githubusercontent.com/kubernetes/dashboard/master/src/deploy/recommended/kubernetes-dashboard.yaml
kubectl proxy
```
## Node

### Launch Image [http://localhost:8090](http://localhost:8090)
```bash
kubectl run hello-node-v1 -l "tag=hello-node-v1" --image=hello-node:v1 --port=8080 --image-pull-policy=Never
kubectl expose deployments hello-node-v1 --port 8090 --target-port=8080 --type LoadBalancer -l "tag=hello-node-v1"
curl http://localhost:8090
```

### Stop Image
```bash
kubectl delete pod,service,deployment -l "tag=hello-node-v1"
```

### Launch Image [http://localhost:8091](http://localhost:8091)

### Launch Image
```bash
kubectl run hello-spring-v1 -l "tag=hello-spring-v1" --image=hello-spring:v1 --port=8080 --image-pull-policy=Never
kubectl expose deployments hello-spring-v1 --port 8091 --target-port=8080 --type LoadBalancer -l "tag=hello-spring-v1"
curl http://localhost:8091
```

### Stop Image
```bash
kubectl delete pod,service,deployment -l "tag=hello-spring-v1"
```

