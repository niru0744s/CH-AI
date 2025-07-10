const mongoose = require('mongoose');

const aiInteractionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User is required'],
    },
    messages: [
      {
        role: {
          type: String,
          enum: ['user', 'assistant'],
          required: true,
        },
        content: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
    model: {
      type: String,
      default: 'GPT-4',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('AIInteraction', aiInteractionSchema);
