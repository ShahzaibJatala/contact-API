import { getContactById, getAllContact, newContact, updateContent, deleteContact, getContactByUserId } from "../controllers/contact.js";
import express from "express";
import { isAuthenticated } from "../middleware/Authentication.js";

const router = express.Router();

// contact route
// creating content
// endpoint /api/contact/new
 router.post('/new',isAuthenticated,newContact);

// get all contact route 
// endpoint /api/contact
router.get('/',getAllContact);

// get one contact by id route 
// endpoint /api/contact/id
router.get('/:id',getContactById);

// updating one contact by id route 
// endpoint /api/contact/id
router.put('/:id',isAuthenticated ,updateContent);

// delete one contact by id route 
// endpoint /api/contact/id
router.delete('/:id',isAuthenticated ,deleteContact);

// get user specific contact
// endpoint /api/contact/userid/id
router.get('/userid/:id',getContactByUserId);

export default router;
 