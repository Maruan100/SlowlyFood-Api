# api-slowlyfood
SlowlyFood API REST


## Memoria del proyecto:

- Mi proyecto es una una API la cual sirve informacion de articulos de uno de mis proyecto front-end llamado [Slowlyfood](https://github.com/Maruan100/SlowlyFood)
- He decidido usar Docker para contenizar mi aplicación y Docker Compose para poder usar en congunto mi api y la base de datos, en este caso he utilizado mongoDB por ser una base de datos sencilla y con la que tengo más experiencia.
- Para el CI/CD he decico usar Circle-CI esta herramienta me permite hacer los siguentes workflows:
  1. Correr los test de la api
  2. Subir mi contenedor a [Amazon ECR](https://aws.amazon.com/es/ecr/)
  3. Hacer un buid de la aplicacion con las utimos cambios y remplazar la instancia antigua por una nueva usando el orquestador [Amazon ECS](https://aws.amazon.com/es/ecs/)

- Para el Monitoring simplemente uso la herramienta que me prove AWS de [Amazon CloudWatch](https://aws.amazon.com/es/cloudwatch/) para monitorizar mis instancias de manera simple.


## Tools used:
- [Docker](https://hub.docker.com/_/node) && [Docker Compose](https://docs.docker.com/compose/install/) *Docker to containerize the apis (I use a node:14-alpine3.12 because is a very slim image) and Docker Compose to link the app with mongoDB*
- [Circle-CI](https://circleci.com/) *Easy tool for continuous integration and deploys, also have Orbs that provide easy interation with AWS*
- [Amazon ECR](https://aws.amazon.com/es/ecr/) *To store my docker container and the different tag versions*
- [Amazon ECS](https://aws.amazon.com/es/ecs/) *This tool create a cluster and deploy a instance of my container*
- [Amazon CloudWatch](https://aws.amazon.com/es/cloudwatch/) *Because my instance is deployed in AWS I used Amazon CloudWatch for monitoring the app*
