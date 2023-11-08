# OnlineBookStore and Google Cloud DB Deployment with Kubectl and Minikube
Pre-requisites : 
1. Deploy Google Cloud SQL Server
2. Create database and insert data (can check sql_script.sql file)
3. Whitelist your local public ip address
4. Install docker
5. Install kubectl
6. Install minikube

## Starting Minikube and see running nodes
```
minikube start 
minikube status 
minikube service list 
kubectl get nodes 
eval $(minikube docker-env) # For change environment of docker on minikube 
minikube addons enable heapster; minikube addons enable ingress 
```

## Building docker image
```
docker build -t online-book-store . 
```

## Deployment
```
kubectl apply -f app-deployment.yaml 
kubectl apply -f app-service.yaml 
kubectl apply -f app-ingress.yaml 
kubectl port-forward service/online-book-store-service 3000:3000 # to make accessible from your browser 
```

## Troubleshooting if you got some errors
```
kubectl get pods 
kubectl logs online-book-store-2-768cf6f99f-d4kgl 
kubectl exec -it online-book-store-2-cb944c756-66zgp -- /bin/sh 
kubectl get pods online-book-store-2-cb944c756-66zgp -o jsonpath='{.spec.containers[*].name}' 
kubectl delete pods --all -n default 
kubectl delete pods -l app=online-book-store 
docker run -it --rm online-book-store /bin/sh 
```

### Images
Setting Up Google Cloud SQL 
<img src="image/google_cloud_db.jpg"> 
  Login Page 
<img src="image/login_page.jpg"> 
  Main Page
<img src="image/main_page.jpg">
  Main Page for Search Button 
<img src="image/main_page2.jpg"> 
