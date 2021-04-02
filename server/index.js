const App = require('express')()

const cors = require('cors')
const defaultCorsOptions = {
  origin: '*',
  methods: ['PUT','POST','GET','OPTIONS'],
  allowedHeaders:['Content-Type', 'Authorization'],
  maxAge: 10000
}
const ip = 'localhost'
App.use('/', cors(defaultCorsOptions))

const server = App.listen(8080, ip, () => {
  console.log('on Server')
})


/*
  user = {
    id:
    name:
    position:{
      x:
      y:
    }
    closeObj:
  }
  chatList = {
    id:
    name:
    message:
  }
 
 */
let users = [];
let chatList = [];

const socket = require('socket.io')(server, {
  cors: defaultCorsOptions
})

socket.on('connection', (client) => {

  client.on('message', (message) => { // 메시지
    chatList.push(message)
    socket.emit('messages', chatList)
  })

  client.on('login', (user) => { // 로그인
    if (!user) return ;
    users.push(user)
    socket.emit('checkUser', users)
  })

  client.on('moveUser', (user) => { // 사용자 이동 이벤트
    if (!user) return;
    const leftUsers= users.filter(u => u.name !== user.name)
    users = [
      ...leftUsers,
      user
    ]
    socket.emit('checkUser', users)
  })
})
