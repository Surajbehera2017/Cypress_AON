"use strict";
exports.__esModule = true;
exports.Coding = void 0;
//fetching number from strings and adding them. 
// to run in cmd line: tsc code1.ts | node code1.js
var Coding = /** @class */ (function () {
    function Coding() {
    }
    Coding.prototype.fetchNumber = function () {
        var text = 'text123 text693';
        var sum2;
        var text1 = text.split(' ')[0].split('');
        var text2 = text.split(' ')[1].split('');
        console.log('text1:' + text1);
        console.log('text2:' + text2);
        this.isNumber(text1);
        console.log("Num1>>" + this.isNumber(text1));
        console.log("Num2>>" + this.isNumber(text2));
    };
    Coding.prototype.isNumberSum = function (text) {
        var sum1 = 0;
        console.log('text>>>>>>' + text.length);
        for (var i = 0; i < text.length; i++) {
            console.log(isNaN(Number(text[i])));
            if (!isNaN(Number(text[i]))) {
                sum1 = sum1 + Number(text[i]);
            }
        }
        return sum1;
    };
    Coding.prototype.isNumber = function (char) {
        console.log('char>>>>>>' + char);
        console.log();
        if (!isNaN(Number(char))) {
            return true;
        }
        else
            false;
    };
    //remove all numbers and display/ display only alphabets
    Coding.prototype.removeAllNumbers = function () {
        var text = ['a', 'v', 's', 'e', 'q', 120, 56464, 8797, 'f', 'f', 'er', '3132564', 5646, 'zaz'];
        var newText = '';
        for (var i = 0; i < text.length; i++) {
            if (!this.isNumber(text[i])) {
                newText = newText + text[i];
            }
        }
        console.log('final string>>>>>>' + newText);
    };
    return Coding;
}());
exports.Coding = Coding;
