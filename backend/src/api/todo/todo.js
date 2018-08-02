const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchmema = mongoose.Schema({
    description: {type: String, require: true},
    done: {type: Boolean, require: true, default: false},
    createAt: {type: Date, default: Date.now}
})

module.exports = restful.model('Todo', todoSchmema)