const mongoose = require('mongoose');
const { Schema } = mongoose;

const tripSchema = new Schema({
 date: {
    type: Date,
    required: true
 },
 from: {
    type: String,
    required: true,
  },
 to: {
    type: String,
    required: true,
  },
 busOwnerID: {
    type: Number,
    required: true
},
startTime: {
    type: String,
    required: true
},
EndTime:{
    type: String,
    required: true
},
SeatBooked: {
    type: [String],
    required: true,
  },
  category:{
    type: String,
    required: true
  },
animeties_list:{
  type: [String],
  required: true,
},
bus_no: {
    type: String,
    required: true,
  },
busFare: {
    type: Number,
    required: true
},
busName:  {
    type: String,
    required: true,
  }
});

const trip = mongoose.model('trip', tripSchema);

module.exports = trip;
