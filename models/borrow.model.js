import mongoose from "mongoose";

const borrowSchema = new mongoose.Schema({
    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member"
    },
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        }
    ]
}, { timestamps: true });

export const Borrow = mongoose.model("Borrow", borrowSchema);