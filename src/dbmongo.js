const mongoose = require('mongoose');
db_url = "mongodb://localhost:27017/rest-api-db";
mongoose.Promise = global.Promise;
//conectando y configurando mongoose
mongoose.connect(db_url,{    
    useUnifiedTopology: true ,
    useNewUrlParser: true ,
    useFindAndModify:false//con esta opcion activa podemos usar comodamente el metodo patch
}).then(()=>console.log("db_conect")).catch(e=>console.log(e))

module.exports = mongoose;