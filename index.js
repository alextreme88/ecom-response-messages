/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

const functions = require('@google-cloud/functions-framework');
const {Firestore} = require('@google-cloud/firestore')
const firestore =  new Firestore()

 exports.responseMessage = (req, res) => {
    let message = req.query.message || req.body.message || 'Hello World!';
    res.status(200).send(message);
  };  