
const MemberModel = require("./model");
//const mongoose = require('mongoose');
//const ObjectId = mongoose.Types.ObjectId;

const get = () => {
  return new Promise((resolve, reject) => {
    MemberModel.find({}, (err, data) => {
      err && reject(err);
      data && resolve(data);
    });
  });
};

const getbyID = (ID) => {
    return new Promise((resolve, reject) => {
      MemberModel.findById(ID, (err, data) => {
        err && reject(err);
        data && resolve(data);
      });
    });
  };

const add = async (obj) => {
  let member = new MemberModel({
    name: obj.name,
    id: obj.id,
    city: obj.city,
    street: obj.street,
    houseNumber: obj.houseNumber,
    birthDay: obj.birthDay,
    phone: obj.phone,
    cellphone: obj.cellphone,

   // imageUrl: obj.imageUrl,

    dateOfVaccines: obj.dateOfVaccines,
    makerOfVaccines: obj.makerOfVaccines,
    dateOfIllness: obj.dateOfIllness,
    dateOfRecovery: obj.dateOfRecovery,
  });
  member.dateOfVaccines.length < 4 &&
    [...Array(4 - member.dateOfVaccines.length)].map((m, i) => {
      member.dateOfVaccines.push(null);
      console.log(member.dateOfVaccines.length);
      member.makerOfVaccines.push(null);
    });
    
  member.save((e) => {
    if (e) console.log(e + " ???????????");
  });
};

module.exports = {
  get,
  getbyID,
  add,
};