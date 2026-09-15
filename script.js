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