
const router = require('express-promise-router')();// esto sustitue a require('express').Router

const {index,getUsers,deleteUser,newUsers,replaceUser,updateUser,getCars,
    newCars,getCar,updateCar,deleteCar
} = require('../controllers/users')

router.get('/',index)

router.post('/',newUsers)
router.get('/:userId',getUsers)

router.put('/:userId',replaceUser)

router.patch('/:userId',updateUser)

router.delete('/:userId',deleteUser)
router.get('/:userId/cars',getCars)

router.post('/:userId/cars',newCars)
router.get('/:userId/cars/:carId',getCar)
router.put('/:userId/cars/:carId',updateCar)
router.delete('/:userId/cars/:carId',deleteCar)


module.exports = router;
