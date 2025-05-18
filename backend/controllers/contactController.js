import Contact from "../models/Contact.js";

// Function to format date
const formatDate = (dateString) => {
  // Convert string to Date object
  const date = new Date(dateString);

  // Check if date is valid
  if (!(date instanceof Date) || isNaN(date)) {
    console.error("Invalid date:", dateString);
    return null;
  }

  try {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";

    return {
      date: `${day}/${month}/${year}`,
      time: `${hours}:${minutes}/${ampm}`,
    };
  } catch (error) {
    console.error("Error formatting date:", error);
    return null;
  }
};

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

    // Format the date before sending response
    const contactObj = contact.toObject();
    const formattedContact = {
      ...contactObj,
      createdAt: formatDate(contactObj.createdAt),
    };

    console.log("Contact created successfully:", contact._id);

    res.status(201).json({
      success: true,
      data: formattedContact,
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

    // Format dates for all contacts
    const formattedContacts = contacts.map((contact) => {
      const contactObj = contact.toObject();
      return {
        ...contactObj,
        createdAt: formatDate(contactObj.createdAt),
      };
    });

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: formattedContacts,
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(400).json({
      success: false,
      error: error.message || "Could not fetch contacts",
    });
  }
};
