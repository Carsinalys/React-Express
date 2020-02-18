exports.deleteOne = Model => async data => {
  try {
    const doc = await Model.findByIdAndRemove(data._id);
    if (!doc) throw new Error("Record with this id is doesn`t exist.");
    return doc;
  } catch (e) {
    console.log(e.message);
  }
};

exports.addOne = Model => async data => {
  try {
    return await Model.create(data);
  } catch (e) {
    console.log(e);
  }
};

exports.updateOne = Model => async input => {
  try {
    let { _id, data } = input;
    data.edited = true;
    const record = await Model.findByIdAndUpdate(_id, data, {
      new: true,
      runValidators: true
    });
    if (!record) throw new Error("No document with that id.");
    return record;
  } catch (e) {
    console.log(e.message);
  }
};
