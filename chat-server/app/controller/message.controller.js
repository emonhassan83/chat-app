const Message = require("../model/message.model");

const saveMessage = async (message) => {
  try {
    const saveMsg = new Message(message);
    await saveMsg.save();
    return saveMsg;

    // return res
    //   .status(200)
    //   .send({ data: saveMsg, message: "Message Save Successfully!" });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  saveMessage,
};
