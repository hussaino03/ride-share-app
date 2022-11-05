import Ride from "../models/ride";
import User from "../models/user";

export const createRide = async (req, res) => {
  try {
    const { passengerId, startLocation, endLocation, age } = req.body;
    let passenger = await User.findOne({ _id: passengerId }).exec();

    const ride = new Ride({
      passengerId: passengerId,
      passengerAge: age,
      passengerName: passenger.name,
      passengerStartingAddress: startLocation,
      passengerEndingAddress: endLocation,
    });
    await ride.save();

    return res.json({ done: true });
  } catch (err) {
    console.log("CREATE_RIDE ERROR", err);
    res.status(400).send("Failed to create ride");
  }
};


export const acceptRide = async (req, res) => {
  const { driverId, rideId } = req.body;

  let driver = await User.findOne({ _id: driverId }).exec();
  let ride = await Ride.findOne({ _id: rideId }).exec();

  ride.driverId = driver._id;
  ride.driverName = driver.name;
  ride.save();
}