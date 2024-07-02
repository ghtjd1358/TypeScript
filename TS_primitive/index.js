var names = 'kim';
var age = 0;
var 결혼했니 = null;
var peoples = ['Kim', 'park', 'Lee'];
var 회원들 = { member1: 'kim', member2: 'lee' };
//practice
var hoseong = {
    name: 'hoseong',
    age: 30,
    location: 'seoul'
};
var porject = {
    member: ['kim', 'park'],
    day: 30,
    started: true
};
//
var 사람들 = [1, '2', 3];
var obj = { a: '123' };
// 
var user = 'kim';
var ages = undefined;
var married = false;
var 철수 = [user, ages, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'Jones'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
// 
function add(x) {
    console.log(x + 100);
}
add(10);
function 인사(x) {
    if (x) {
        console.log('hello' + x);
    }
    else {
        console.log('이름이 없습니다.');
    }
}
인사('흥민');
function 문자수(x) {
    return x.toString().length;
}
문자수('123');
문자수(12456);
function 결혼(월소득, 집, 매력) {
    var score = 0;
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
    }
    else {
        return '결혼불가능';
    }
}
console.log(결혼(100, false, '상'));
console.log(결혼(500, true, '상'));
//
function 내함수(x) {
    var array = [];
    if (typeof x === 'number') {
        array.push(x);
        console.log('어래이', array);
    }
    else {
        return '돌아가';
    }
}
내함수(123);
내함수(456);
내함수(789);
var 이름 = 'kim';
//////////////////////////////////////////////////////////////
var arrayFunction = function (x) {
    var arrayNumber = [];
    x.forEach(function (y) {
        if (typeof y === 'number') {
            arrayNumber.push(y);
        }
        else {
            arrayNumber.push(parseFloat(y));
        }
    });
    return arrayNumber;
};
console.log('숫자', arrayFunction([1, 2, 3]));
console.log('문자', arrayFunction(['1', '2', '3']));
var lastSubject = function (x) {
    if (typeof x.subject === 'string') {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        '돌아가시오';
    }
};
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['math', 'art', 'korean'] };
console.log(lastSubject(철수쌤));
console.log(lastSubject(영희쌤));
console.log(lastSubject(민수쌤));
console.log(lastSubject({ subject: ['science', 'english'] }));
