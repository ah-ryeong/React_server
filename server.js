const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080')
}); 

// ajax 쓰려면 이거 추가
// express.json() 은 유저가 보낸 array/object 데이터를 출력해보기 위해 필요하고 cors는 다른 도메인주소끼리 ajax 요청 주고받을 때 필요함
app.use(express.json());
var cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, 'React_BookStore/build')));

app.get('/', function(요청, 응답) {
    응답.sendFile(path.join(__dirname, 'React_BookStore/build/index.html'));
})

// DB에 있는 상품명을 보여주려면?
app.get('/product', function(요청, 응답) {
    응답.json({name: 'black book'})
})

// react-router 쓰는 경우 추가
app.get('*', function(요청, 응답) {
    응답.sendFile(path.join(__dirname, 'React_Bookstore/build/index.html'));
})