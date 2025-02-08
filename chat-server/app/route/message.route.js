const express = require('express');
const { getMessage, deleteMessage } = require('../controller/message.controller');

const router = express.Router();

router.get('/:id', getMessage);
router.delete('/:id', deleteMessage);

module.exports = router;
