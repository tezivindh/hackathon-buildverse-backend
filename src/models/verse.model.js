import mongoose from "mongoose";

const VerseSchema = new mongoose.Schema(
  {
    verseId: { type: String, required: true, unique: true },
    sanskrit: { type: String, required: true },
    transliteration: { type: String, required: true },
    translation: { type: String, required: true },
    explanation: { type: String, required: true },
    themeTags: [{ type: String }],
  },
  { timestamps: true }
);

const Verse = mongoose.model("Verse", VerseSchema);
export default Verse;
