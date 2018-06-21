// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(
    function (name){return name.toUpperCase() === string.toUpperCase()}
  );
}

function fuzzyMatch(drivers,string){
  //returns a driver if beginning provided letters match
  return drivers.filter(
    function (name){
      return (name[0] === string[0]) && name[1] === string[1]
      // iterate through each string name and test the first two letters, if they match the first two letters of the string then return them

    }
  );
}
