var Users = [{ name :'소녀시대', age: 20 }, { name : '걸스데이', age: 30 },{ name : '티아라', age : 40}];

console.log('배열의 요소의 수 : %d', Users.length);

for (var i = 0;
    i < Users.length;
    i++ ){
    console.log('배열의 요소 #' + i +  ' :%s', Users[i].name);
}

console.log('\nforEach 구문 사용하기');
Users.forEach(function(item, index) {
    console.log('이름 #' + index + ' : %s', item.name);
    
    console.log('나이 #' + index + ' : %d', item.age);

    console.log('전부 #' + index + ' : %j', item);
});

console.dir(Users);


// splice() 메소드로 배열 요소 여러 개를 한꺼번에 추가하거나 삭제하기 delete를 이용할 경우 공간은 남아 있지만 
// splice()를 이용하면 공간까지 같이 제거할 수 있음.
// Users.splice(2,2) --> 2번 인덱스를 포함해서 2개 제거 즉 2번, 3번 인덱스 제거. 

Users.splice(1,0, {name: '애프터스쿨', age : 25});
console.log('splice()로 요소를 인덱스 1에 추가한 후 ');
console.dir(Users);

Users.splice(1,1);
console.log('splice()로 인덱스 1의 요소를 1개 삭제한 후 ');
console.dir(Users);


// slice()메소드로 배열 일부 요소 복사하여 새로운 배열 만들기
// slice() 메소드에 전달하는 파라미터는 두 개 입니다. 첫 번째는 복사할 요소의 시작 위치이며 두 번째는 끝 위치입니다.

console.log('배열 요소의 수 : %d ', Users.length);
console.log('원본 Users');
console.dir(Users);

var Users2 = Users.slice(1, 3); // 1번 인덱스부터 3번 인덱스 까지 위치

console.log('slice()로 잘라낸 후 Users2');
console.dir(Users2);
console.dir(Users); // 원본에는 따로 손상이 가지 않고 잘를 수 있다. 

var Users3 = Users2.slice(1);

console.log('slice()로 잘라낸 후 Users3');
console.dir(Users3);

