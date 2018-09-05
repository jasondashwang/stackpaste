const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const snippetSchema = new Schema({
    created: {type: Date, default: Date.now, required: true},
    title: {type: String, required: true},
    description: {type: String},
    code: {type: String, required: true},
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});


module.exports = mongoose.model('Snippet', snippetSchema);
