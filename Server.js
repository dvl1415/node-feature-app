const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get("/api/message" , function(request, response){
    response.json({
        message : 'Welcome to the world of Node.js'
    })
})

app.get("/api/student" , function(request, response){
    response.json({
        "students" : [
            {id : 1 , name : 'Dhaval'},
            {id : 2 , name : 'Patel'},
            {id : 3 , name : 'Rushi'},
            {id : 4 , name : 'Harshil'},
            {id : 5 , name : 'Shivam'}
        ]
    })
})

const PORT = 1234
app.listen(PORT, function(){
    console.log(`Server is listening at ${PORT}`)
})