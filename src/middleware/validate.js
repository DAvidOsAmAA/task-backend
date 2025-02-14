export const validate = (schema)=>{
    return (req,res,next)=>{
        const {error} = schema.validate({...req.body,...req.params,...req.query})
        if(!error){
            next()
        }else{
            next(new Error(error,400))
        }
    }

}