const Message = require("../model/message.model");

const saveMessage = async (message) => {
  try {
    const saveMsg = new Message(message);
    await saveMsg.save();
    return {
      status: 200,
      data: saveMsg,
      message: "Message Saved Successfully!",
    };
  } catch (error) {
    return { status: 500, error: error.message };
  }
};

const getMessage = async (req, res) => {
  const id = req.params.id;

  try {
    if (!id) {
      req.status(500).send({ message: "User id is required" });
    }

    const allMessage = await Message.find({
      $or: [{ "sender._id": id }, { "receiver._id": id }],
    });

    return res.send({
      message: "All messages were successfully sent!",
      data: allMessage,
    });
  } catch (error) {
    req.status(500).send({ message: "Internal Server Error" });
  }
};

const deleteMessage = async (req, res) => {
  const id = req.params.id;

  try {
    if (!id) {
      req.status(500).send({ message: "User id is required" });
    }

    const deleteMsg = await Message.findByIdAndDelete(id);

    return res.send({
      message: "Messages delete successfully!",
      data: deleteMsg,
    });
  } catch (error) {
    req.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  saveMessage,
  getMessage,
  deleteMessage
};
