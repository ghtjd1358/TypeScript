let names : string = 'kim';
let age : number = 0;
let 결혼했니 : null | undefined = null;

let peoples : string[] = ['Kim', 'park', 'Lee'];

let 회원들 : {member1 : string, member2 : string}  = {member1 : 'kim', member2 : 'lee'};

//practice
const hoseong : {name : string, age : number, location : string} = {
    name : 'hoseong',
    age : 30,
    location : 'seoul'
}

let porject : { member : string[], day : number, started : boolean } = {
    member : ['kim', 'park'],
    day : 30,
    started : true
}

//
let 사람들 : (string | number)[]  = [1, '2', 3];



let obj : {a : string} = {a : '123'}

// 

let user : string = 'kim'
let ages : undefined = undefined
let married : boolean = false
let 철수 : (string | number | undefined | boolean)[] = [user, ages, married]


let 학교 : {score : (number | boolean)[], teacher : string, friend : (string | string[]) } = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'Jones'
}

학교.score[4] = false
학교.friend = ['Lee', 학교.teacher]


// 

function add(x? : number) :void{
    console.log(x + 100)
}

add(10)

function 인사(x? : string) : void{
    if(x){
        console.log('hello' + x)
    }else{
        console.log('이름이 없습니다.')
    }
}

인사('흥민')

function 문자수(x : string | number) : number{
    return x.toString().length
}

문자수('123')
문자수(12456)

function 결혼(월소득: number, 집: boolean, 매력: string): string | void {
    let score: number = 0;
    score += 월소득;
    console.log('초기 점수:', score);

    if (집 === true) {
        score += 500;
    }

    if (매력 === '상') {
        score += 100;
    }

    console.log('최종 점수:', score);

    if (score >= 500) {
        return '결혼가능';
    } else {
        return '결혼불가능';
    }
}

console.log(결혼(100, false, '상'));
console.log(결혼(500, true, '상'))

//

function 내함수(x : number | string){
    let array : number[] = [];
    if(typeof x === 'number'){
        array.push(x)
        console.log('어래이', array);
    }else{
        return '돌아가'
    }
}

내함수(123);
내함수(456);
내함수(789);


let 이름 : string = 'kim';

//////////////////////////////////////////////////////////////

const arrayFunction = (x :(number | string)[]) : number[]  =>  { 
    let arrayNumber : number[] = []

    x.forEach((y) => {
        if(typeof y === 'number'){
            arrayNumber.push(y)
        }else{
            arrayNumber.push(parseFloat(y))
        }
    })
    return arrayNumber
}

console.log('숫자', arrayFunction([1, 2, 3]));
console.log('문자', arrayFunction(['1', '2', '3']));


const lastSubject = (x : {subject : string | string[]}) : string => {
    if(typeof x.subject ==='string'){
        return x.subject
    }else if(Array.isArray(x.subject)){
        return x.subject[x.subject.length -1]
    }else{
        '돌아가시오'
    }
}

let 철수쌤 = { subject : 'math'}
let 영희쌤 = { subject : ['science', 'english']}
let 민수쌤 = { subject : ['math', 'art', 'korean']}

console.log(lastSubject(철수쌤))
console.log(lastSubject(영희쌤))
console.log(lastSubject(민수쌤))
console.log(lastSubject({subject : ['science', 'english']}))

