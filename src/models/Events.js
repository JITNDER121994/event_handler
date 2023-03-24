const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const EventsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: {
    type: String,
    required: true,
  },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
});

const EventtCollection = mongoose.model("eventsSchedulercoll", EventsSchema);
module.exports = EventtCollection;
