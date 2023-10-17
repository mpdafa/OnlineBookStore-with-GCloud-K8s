minikube start
minikube status
minikube service list
kubectl get nodes
minikube addons enable heapster; minikube addons enable ingress
docker build -t online-book-store .
docker build --no-cache -t online-book-store .

kubectl apply -f app-deployment.yaml
kubectl apply -f app-service.yaml
kubectl apply -f app-ingress.yaml

kubectl get pods
kubectl logs <pods name>
kubectl logs online-book-store-2-768cf6f99f-d4kgl
kubectl exec -it online-book-store-2-cb944c756-66zgp -- /bin/sh
kubectl get pods online-book-store-2-cb944c756-66zgp -o jsonpath='{.spec.containers[*].name}'

kubectl delete pods --all -n default
kubectl delete pods -l app=online-book-store

docker rmi online-book-store

docker run -it --rm online-book-store /bin/sh
