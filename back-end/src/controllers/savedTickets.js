const trip = require("../models/tripModel");


// router.post('/tickets', async (req, res) => {
//     const newTicket = new previousTickets(req.body);
//     try {
//       const savedTicket=await newTicket.save();
//       res.status(200).json(savedTicket);
//     }catch (err) {res.status(401).json(err)}
//   })


const savedTickets = async(req,res) =>{

    try {
       const booking =new trip(req.body)
       await booking.save()
        res.send(booking);
    } catch (error) {
        console.error(error);
        res.status(500).json({error:"Error"});
    }
    
    };
    
    module.exports = savedTickets ;