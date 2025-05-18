import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    subject: {
      type: String,
      required: [true, "Please add a subject"],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Please add a message"],
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (date) {
        if (!date) return;

        // Format date as dd/mm/yy
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear().toString().slice(-2);

        // Format time as hr:min AM/PM
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12; // Convert 0 to 12
        const time = `${hours}:${minutes} ${ampm}`;

        return `${day}/${month}/${year} - ${time}`;
      },
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true }, // Enable getters when document is converted to JSON
    toObject: { getters: true }, // Enable getters when document is converted to object
  }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
