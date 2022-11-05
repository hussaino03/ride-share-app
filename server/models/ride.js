import mongoose from "mongoose";

const { Schema } = mongoose;

const rideSchema = new Schema(
    {
        driverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        driverName: {
            type: String, trim: true, 
        },
        passengerId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        passengerAge: {
            type: Number
        },
        passengerName: {
            type: String, trim: true, required: "Passenger Name is required"
        },
        passengerStartingAddress: {
            type: String, trim: true, required: "Passenger Starting Address is required"
        },
        passengerEndingAddress: {
            type: String, trim: true, required: "Passenger Ending Address is required"
        },
        price: {
            type: Number
        }
    }
);

export default mongoose.model("Ride", rideSchema);