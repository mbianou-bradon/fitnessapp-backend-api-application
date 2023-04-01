export default (fxn: any) => {
    return async (req, res, next) => {
        fxn(req,res,next).catch(next)
    }
}