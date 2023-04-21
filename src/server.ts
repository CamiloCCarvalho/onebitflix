import express from 'express'
import { sequelize } from './database'
import { adminJs, adminJsRouter } from './adminjs'

const app = express()
app.use(express.static('public'))//the public dir served as static files
app.use(adminJs.options.rootPath, adminJsRouter)// app.use(path, routes)

const PORT = process.env.PORT || 3000



//UpSERVER-DB
app.listen(PORT, ()=> {
    sequelize.authenticate().then(() => {
        console.log('DB CONNECTION SUCCESSFULY AT PORT: 5432')
    })
    console.log(`SERVER START SUCCESSFULY AT PORT: ${PORT}`)
})
    