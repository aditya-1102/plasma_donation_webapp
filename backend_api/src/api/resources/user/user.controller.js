    import user from './user.model';
import userService from './user.service';

export default{
    findAll(req,res){
        user.find().then(emp=>res.json(emp))
        .catch(err=>res.status(500).json(err));
    },
    findOne(req,res){
        const id = req.params.id;
        user.findById(id).then(emp=>{
            if(!emp){
                return res.status(400).json({err:"Invalid ID : user not found"});
            }
            return res.json(emp);
        })
        .catch(err=>res.status(500).json(err))
    },
    async signup(req,res){
        try{
            const {error,value}=userService.validationSchema(req.body);
            
            console.log(error);
            if(error && error.details){
                return res.status(500).json(error.details);
            }
            await user.create(value)
            .then(item=>res.json(item))
            .catch(err=>res.status(500).json(err));
        }catch(err){
            console.log(err);
        }
    },
    async login(req,res){
        try{
            const {error,value}=userService.validationloginSchema(req.body);
            if(error && error.details){
                return res.status(500).json(error);
            }
            const User=await user.findOne({Email: value.Email});
            if(!User){
                return res.status(400).json({err: 'invalid email'});
            }
            if(User.Password!=value.Password){
                return res.status(400).json({err: 'invalid password'});
            }
            else{
                return res.json(User);
            }
        }catch(err){
            console.log(err);
        }
    },
    updateuser(req,res){
        const id=req.params.id;
        user.findOneAndUpdate({_id:id},{$set:req.body},{new:true}).then(data=>{
            if(!data){
                return res.status(400).json({err:"user not found"});
            }
            return res.json(data);
        }).catch(err=>res.status(500).json(err));
    },
    deleteuser(req,res){
        const id = req.params.id;
        user.findByIdAndRemove(id).then(Emp=>{
            if(!Emp){
                return res.status(400).json({err:"emp not Find"});    
            }
            return res.json(Emp);
        }).catch(err=>res.status(500).json(err));
    }
};