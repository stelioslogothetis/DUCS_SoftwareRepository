const { checkSchema } = require('express-validator');

const { schema: author } = require('./author');
const { schema: program } = require('./program');

// Validation model for requests made to the imageRouter
module.exports = {

    // POSTS must have a sessionId and a program Id
    POST: checkSchema({
        sessionId: {
            exists: true,
            ...author.id
        },
        id: {
            exists: true,
            ...program.id
        }
    })
};