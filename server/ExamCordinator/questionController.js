const Question = require('./QuestionSchema');

// Create a new question
const createQuestion = async (req, res) => {
  console.log(req.body);
  try {
    const { select, question, option1, option2, option3, option4, answer, creatorId, podcastId } = req.body;

    const newQuestion = new Question({
      select,
      question,
      option1,
      option2,
      option3,
      option4,
      answer,
      creatorId,
      podcastId
    });

    const savedQuestion = await newQuestion.save();
    res.status(201).json(savedQuestion);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the question' });
  }
};

// Get all questions
const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching questions' });
  }
};

// Get a single question by ID
const getQuestionById = async (req, res) => {
  try {
    const { id } = req.params;
    const question = await Question.findById(id);
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the question' });
  }
};

// Update a question
const updateQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const { select, question, option1, option2, option3, option4, answer, creatorId, podcastId } = req.body;

    const updatedQuestion = await Question.findByIdAndUpdate(
      id,
      { select, question, option1, option2, option3, option4, answer, creatorId, podcastId },
      { new: true }
    );

    if (!updatedQuestion) {
      return res.status(404).json({ error: 'Question not found' });
    }

    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the question' });
  }
};

// Delete a question
const deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedQuestion = await Question.findByIdAndDelete(id);

    if (!deletedQuestion) {
      return res.status(404).json({ error: 'Question not found' });
    }

    res.status(200).json({ message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the question' });
  }
};


// Get a single question by ID
const getQuestionByPodcastId = async (req, res) => {
    try {
      const { id } = req.params;
      const question = await Question.find({podcastId:id});
      if (!question) {
        return res.status(404).json({ error: 'Question not found' });
      }
      res.status(200).json(question);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the question' });
    }
  };

// Get a single question by ID
const getQuestionByCreatorId = async (req, res) => {
    try {
      const { id } = req.params;
      const question = await Question.find({creatorId:id});
      if (!question) {
        return res.status(404).json({ error: 'Question not found' });
      }
      res.status(200).json(question);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the question' });
    }
  };
module.exports = {
  createQuestion,
  getAllQuestions,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
  getQuestionByCreatorId,
  getQuestionByPodcastId
};
