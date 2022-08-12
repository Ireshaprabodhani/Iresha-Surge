const express = require("express");
const {
  getNotes,
  createNote,
  getNoteById,
  UpdateNote,
  DeleteNote,
} = require("../controllers/noteController");
const { protect } = require("../middleware/authAdminMiddleware");


const router = express.Router();

router.route('/').get(protect, getNotes )
router.route('/create').post(protect, createNote);
router
  .route("/:id")
  .get(protect, getNoteById)
  .put(protect, UpdateNote)
  .delete(protect, DeleteNote);



module.exports = router;