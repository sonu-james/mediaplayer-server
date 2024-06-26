//1)import json server library
const jsonserver =require('json-server')
//2)create path for db.json file using router method for storing data

const router =jsonserver.router('db.json')

//3)Crete middle ware to convert json to js-defaults()
const middleware =jsonserver.defaults()

//4)create a json server
const mediaPlayerServer =jsonserver.create()
//5)server should use middleware and router
//position important anu first middleware paranju kodukkanam
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//6)set port for server
 const PORT=3000 ||process.env.PORT

 //7)run server
 mediaPlayerServer. listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT} `);
 })
