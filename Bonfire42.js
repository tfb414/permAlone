
function permAlone(str) {
    var originalStr = turnIntoArray(str).toString().split("");
    var arrayOfStr = originalStr;
    if(str.length === 1){
        return 1;
    }
    if(str.length === 2 && str[0] !== str[1]){
        return 2;
    }
    if(str.length === 3){
        console.log(permutationsOfThree(arrayOfStr, originalStr).length);
        return permutationsOfThree(arrayOfStr, originalStr).length;
    }
    if(str.length ===4){
        var permutations = permutationsOfFour(arrayOfStr, originalStr);
    }
    if(str.length === 5){


        var permutations = permutationsOfFive(arrayOfStr, originalStr);
    }

    console.log(permutations.length);
    return permutations.length;

}

//create a while loop where you take in the number of times the loop needs to run. It will be str.length minus 4 or 3.


function permutationsOfThree(arrayOfStr, originalStr, whatToAdd){
    var count = 0;
    var permutations = [];
    while(count < 3){
        permutations = permutations.concat(findTwoOptions(arrayOfStr, originalStr, whatToAdd));
        arrayOfStr = rotateOrder(originalStr);
        count++
    }

    return permutations;

}

function permutationsOfFour(arrayOfStr, originalStr, whatToAdd){
    var numberOfTimesToLoop = 4;
    var permutations = [];
    if(whatToAdd === undefined){
        whatToAdd = "";
    }
    while(numberOfTimesToLoop > 0){
        var rotateIt = arrayOfStr.shift();
        var holdingTank = whatToAdd + rotateIt;
        permutations = permutations.concat(permutationsOfThree(arrayOfStr, originalStr, holdingTank));
        arrayOfStr.unshift(rotateIt);
        arrayOfStr = rotateOrder(originalStr);
        numberOfTimesToLoop--;
    }
    return permutations;
}
function permutationsOfFive(arrayOfStr, originalStr, whatToAdd){
    var permutations = [];
    var numberOfTimesToLoop = 5;
    while(numberOfTimesToLoop > 0){
        var holdingTank = arrayOfStr.shift();
        permutations = permutations.concat(permutationsOfFour(arrayOfStr, originalStr, holdingTank));
        arrayOfStr.unshift(holdingTank);
        arrayOfStr = rotateOrder(originalStr);
        numberOfTimesToLoop--;
    }
    return permutations;
}


function findTwoOptions(arrayOfStr, originalStr, whatToAdd){
    var i = 0;
    var twoOptions = [];
    while(i < 2){
        var one = originalStr[2];
        var two = originalStr[1];
        if(whatToAdd === undefined){
            var stringOfStr = arrayOfStr.join("");
        }
        else{
            var stringOfStr = whatToAdd + arrayOfStr.join("");
        }
        var result = /(.)\1{1,}/gi.test(stringOfStr);
        if(result === false){
            twoOptions.push(stringOfStr);
        }
        arrayOfStr[1] = one;
        arrayOfStr[2] = two;
        i++;
    }
    return twoOptions;
}
function turnIntoArray(str){
    return JSON.parse(JSON.stringify(Array.prototype.slice.call(arguments)));

}

function rotateOrder(originalStr){
    var holdingTank = originalStr.shift();
    originalStr.push(holdingTank);
    return originalStr;
}

permAlone('12345');

