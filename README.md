# Getting Started

### Server 
>Clone the server authentication repo
`git clone git@github.com:meghna-saxena/Server-Setup-Authentication.git`
>`cd Server-Setup-Authentication`

>Install node modules
>`yarn install`
>Run the API server, port: 3090
`npm run dev`

>Run mongo at the same time as well. Start mongoDB
>`sudo service mongod start`
>Verify mongoDB has started successfully
`nc -vz -w3 localhost 27017`
>Run mongo client
 `Mongo`

### Client
>Install node modules
>`yarn install`
>Start the server at localhost:8080
`yarn start`
