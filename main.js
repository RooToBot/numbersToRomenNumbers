var i = "I";
var v = "V";
var x = "X";
var l = "L";
var c = "C";
var d = "D";
var m = "M";

function length1Control(number) {
    number = parseInt(number, 10);
    if (number == 0) {
        return "";
    } else if (number <= 3) {
        return i.repeat(number);
    } else if (number == 4) {
        return i + v;
    } else if (number == 5) {
        return v;
    } else if (number > 5 && number <= 8) {
        return v + i.repeat(number - 5);
    } else if (number > 8 && number <= 9) {
        return i + x.repeat(10 - number);
    }
}

function length2Control(number) {
    number = parseInt(number, 10);
    if (number == 0) {
        return "";
    } else if (number <= 3) {
        return x.repeat(number);
    } else if (number == 4) {
        return x + l;
    } else if (number == 5) {
        return v;
    } else if (number > 5 && number <= 8) {
        return l + x.repeat(number - 5);
    } else if (number > 8 && number <= 9) {
        return x + c.repeat(10 - number);
    }
}

function length3Control(number) {
    if (number == 0) {
        return "";
    } else if (number <= 3) {
        return x.repeat(number);
    } else if (number == 4) {
        return c + d;
    } else if (number == 5) {
        return d;
    } else if (number > 5 && number <= 8) {
        return d + c.repeat(number - 5);
    } else if (number > 8 && number <= 9) {
        return c + m.repeat(10 - number);
    }
}

function length4Control(number) {
    if (number == 0) {
        return "";
    } else if (number <= 3) {
        return m.repeat(number);
    } else if (number == 4) {
        return c + d;
    } else if (number == 5) {
        return d;
    } else if (number > 5 && number <= 8) {
        return d + c.repeat(number - 5);
    } else if (number > 8 && number <= 9) {
        return x + c.repeat(10 - number);
    }
}

function convertToRoman(num) {
    num = parseInt(num, 10);
    var numberList = num.toString().split("");
    switch (numberList.length) {
        case 1:
            return length1Control(numberList[0]);
            break;
        case 2:
            return length2Control(numberList[0]) + length1Control(numberList[1]);
            break;
        case 3:
            return length3Control(numberList[0]) + length2Control(numberList[1]) + length1Control(numberList[2]);
            break;
        case 4:
            return length4Control(numberList[0]) + length3Control(numberList[1]) + length2Control(numberList[2]) + length1Control(numberList[3]);
            break;
    }
    return;
}
console.log(convertToRoman(3999));
