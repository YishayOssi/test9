export function Auth(req, res){
    try{
        res.json({ok: true})
    }
    catch (err){
        res.status(401).send("server not defind...")
    }
}