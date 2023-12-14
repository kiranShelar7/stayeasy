import jwt from 'jsonwebtoken'

export const verifyToken = async (req,res, next)=> {

    const token = req.cookies.access_token

    if(!token){
        return res.status(403).json({
            message : "Access denied : Invalid token"
        })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
        if(err){
            return res.status(403).json({
                message : "Access denied : Corrupted token"
            })
        }

        req.user = user
        next()
    })

}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, ()=> {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else {
            return res.status(403).json({
                message : "Access Denied : Authentication failed"
            })
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, ()=> {
        if(req.user.isAdmin){
            next()
        }else {
            return res.status(403).json({
                message : "Access Denied : Authentication failed"
            })
        }
    })
}