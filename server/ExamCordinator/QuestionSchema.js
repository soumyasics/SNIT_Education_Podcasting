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
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: 'creators', 
    required: true
  },
  podcastId: {
    type: Schema.Types.ObjectId,
    ref: 'creatorsPodcast', 
    required: true
  }
}, {
  timestamps: true
});

const Question = mongoose.model('questions', questionSchema);

module.exports = Question;
