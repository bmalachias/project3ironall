/**
 * 1- Check if the request came with token
 * 2- validate token 
 * 3 - insert the decoded token on req 
 * 4 - call next param
 */

import jwt from 'jsonwebtoken'
import 'dotenv/config'

const getTokenFromHeaders = req => {
    if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1]
    }
    return null
}

const isAuthenticatedMiddleware = (req, res, next) => {
    //Acessar o token
    //Verificar se a request veio com um token
    const token = getTokenFromHeaders(req)
    if(!token) {
        return res.status(401).json({message: 'Unauthorized'})
    }
    
    try {
        const secret = process.env.JWT_SECRET
        const decodedToken = jwt.verify(token, secret)
        req.user = decodedToken
        next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({message: 'Unauthorized'})
    }
}

export default isAuthenticatedMiddleware