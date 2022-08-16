### COMANDOS ÚTEIS ###
> npm install


# BUILD IMAGE

docker build -f ./Dockerfile-dev -t angular-app .

# DEVELOPER

Executando tudo junto:
1 - docker-compose -f docker-compose-dev.yml up --build

Buildando imagem : 
1 - docker build -f ./Dockerfile-dev .   
2 - docker-compose -f docker-compose-dev.yml up 

# PRODUCTION

Executando tudo junto:
1 - docker-compose -f docker-compose.yml up --build

Buildando imagem : 
1 - docker build -f ./Dockerfile .   
2 - docker-compose -f docker-compose.yml up 

# DEMO

[Link](https://servidor-mourateste.herokuapp.com/)