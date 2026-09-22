import mongoose, { Schema } from "mongoose";

const PingSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
});

export const Ping = mongoose.models.Ping ?? mongoose.model("Ping", PingSchema);
