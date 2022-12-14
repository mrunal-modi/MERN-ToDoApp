#!/bin/bash

### Ingress

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.1/deploy/static/provider/baremetal/deploy.yaml


### Create

kubectl create -f database-pv.yaml
kubectl create -f database-pvc.yaml
kubectl create -f database-deployment.yaml
kubectl create -f database-service.yaml

kubectl create -f backend-env-configmap.yaml
kubectl create -f backend-deployment.yaml
kubectl create -f backend-service.yaml

kubectl create -f frontend-deployment.yaml
kubectl create -f frontend-service.yaml

### Apply

kubectl apply -f database-pv.yaml
kubectl apply -f database-pvc.yaml
kubectl apply -f database-deployment.yaml
kubectl apply -f database-service.yaml

kubectl apply -f backend-env-configmap.yaml
kubectl apply -f backend-deployment.yaml
kubectl apply -f backend-service.yaml

kubectl apply -f frontend-deployment.yaml
kubectl apply -f frontend-service.yaml

