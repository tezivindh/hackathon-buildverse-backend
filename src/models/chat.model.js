import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: { type: String, required: true },
    response: { type: String, required: true },
    mood: {
      type: String,
      enum: ["calm", "motivated", "confused", "neutral"],
      default: "neutral",
    },
    verseRef: { type: String }, // e.g., "2.47"
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

const Chat = mongoose.model("Chat", ChatSchema);
export default Chat;
