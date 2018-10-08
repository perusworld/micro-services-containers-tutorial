# Hello World - Kubernetes

## Setup Kubernetes
[Local-machine Solutions](https://kubernetes.io/docs/setup/pick-right-solution/#local-machine-solutions)

[Kubernetes on Docker for Windows](https://docs.docker.com/docker-for-windows/#kubernetes)

[Kubernetes on Docker for Mac](https://docs.docker.com/docker-for-mac/#kubernetes)

### minikube docker env - mac
```bash
eval $(minikube docker-env)
```

### minikube docker env - windows
```bash
minikube docker-env | Invoke-Expression
```

### [Dashboard UI](http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/)
```bash
kubectl proxy

minikube dashboard
```
## Node

### Launch Image [http://localhost:8090](http://localhost:8090)
```bash
kubectl run hello-node -l "tag=hello-node" --image=hello-node:v1 --port=8080 --image-pull-policy=Never
kubectl expose deployments hello-node --port 8090 --target-port=8080 --type LoadBalancer -l "tag=hello-node"
kubectl get services

minikube service hello-node
curl http://localhost:8090
```

### Stop Image
```bash
kubectl delete pod,service,deployment -l "tag=hello-node"
```

### Launch Image [http://localhost:8091](http://localhost:8091)

### Launch Image
```bash
kubectl run hello-spring -l "tag=hello-spring" --image=hello-spring:v1 --port=8080 --image-pull-policy=Never
kubectl expose deployments hello-spring --port 8091 --target-port=8080 --type LoadBalancer -l "tag=hello-spring"
kubectl get services

minikube service hello-spring
curl http://localhost:8091
```

### Stop Image
```bash
kubectl delete pod,service,deployment -l "tag=hello-spring"
```

