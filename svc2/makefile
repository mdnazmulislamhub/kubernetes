tag:=v1.0.1
image:=svc2
repo:=nazmulcs42
username:=$$USER_NAME
password:=$$PASSWORD
build:
	@ docker buildx build -t $(image):$(tag) .
run:
	@ docker run --name $(image) -d -p 8082:3000 $(image):$(tag)
rm:
	@ docker stop $(image)
	@ docker rm -f $(image)
login:
	@ echo "Logging in to Docker registry with username $(username)"
	@ docker login -u $(username) -p $(password)

push: login
	@ echo "Pushing image $(image):$(tag) to repository $(repo)"
	@ docker tag $(image):$(tag) $(repo)/$(image):$(tag)
	@ docker push $(repo)/$(image):$(tag)


# push:
# 	docker push $(image):$(tag)
# deploy:
# 	kubectl apply -f deployment.yaml
# clean:	kubectl delete -f deployment.yaml
# .PHONY: build push deploy clean
