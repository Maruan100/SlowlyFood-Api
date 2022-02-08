# api-slowlyfood
SlowlyFood API REST


## Devops tools used

## Framewors/libraries used


- [Docker](https://hub.docker.com/_/node) && [Docker Compose](https://docs.docker.com/compose/install/) *Docker to containerize the apis (I use a node:14-alpine3.12 because is a very slim image) and Docker Compose to link the app with mongoDB*
- [Circle-CI](https://circleci.com/) *Easy tool for continuous integration and deploys, also have Orbs that provide easy interation with AWS*
- [Amazon ECR](https://aws.amazon.com/es/ecr/) *To store my docker container and the different tag versions*
- [Amazon ECS](https://aws.amazon.com/es/ecs/) *This tool create a cluster and deploy a instance of my container*
