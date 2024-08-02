const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new Schema({
  select: {
    type: String,
    required: true
  },
  question1: {
    type: String,
  },
  option11: {
    type: String,
    required: true
  },
  option12: {
    type: String,
    required: true
  },
  option13: {
    type: String,
    required: true
  },
  option14: {
    type: String,
    required: true
  },
  answer1: {
    type: String,
    required: true
  },
  question2: {
    type: String,
  },
  option21: {
    type: String,
    required: true
  },
  option22: {
    type: String,
    required: true
  },
  option23: {
    type: String,
    required: true
  },
  option24: {
    type: String,
    required: true
  },
  answer2: {
    type: String,
    required: true
  },
  question3: {
    type: String,
  },
  option31: {
    type: String,
    required: true
  },
  option32: {
    type: String,
    required: true
  },
  option33: {
    type: String,
    required: true
  },
  option34: {
    type: String,
    required: true
  },
  answer3: {
    type: String,
    required: true
  },
  question4: {
    type: String,
  },
  option41: {
    type: String,
    required: true
  },
  option42: {
    type: String,
    required: true
  },
  option43: {
    type: String,
    required: true
  },
  option44: {
    type: String,
    required: true
  },
  answer4: {
    type: String,
    required: true
  },
  question5: {
    type: String,
  },
  option51: {
    type: String,
    required: true
  },
  option52: {
    type: String,
    required: true
  },
  option53: {
    type: String,
    required: true
  },
  option54: {
    type: String,
    required: true
  },
  answer5: {
    type: String,
    required: true
  },
  question6: {
    type: String,
  },
  option61: {
    type: String,
    required: true
  },
  option62: {
    type: String,
    required: true
  },
  option63: {
    type: String,
    required: true
  },
  option64: {
    type: String,
    required: true
  },
  answer6: {
    type: String,
    required: true
  },
  question7: {
    type: String,
  },
  option71: {
    type: String,
    required: true
  },
  option72: {
    type: String,
    required: true
  },
  option73: {
    type: String,
    required: true
  },
  option74: {
    type: String,
    required: true
  },
  answer7: {
    type: String,
    required: true
  },
  question8: {
    type: String,
  },
  option81: {
    type: String,
    required: true
  },
  option82: {
    type: String,
    required: true
  },
  option83: {
    type: String,
    required: true
  },
  option84: {
    type: String,
    required: true
  },
  answer8: {
    type: String,
    required: true
  },
  question9: {
    type: String,
  },
  option91: {
    type: String,
    required: true
  },
  option92: {
    type: String,
    required: true
  },
  option93: {
    type: String,
    required: true
  },
  option94: {
    type: String,
    required: true
  },
  answer9: {
    type: String,
    required: true
  },
  question10: {
    type: String,
  },
  option101: {
    type: String,
    required: true
  },
  option102: {
    type: String,
    required: true
  },
  option103: {
    type: String,
    required: true
  },
  option104: {
    type: String,
    required: true
  },
  answer10: {
    type: String,
    required: true
  },
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: 'creators', 
    required: true
  },
  podcastId: {
    type: Schema.Types.ObjectId,
    ref: 'creatorsPodcast', 
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending'
  }
}, {
  timestamps: true
});

const Question = mongoose.model('questions', questionSchema);

module.exports = Question;
