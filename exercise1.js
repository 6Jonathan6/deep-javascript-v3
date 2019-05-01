function myIsOperator(equal,equalTo){
    const equalNaN = myIsNaN(equal)
    const equalToNaN = myIsNaN(equalTo)
    if(equal == 0 || equalTo == 0){
        const equalNegativeZero =  isNegativeZero(equal)
        const equalToNegativeZero = isNegativeZero(equalTo)
        if(equalNegativeZero || equalToNegativeZero){
            return equalNegativeZero && equalToNegativeZero
        }
        return equal === equalTo
    }
    if(equalNaN && equalToNaN){
        return true
    }
    return  equal === equalTo
}

function myIsNaN(value){
    return value != value
}
function isNegativeZero(value){
    return value == 0 && 1/value == -Infinity
}

console.log(myIsOperator(NaN,NaN),' Must be true')
console.log(myIsOperator(0,NaN),' Must be false')
console.log(myIsOperator(0,0),' Must be true')
console.log(myIsOperator(-0,-0),' Must be true')
console.log(myIsOperator(-0,0),' Must be false')
console.log(myIsOperator(-0,'String'),' Must be false')
console.log(myIsOperator(NaN,'String'),' Must be false')