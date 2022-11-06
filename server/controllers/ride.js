import Ride from "../models/ride";
import User from "../models/user";

export const createRide = async (req, res) => {
  try {
    const { passengerId, startLocation, endLocation } = req.body;
    let passenger = await User.findOne({ _id: passengerId }).exec();
    if (!passenger) return res.status(400).send("No account with that email");
  
    const ride = new Ride({
      passengerId: passengerId,
      passengerName: passenger.name,
      passengerStartingAddress: startLocation,
      passengerEndingAddress: endLocation,
    });
    await ride.save();
    passenger.rideId = ride._id;
    await passenger.save();
    
    return res.json({ done: true });
  } catch (err) {
    console.log("CREATE_RIDE ERROR", err);
    res.status(400).send("Failed to create ride");
  }
};


export const acceptRide = async (req, res) => {

  try{
    const { driverId, rideId } = req.body;

    let driver = await User.findOne({ _id: driverId }).exec();
    let ride = await Ride.findOne({ _id: rideId }).exec();

    ride.driverId = driver._id;
    ride.driverName = driver.name;
    ride.save();
  }catch(err){
    console.log("ACCEPT_RIDE ERROR", err);
    res.status(400).send("Failed to accept ride");
  }
}

export const getAllDriverRides = async (req , res) => {
  try{
    const rides = await Ride.find({}).exec();
    return res.json(rides);
  } catch(err){
    console.log("FETCH_RIDES ERROR", err);
    res.status(400).send("Failed to fetch ride");
  }
}

export const getAllPassengerRides = async (req , res) => {
  try{
    const rides = await Ride.find({}).exec();
    return res.json(rides);
  } catch(err){
    console.log("FETCH_RIDES ERROR", err);
    res.status(400).send("Failed to fetch ride");
  }
}


export const getSuggestedRides = async (req, res) => {
  try {
  const id = req.params.id;
  console.log("ID", id)
  const user = await User.find({ _id : id}).exec();
  const rides = await Ride.find({ passengerEndingAddress : user.driverEndingAddress }).exec();
  console.log(rides)
  res.json({
    rides: rides
  })
  } catch (err) {
    console.log("FETCH SUGGESTED RIDES ERROR", err);
    res.status(400).send("Failed to fetch suggested rides");
  }
}


export const getRide = async (req, res) => {
  const {id} = req.body
  try {
    const ride = await Ride.findOne({_id : id}).exec();
    res.json(ride);
  }catch(err){
    console.log("GET_RIDE ERROR", err);
    res.status(400).send("Failed to fetch ride details");
  }
}

