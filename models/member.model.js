import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    membershipType: {
        type: String,
        enum: ["Normal", "Gold"],
        default: "Normal"
    }
});

export const Member = mongoose.model("Member", memberSchema);