// Code your solution in this file.
function lowerCaseDrivers(driversArr){
  return driversArr.map(function(driver){
    return driver.toLowerCase();
  });

}


function nameToAttributes(driversArr) {
  return driversArr.map(function(driver) {
    const firstName = driver.split(' ')[0];
    const lastName = driver.split(' ')[1];

    return { firstName: firstName, lastName: lastName };
  });

}


function attributesToPhrase(driversArr) {
  return driversArr.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
