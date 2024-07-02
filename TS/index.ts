let 이름 : string = 'kim';

let 이름숫자 : string | number = 10;

let 이름들 : string[] = ['kim', 'lee', 'park'];

let 객체 : {name ? : string} = {name : 'kim'};

type 내타입 = string | number;
type Member = [number, boolean]
type People = {
    [key : string] : string,
}

let 내이름 : 내타입 = 'son'

let john : Member = [10, true]

let shown : People = {
    name : 'shown',
    age : '123'
}  

function 함수(x :number) : number{
    return x * 2
}

// 클래스 문법에는?
class User{
    name : string;
    constructor(name :  string){
        this.name = name
    }
}


//타입스크리브 1일차 by Tistory