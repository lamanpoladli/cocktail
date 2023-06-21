const categorySchema = require('../validations/categoryValidation')

const categoryPostValidation = (req,res,next)=>{
    const{body} = req;
    const{error} = categorySchema.validate(body);
    
    if (error===undefined) {
        next()
        return;
    }
    else{
        const{details} = error;
        const message = details.map((i)=>i.message).join(',');
        res.status(403).send({
            error: message
        })
    }
}

module.exports = categoryPostValidation