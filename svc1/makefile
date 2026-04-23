tag:=v1.0.1
image:=svc1
repo:=nazmulcs42
username:=$$USER_NAME
password:=$$PASSWORD

build:
	@ echo "Building Docker image $(image):$(tag)"
	@ docker build -t $(image):$(tag) .

run:
	@ echo "Running container $(image) on port 8081"
	@ docker run --name $(image) -d -p 8081:3000 $(image):$(tag)

rm:
	@ echo "Stopping and removing container $(image)"
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
