## PERN Stack Backend Template

##### Running the server

1. Ensure you create a .env file and add the following

```bash
PORT = 5151
NODE_ENV = development
VERSION = v1
```

2. Using Docker Compose, leveraging Make commands, we will start up the services and have them intercommunicate

```bash
Make up-dev
# or
docker-compose up
```
