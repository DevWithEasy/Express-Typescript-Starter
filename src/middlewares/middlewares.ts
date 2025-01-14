import express, { Application } from "express"
import cors from "cors"
import morgan from "morgan"

const middlewares = [
    cors(),
    morgan('dev'),
    express.urlencoded({extended: false}),
    express.json()
]

const applyMidleware = (app : Application) =>{
    middlewares.map(m=>app.use(m))
}

export default applyMidleware