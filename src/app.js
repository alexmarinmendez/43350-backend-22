import express from "express";
import handlebars from 'express-handlebars'
import cookieParser from "cookie-parser";
import jwtRouter from './routers/jwt.router.js'
import passport from "passport";
import initializePassport from "./config/passport.config.js";

const app = express()

app.use(express.json())
app.use(cookieParser('secret'))

initializePassport()
app.use(passport.initialize())

app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')

app.use('/jwt', jwtRouter)
app.get('/login', (req, res) => {
    res.render('index')
})

app.listen(8080, () => console.log('Server Up!'))
