import Router from "express";
import dotenv from "dotenv";
import { Group, Member, User } from "../database/schema.js";
import { generateRandomLetterSequence } from "../controllers/generateRandomStrings.js";
import { createPaymentLink } from "../controllers/groupController.js";

dotenv.config();

const router = Router();

router.post("/api/createMember", async (req, res) => {
  try {
    const { groupId, firstname, lastName, email, countryCode, phone } =
      req.body;

    const group = await Group.findById(groupId).populate("admin");

    if (!group) return res.status(404).json({ message: "Group not found" });
    if (!group.admin)
      return res.status(404).json({ message: "Admin not found" });

    const newMember = new Member({
      firstName: firstname,
      lastName,
      email,
      countryCode,
      phoneNumber: phone,
      group: group._id,
      user: group.admin._id,
    });

    // Set accessToken as _id (before saving)
    newMember.accessToken = newMember._id.toString();
    await newMember.save();

    // Update Group & Admin members array
    await Promise.all([
      Group.findByIdAndUpdate(group._id, {
        $push: { participants: newMember._id },
      }),
      User.findByIdAndUpdate(group.admin._id, {
        $push: { members: newMember._id },
      }),
    ]);

    res.status(201).json({
      message: "Member created successfully",
      ok: true,
      ...newMember.toObject(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create member" });
  }
});

export default router;
