//SQL Database
const express = require('express')
const sql = require('mssql')

const app = express();
const router = express.Router()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

const dbConfig = {
    user : 'sa',
    password : 'user"123',
    server : 'localhost',
    database : 'StudentDB',
    trustServerCertificate : true
}
router.get("/", (request, response) =>{
    response.send('This is default API End Point')
})

router.get("/student", (request, response) =>{

    sql.connect(dbConfig, (err)=>{
        if(err) {
            throw err
        } 
       // console.log('Connected to Databse Successfully')
        const request = new sql.Request();
        const selectQuery = "Select * FROM Student"

        request.query(selectQuery, (err, data) =>{
            if(error){
                throw error
            }
            response.json(data.recordset)
        })
    })
})

router.post("/student", (req, res) =>{

    sql.connect(dbConfig, (err)=>{
        if(err) {
            throw err
        } 
        // console.log('Connected to Databse Successfully')
        var body = req.body
        const request = new sql.Request();
        const insertQuery = `INSERT INTO Student (name, email,city) values ('${body.name}', '${body.email}', '${body.city}')`

        request.query(insertQuery, (err, data) =>{
            if(error){
                throw error
            }
            res.json(data)
        })
    })
})


router.put("/student/:id", (req, res) =>{

    sql.connect(dbConfig, (err)=>{
        if(err) {
            throw err
        } 
        // console.log('Connected to Databse Successfully')
        var body = req.body
        var studentId = req.params.id
        const request = new sql.Request();
        const updateQuery = `UPDATE Student SET name = '${body.name}', email = '${body.email}',city ='${body.city}' WHERE ID = '${studentID}' `

        request.query(updateQuery, (err, data) =>{
            if(error){
                throw error
            }
            res.json(data)
        })
    })
})

router.delete("/student/:id", (req, res) =>{

    sql.connect(dbConfig, (err)=>{
        if(err) {
            throw err
        } 
        // console.log('Connected to Databse Successfully')
        var studentId = req.params.id
        const request = new sql.Request();
        const deleteQuery = `DELETE FROM Student where ID = ${studentId}`

        request.query(deleteQuery, (err, data) =>{
            if(error){
                throw error
            }
            res.json(data)
        })
    })
})

app.use("/api",router)

const PORT = 1234 
app.listen(PORT, ()=>{
    console.log(`Server is listening at ${PORT}`)
})