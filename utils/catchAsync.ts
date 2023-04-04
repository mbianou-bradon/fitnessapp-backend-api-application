export const catchAsync = (fxn) => {
    return async (req, res, next) => {
        fxn(req,res,next).catch(next)
    }
}



