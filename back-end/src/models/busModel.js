const mongoose = require('mongoose');

const {schema} = mongoose;

const busSchema = new Schema ({
    busOwnerID:Number,
    busName:String,
    


});

const bus = mongoose.model('bus',busSchema);

module.exports = bus;