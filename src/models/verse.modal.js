import mongoose from "mongoose";

const VerseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  verseId: {
    type: String,
    required: true,
  },
});

const Verse = mongoose.model("SavedVerse", SavedVerseSchema);
export default Verse;
