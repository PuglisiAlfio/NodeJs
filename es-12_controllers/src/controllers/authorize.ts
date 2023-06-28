import { NextFunction, Request, Response } from "express";
import passport from "passport";


const authorize = (req: Request, res: Response, next: NextFunction) => {
            //session è un modo antico di fare le autorizzazioni
    passport.authenticate('jwt', {session:false}, (err:any, user:any) => {
        if(!user || err){
            res.status(401).json({msg: 'You are not authorize'})
        } else {
            req.user = user;
            next();
        }
    })(req, res, next)
}

export default authorize;