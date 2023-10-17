# OnlineBookStore Deployment with Kubectl and Minikube
Pre-requisites : 
1. Install docker
2. Install kubectl
3. Install minikube

## Starting Minikube and see running nodes
> minikube start <br>
> minikube status <br>
> minikube service list <br>
> kubectl get nodes <br>
> minikube addons enable heapster; minikube addons enable ingress <br>

## Building docker image
> docker build -t online-book-store . <br>

## Applying
> kubectl apply -f app-deployment.yaml <br>
> kubectl apply -f app-service.yaml <br>
> kubectl apply -f app-ingress.yaml <br>

## Troubleshooting if you got some errors
> kubectl get pods <br>
> kubectl logs online-book-store-2-768cf6f99f-d4kgl <br>
> kubectl exec -it online-book-store-2-cb944c756-66zgp -- /bin/sh <br>
> kubectl get pods online-book-store-2-cb944c756-66zgp -o jsonpath='{.spec.containers[*].name}' <br>
> kubectl delete pods --all -n default <br>
> kubectl delete pods -l app=online-book-store <br>
> docker run -it --rm online-book-store /bin/sh <br>
