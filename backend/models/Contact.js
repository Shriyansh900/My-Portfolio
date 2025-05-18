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

        // Format date as day/month/year
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();

        // Format time as hour/minute/am/pm in 24-hour format
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "pm" : "am";

        return {
          date: `${day}/${month}/${year}`,
          time: `${hours}:${minutes}/${ampm}`,
        };
      },
    },
  },
  {
    timestamps: false, // This removes both createdAt and updatedAt
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
