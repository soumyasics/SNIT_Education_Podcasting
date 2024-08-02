const Question = require('../ExamCordinator/QuestionSchema');
const Answer = require('./answerSchema'); 

// Create a new answer
const createAnswer = async (req, res) => {
    try {
      const { questionId, listenerid, ...answerData } = req.body;
  
      if (!questionId || !listenerid) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      const existingAns = await Answer.findOne({ listenerid, questionId, status: 'Reviewed' });
      if (existingAns) {
        return res.status(400).json({ error: 'You have already attended this Set of Questions' });
      }
  
      const question = await Question.findById(questionId);
      if (!question) {
        return res.status(404).json({ error: 'Question not found' });
      }
  
      const answer = new Answer({
        ...answerData,
        questionId,
        listenerid,
        creatorId: question.creatorId,  
        podcastId: question.podcastId   
      });
  
      await answer.save();
  
      res.status(201).json(answer);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the answer' });
    }
  };
  

// Get all answers
const getAllAnswers = async (req, res) => {
  try {
    const answers = await Answer.find()
      .populate('questionId')
      .populate('listenerid')
      .populate('creatorId')
      .populate('podcastId');
    res.status(200).json(answers);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching answers' });
  }
};

// Get a single answer by ID
const getAnswerById = async (req, res) => {
  try {
    const { id } = req.params;
    const answer = await Answer.findById(id)
      .populate('questionId')
      .populate('listenerid')
      .populate('creatorId')
      .populate('podcastId');
    if (!answer) {
      return res.status(404).json({ error: 'Answer not found' });
    }
    res.status(200).json(answer);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the answer' });
  }
};

// Update an answer
const updateAnswer = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedAnswer = await Answer.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });
    if (!updatedAnswer) {
      return res.status(404).json({ error: 'Answer not found' });
    }
    res.status(200).json(updatedAnswer);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the answer' });
  }
};

// Delete an answer
const deleteAnswer = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAnswer = await Answer.findByIdAndDelete(id);
    if (!deletedAnswer) {
      return res.status(404).json({ error: 'Answer not found' });
    }
    res.status(200).json({ message: 'Answer deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the answer' });
  }
};

// Get answers by question ID
const getAnswersByQuestionId = async (req, res) => {
  try {
    const { questionId } = req.params;
    const answers = await Answer.find({ questionId })
      .populate('listenerid')
      .populate('creatorId')
      .populate('podcastId');
    res.status(200).json(answers);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching answers by question ID' });
  }
};

// Get answers by listener ID
const getAnswersByListenerId = async (req, res) => {
  try {
    const { listenerId } = req.params;
    const answers = await Answer.find({ listenerid: listenerId })
      .populate('questionId')
      .populate('creatorId')
      .populate('podcastId');
    res.status(200).json(answers);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching answers by listener ID' });
  }
};

module.exports = {
  createAnswer,
  getAllAnswers,
  getAnswerById,
  updateAnswer,
  deleteAnswer,
  getAnswersByQuestionId,
  getAnswersByListenerId
};
