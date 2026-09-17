/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 */
//python -m http.server

function sleep_in(weekday , vacation){
    if (!weekday || vacation){
        return true;
    } else {
        return false;
    }
}

function monkey_trouble(a_smile, b_smile) {
        if (a_smile == b_smile){
            return true;
        } else {
            return false;
        }
}

function string_times(str,num){
   return str.repeat(num); 
}

function front_times(str,num){
   let substr = str.substring(0 , 3);
   return substr.repeat(num); 
}

function string_bits(str){
    let outputStr = "";
    for(let i = 0; i <= str.length - 1; i++) {
        if (i % 2 == 0){
            outputStr = outputStr + str[i];
        }
    }
    return outputStr;
}

function caughtSpeeding(speed , birthday) {
    let rSpeed = 0
    if (birthday == true) {
        rSpeed = speed - 5
    } else {
        rSpeed = speed
    }
    if (rSpeed <= 60) {
        return 0;
    } else if (rSpeed <= 80){
        return 1;
    } else {
        return 2;
    }

    
}

function fizz_buzz(num){
  if (num % 3 == 0 && num % 5 == 0 ){
    return "FizzBuzz";
  } else if (num % 3 == 0) {
    return "Fizz";
  } else if (num % 5 == 0){
    return "Buzz";
  } else {
    return num + "!";
  }
}

function specialEleven(num) {
    return num % 11 == 0 || num % 11 == 1;
}

function withoutDoubles(num1 , num2, noDoubles){
    if (num1 == num2 && noDoubles == true){
        return num1 + ((num2) % 6 + 1);
    } else {
        return num1 + num2;
    }
}

function left2 (str){
    return str.substr(2) + str.substring(0,2)
}

function firstLast6 (array){
    return array.indexOf(6) == 0 || array.lastIndexOf(6) ==  array.length - 1;
}

function has23 (array){
    return array.includes(2) || array.includes(3)
}

function fix23 (array){
    let fixedArray = array
    if (array[0] == 2 && array[1] == 3){
        fixedArray[1] = 0
    } else if (array[1] == 2 && array[2] == 3){
        fixedArray[2] = 0
    }
    return fixedArray;
}

function countYZ (str){
    let count = 0
    str = str.toLowerCase() + " ";
    for (let i = 0; i < str.length; i++){
        if ((str[i] == "y" && str[i + 1] == " ") || (str[i] == "z" && str[i + 1] == " ")){
            count++;
        }
    }
    return count;
}

function endOther (str1 , str2){
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    return str1.endsWith(str2) || str2.endsWith(str1)
}

function starOut (str){
    let starredOutStr = str
    for (let i = 0; i < str.length; i++){
        if (starredOutStr[i] == "*" && starredOutStr[i + 1] == "*"){
            starredOutStr = sliceOut(starredOutStr, i , i + 1);
            i = i - 1;
        } else if (starredOutStr[i] == "*" && starredOutStr[i + 1] != "*"){
            starredOutStr = sliceOut(starredOutStr, i - 1 , i + 2);
            i = i - 3;
        }
    }
    return starredOutStr;
}

function sliceOut (str, start , end){
    let newStr = str.substring(0, start) +  str.substring(end);
    return newStr;
}

function getSandwich (str){
    if (str.indexOf("bread") + 5 < str.lastIndexOf("bread")) {
         return str.substring(str.indexOf("bread") + 5, str.lastIndexOf("bread"));
    } else {
        return "";
    }
}

function canBalance (array){
    let arrayTotal = 0
    let arrayHalf = 0
    for( let i = 0; i < array.length; i++){
        arrayTotal += array[i]
    }
    for( let i = 0; i < array.length; i++){
        arrayHalf += array[i]
        if (arrayHalf == arrayTotal / 2){
            return true;
            break;
        }
    }
    return false;
}

function countClumps (array){
    let numOfClups = 0
    for (let i = 0; i < array.length; i++){
        if (array[i] == array[i + 1] && array[i] != array[i - 1]){
            numOfClups++
        }
    }
    return numOfClups
}

function sameEnds (str){
    let longestStr = str
    for (let i = 0; i < str.length; i++){
        if (str.lastIndexOf(str.substring(0 , i)) != str.indexOf(str.substring(0 , i)) && str.lastIndexOf(str.substring(0 , i)) >= i){
            longestStr = str.substring(0 , i)
        }
    }
    return longestStr;
}