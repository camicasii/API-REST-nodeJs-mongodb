const User = require('../models/user');
const Car = require('../models/car');
const _ =require('underscore');
module.exports = {    
    index:async(req,res,next)=>{
        const users =  await User.find({});        
        res.status(200).json(users);
    },
    newUsers:async(req,res,next)=>{
        const newUsers =  new User(req.body);
        const user = await newUsers.save();
        res.status(200).json(user);

    },
    getUsers:async(req,res,next)=>{

        const {userId} = req.params;
        const user = await User.findById(userId);        
        res.status(200).json(user);
    },
    replaceUser:async(req,res,next)=>{
        const {userId} = req.params;
        
        
        const newuser = req.body;
        const olduser = await User.findByIdAndUpdate(userId, newuser);
        res.status(200).json( {success:true});
    },
    updateUser:async(req,res,next)=>{
        const {userId} = req.params;
        const newuser = req.body;
        const olduser = await User.findByIdAndUpdate(userId, newuser);
        res.status(200).json( {success:true});
    },
    deleteUser:async(req,res,next)=>{
        const {userId} = req.params;     
        const olduser = await User.findByIdAndRemove(userId);
        res.status(200).json( {success:true});
        
    },
    getCars:async(req,res,next)=>{
        const {userId} = req.params;
        const user = await User.findById(userId).populate('cars');//esto permite desplegar la lista de carros y no solo su id
        res.status(200).json(user)
    },
    newCars:async(req,res,next)=>{
        const {userId} = req.params;
        const newcars = new Car(req.body);
        const user = await User.findById(userId) 
        newcars.seller=user;
        await newcars.save();
        user.cars.push(newcars);
        await user.save();
        res.status(201).json(newcars);
},
getCar:async(req,res,next)=>{
    const {userId,carId} = req.params;    
    const car = await Car.findById(carId).catch(e=>res.json(e))    
    const user = await User.findById(userId).catch(e=>res.json(e))    
    const check = _.find(user["cars"],(key)=>key.toString()===carId.toString())
    
    
    
    
    res.status(200).json(car)
    
    
},
updateCar:async(req,res,next)=>{
    const {userId,carId} = req.params;    
    const newcar = req.body;
    const user = await User.findById(userId).catch(e=>res.json(e))       
    let check = _.find(user["cars"],(key)=>key.toString()===carId.toString())    
    const car = await Car.findByIdAndUpdate(carId,newcar).catch(e=>res.json(e))           
    if(check)    
    res.status(200).json( {success:true});
    else res.status(404).json( {success:false});
},
deleteCar:async(req,res,next)=>{
    const {userId,carId} = req.params;        
    const user = await User.findById(userId).catch(e=>res.json(e))         
    let check = _.find(user["cars"],(key)=>key.toString()===carId.toString())        
    if(check){
        const oldcar = await Car.findByIdAndRemove(carId).catch(e=>res.json(e))    
        res.status(200).json( {success:true});
    }
    else res.status(404).json( {success:false});
}
}