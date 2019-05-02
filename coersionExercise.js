function isValidName(name){
    if(typeof name !== 'string'){
        return false
    }
    if(!name){
        return false
    }
    if(name.trim().length < 3){
        return false
    }
    //NaN not numeric 
    if(Number(name)){
        return false
    }
    return true
}

function hoursAttended(attended,length){
    if(typeof attended == 'number' || typeof attended == 'string' ){
        var attendedNumber = Number(attended)
        
    } else {
        return false
    }
    if(typeof length == 'number' || typeof length == 'string' ){
        var lengthNumber = Number(length)
    } else {
        return false
    }
    const someIsNaN = attendedNumber != attendedNumber || lengthNumber != lengthNumber
    if(someIsNaN){
        return false
    }
    const bothIntegers = Number.isInteger(attendedNumber)  && Number.isInteger(lengthNumber) 
    if(!bothIntegers){
        return false
    }
    if(attendedNumber == 0 || lengthNumber == 0){
        return false
    }
    if(attendedNumber > lengthNumber){
        return false
    }
    return true
}

console.log(isValidName("Frank") === true);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);