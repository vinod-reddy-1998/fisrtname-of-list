const namesList = require(".../country/city/index");

const firstNames = require(".../utilities/utils/index");

let getPeopleInCity = (namesList) => {
  return firstNames(namesList);
};
module.exports = getPeopleInCity;
