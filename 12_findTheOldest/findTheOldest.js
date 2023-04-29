const findTheOldest = function(array) {
    return array.reduce((oldset,current)=>{
        const oldsetAge=getAge(oldset.yearOfBirth,oldset.yearOfDeath);
        const curentAge=getAge(current.yearOfBirth,current.yearOfDeath);
         return oldsetAge < curentAge? current :oldset;
    });
    

};
const getAge=function(birth,death){
    if(!death){
        death=new Date().getFullYear();
    }
    return death -birth;
}

// Do not edit below this line
module.exports = findTheOldest;
