var Users = [{name: '소녀시대', age: 20}, {name: '걸스데이', age: 30 }];

Users.push({name: '티아라', age: 40 });

console.log(Users)
console.log('첫 번째 사용자 이름 : %s ',Users[0].name);
console.log('사용자 수 : %d', Users.length)

console.log('사용자 이름과 나이 : %s , %d', Users[0,1,2].name, Users[0,1,2].age) 
// 이렇게 할 경우 마지막 애만 나옴 

var add = function(a, b) {
    return a + b
};

Users.push(add);

console.log('배열의 요소의 수 : %d', Users.length);
console.log('세 번째 요소로 추가된 함수 실행 : %d', Users[3](10,10));

