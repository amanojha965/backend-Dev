import { Book } from "../models/book.model.js";
import { Member } from "../models/member.model.js";
import { Borrow } from "../models/borrow.model.js";

export const createBook = async (req, res) => {
    const book = await Book.create(req.body);
    res.json(book);
};

export const createMember = async (req, res) => {
    const member = await Member.create(req.body);
    res.json(member);
};

export const borrowBooks = async (req, res) => {
    const { memberId, bookIds } = req.body;

    const borrow = await Borrow.create({
        member: memberId,
        books: bookIds
    });

    res.json(borrow);
};


export const getSummary = async (req, res) => {
    const { id } = req.params;

    const record = await Borrow.findById(id)
        .populate("member")
        .populate("books");

    if (!record) return res.status(404).json({ msg: "Not found" });

    let total = 0;

    record.books.forEach(b => total += b.price);


    let lateFine = 100;

    let discount = 0;

    if (record.member.membershipType === "Normal") {
        discount = lateFine * 0.05;
    } else if (record.member.membershipType === "Gold") {
        discount = lateFine * 0.15;
    }

    let finalFine = lateFine - discount;

    res.json({
        member: record.member.name,
        membership: record.member.membershipType,
        books: record.books,
        totalBookValue: total,
        lateFine,
        discount,
        finalFine
    });
};