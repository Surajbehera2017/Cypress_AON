//fetching number from strings and adding them. 
// to run in cmd line: tsc code1.ts | node code1.js
export class Coding {

    fetchNumber() {
        let text: string = 'text123 text693'

        let sum2
        let text1: string[] = text.split(' ')[0].split('')
        let text2: string[] = text.split(' ')[1].split('')
        console.log('text1:' + text1)
        console.log('text2:' + text2)
        this.isNumber(text1)
        console.log("Num1>>" + this.isNumber(text1))
        console.log("Num2>>" + this.isNumber(text2))
    }

    isNumberSum(text: string[]): number {
        let sum1: number = 0;
        console.log('text>>>>>>' + text.length)
        for (let i = 0; i < text.length; i++) {
            console.log(isNaN(Number(text[i])))
            if (!isNaN(Number(text[i]))) {
                sum1 = sum1 + Number(text[i]);
            }
        }

        return sum1;
    }

    isNumber(char: string): boolean {
        console.log('char>>>>>>' + char)
        console.log()
        if (!isNaN(Number(char))) {
            return true
        }
        else false
         
    }

//remove all numbers and display/ display only alphabets
removeAllNumbers(){
    let text: any[] = ['a', 'v', 's', 'e', 'q', 120, 56464, 8797,'f','f','er','3132564',5646,'zaz']
    let newText: string = '';
    for (let i = 0; i < text.length; i++) {
        if(!this.isNumber(text[i])){
            newText = newText+text[i] 
        }
    }
    console.log('final string>>>>>>' +newText);
}



}
