import Ride from "../models/ride";
import User from "../models/user";

export const createRide = async (req, res) => {
  try {
    const { passengerId, startLocation, endLocation, age } = req.body;
    let passenger = await User.findOne({ _id: passengerId }).exec();
    if (!passenger) return res.status(400).send("No account with that email");
    
    passenger.isDriver = true;

    const ride = new Ride({
      passengerId: passengerId,
      passengerAge: age,
      passengerName: passenger.name,
      passengerStartingAddress: startLocation,
      passengerEndingAddress: endLocation,
    });

    await passenger.save();
    await ride.save();

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
    const rides = await User.find({})
  } catch (err) {
    console.log("FETCH SUGGESTED RIDES ERROR", err);
    res.status(400).send("Failed to fetch suggested rides");
  }
}


