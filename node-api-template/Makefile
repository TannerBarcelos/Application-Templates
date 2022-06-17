build-node-image:
	docker build -t backend -f Dockerfile.dev .
run-node-container:
	docker run --rm --name api-server -p 5151:5151 -v /app/node_modules -v $(shell pwd):/app --env-file .env backend
stop-node-contaner:
	docker stop api-server

compose-up-build:
	docker-compose -f docker-compose-dev.yml up --build
compose-up-dev:
	docker-compose -f docker-compose-dev.yml up
compose-down-dev:
	docker-compose -f docker-compose-dev.yml down