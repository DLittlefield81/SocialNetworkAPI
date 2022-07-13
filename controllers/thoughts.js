const { Thought, Reactions } = require('../models');

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    // GET to get a single thought by its _id
    getSingleThoughts(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
    createThoughts(req, res) {
        Thoughts.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    // PUT to update a thought by its _id
    updateThoughts(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
    },

    // DELETE to remove a thought by its _id
    deleteThoughts(req, res) {
        Thoughts.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : Reactions.deleteMany({ _id: { $in: thought.Reactions } })
            )
            .then(() => res.json({ message: 'thought and associated Reactions deleted!' }))
            .catch((err) => res.status(500).json(err));
    },
};
