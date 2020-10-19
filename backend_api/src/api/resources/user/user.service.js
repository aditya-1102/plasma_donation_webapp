import Joi from '@hapi/joi';
export default{
    validationSchema(body){
        const schema=Joi.object().keys({
            firstName:Joi.string().required(),
            lastName:Joi.string().required(),
            Email:Joi.string().email().required(),
            Password:Joi.string().required().min(6),
            Gender:Joi.string().required(),
            Age:Joi.number().required(),
            Role:Joi.string().required(),
            createdDate:Joi.date().required(),
            isActive:Joi.boolean().required()
        });
        const {error,value}=Joi.validate(body,schema);
        console.log(error);
         if(error && error.details){
             return{error};
         }
         return{value};
      
    },
    validationloginSchema(body){
        const schema=Joi.object().keys({
            Email:Joi.string().email().required(),
            Password:Joi.string().required()
        });
        const {error,value}=Joi.validate(body,schema);  
        console.log(error);
        if(error && error.details){
            return {error};
        }
        return {value};
    }
}