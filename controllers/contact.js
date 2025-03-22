import { Contact } from "../models/contact.js"

// get all contact
export const getAllContact = async (req,res) => {
    const userContact = await Contact.find();

    if(!userContact) {
        return res.json({
            message:"No contact exit",
            success:false,
        })
    }
    res.json({
        message:"All contact fetched",
        userContact,
    })
}

// create new contact
export const newContact = async (req,res) => {
    const{name,email,phone,type} = req.body;

    if(name =="" || email=="" || phone=="" || type=="") {
        return res.json({
            message:"All fields are required",
            success:false,
        })
    }

    const contactSave = await Contact.create({
        name, email, phone, type, user:req.user,
    });

    res.json({
        message:"Contact saved successfully...",
        success:true,
        contactSave,
    })

}

// get contact by id

export const getContactById = async (req,res) => {
    const id = req.params.id;

    const userContact = await Contact.findById(id);
    if(!userContact) {
        return res.json({
            message:"No contact find",
            success:false,
        })
    }
    res.json({
        message:"Contact fetched",
        userContact,
    })
}

// update contact by id

export const updateContent = async (req,res) => {
    const id = req.params.id;
    const {name, email, phone} = req.body;

    let updateContentById = await Contact.findByIdAndUpdate(id,{
        name,
        email,
        phone,
    },
    { new:true });

    if(!updateContentById) {
        return res.json({
            message:"No contact exit",
            success:false,
        })
    }
    res.json({
        message:"Contact updated",
        success:true,
        updateContentById,
    })
}

// Delete contact by id

export const deleteContact = async (req,res) => {
    const id = req.params.id;

    const deleteContactById = await Contact.findByIdAndDelete(id);

    if(!deleteContactById) {
        return res.json({
            message:"Contact not found",
            success:false,
        })
    }
    res.json({
        message:"contact deleted successfully",
        success:true,
    })

}

// get contact by userid

export const getContactByUserId = async (req,res) => {
    const id = req.params.id;

    const userContact = await Contact.find({user:id});
    if(!userContact) {
        return res.json({
            message:"No contact find",
            success:false,
        })
    }
    res.json({
        message:"User specific Contact fetched",
        userContact,
    })
}
