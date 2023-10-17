# OnlineBookStore Deployment with Kubectl and Minikube
Pre-requisites : 
1. Install docker
2. Install kubectl
3. Install minikube

## Starting Minikube and see running nodes
> minikube start
> minikube status
> minikube service list
> kubectl get nodes
> minikube addons enable heapster; minikube addons enable ingress

## Building docker image
docker build -t online-book-store .

## Applying
kubectl apply -f app-deployment.yaml
kubectl apply -f app-service.yaml
kubectl apply -f app-ingress.yaml

## Troubleshoot if you got some errors
kubectl get pods

### Example Pods name
kubectl logs online-book-store-2-768cf6f99f-d4kgl
kubectl exec -it online-book-store-2-cb944c756-66zgp -- /bin/sh
kubectl get pods online-book-store-2-cb944c756-66zgp -o jsonpath='{.spec.containers[*].name}'

kubectl delete pods --all -n default
kubectl delete pods -l app=online-book-store
docker run -it --rm online-book-store /bin/sh
