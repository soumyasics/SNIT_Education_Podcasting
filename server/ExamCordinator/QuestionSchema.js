const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new Schema({
  select: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  option1: {
    type: String,
    required: true
  },
  option2: {
    type: String,
    required: true
  },
  option3: {
    type: String,
    required: true
  },
  option4: {
    type: String,
    required: true
  },
  answer: {
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
