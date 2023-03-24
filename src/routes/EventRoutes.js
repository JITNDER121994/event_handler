const express = require("express");
const {
  AddEvent,
  GetAllEvents,
  UpdateEvent,
  DeleteEvent,
  GetSingleEvent,
} = require("../controller/EventController");
const router = express.Router();
router.route("/events").post(AddEvent);
router.route("/events").get(GetAllEvents);
router.route("/events/:id").put(UpdateEvent);
router.route("/events/:id").get(GetSingleEvent);
router.route("/events/:id").delete(DeleteEvent);

module.exports = router;
