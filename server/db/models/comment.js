const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {type: String, required: true},
    _snippet: {type: Schema.Types.ObjectId, ref: 'Snippet', required: true}
});


module.exports = mongoose.model('Comment', commentSchema);
