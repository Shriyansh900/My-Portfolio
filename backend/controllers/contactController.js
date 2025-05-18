import Contact from "../models/Contact.js";

// @desc    Create new contact message
// @route   POST /api/contact
// @access  Public
export const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Log the incoming request
    console.log("Received contact form submission:", { name, email, subject });

    if (!name || !email || !subject || !message) {
      console.log("Missing required fields");
      return res.status(400).json({
        success: false,
        error: "Please provide all required fields",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    console.log("Contact created successfully:", contact._id);

    res.status(201).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(400).json({
      success: false,
      error: error.message || "Could not save contact message",
    });
  }
};

// @desc    Get all contact messages
// @route   GET /api/contact
// @access  Private
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort("-createdAt");

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(400).json({
      success: false,
      error: error.message || "Could not fetch contacts",
    });
  }
};
