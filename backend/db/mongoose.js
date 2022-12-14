
const mongoose = require('mongoose');

const dbURL = "mongodb://127.0.0.1:27017/final-project-test";

module.exports = function(app){

  //Connect  mongoose.
  mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }).catch(e => {
    console.log('An error occured with the mongoose connection: ',e.message) 
  })


  mongoose.connection.once('open', function(){
    console.log("Mongoose default connection is open to ", dbURL)
    app.emit('ready'); 
  })

  mongoose.connection.on('disconnected', function(){
      console.log("Mongoose connection is disconnected");
  });


  process.on('SIGINT', function(){
      mongoose.connection.close(function(){
          console.log("Mongoose default connection is disconnected due to application termination");
          process.exit(0)
      });
  });
}