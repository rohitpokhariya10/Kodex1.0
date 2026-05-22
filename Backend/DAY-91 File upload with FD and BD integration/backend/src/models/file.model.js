const mongoose = require("mongoose");

const fileItemSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },

    fileId: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    mimetype: {
      type: String,
      required: true,
    },

    size: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

const fileSchema = new mongoose.Schema(
  {
    uploadType: {
      type: String,
      enum: ["single", "multiple"],
      required: true,
    },

    files: {
      type: [fileItemSchema],
      required: true,
      validate: {
        validator: function (value) {
          return Array.isArray(value) && value.length > 0;
        },
        message: "At least one file is required",
      },
    },

    provider: {
      type: String,
      default: "imagekit",
    },
  },
  { timestamps: true }
);

const fileModel = mongoose.model("Files", fileSchema);

module.exports = fileModel;