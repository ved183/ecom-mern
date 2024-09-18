import express from 'express';
import { registerController, loginController, testController, forgetPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController } from "../controller/authController.js";
import { isAdmin, requiredSignIn } from '../middlewares/authMiddlewares.js';

//router obj
const router = express.Router()

//routing
//register || method post
router.post('/register', registerController);


//LOGIN ||POST 
router.post('/login', loginController);

//Forget Password
router.post("/forget-password", forgetPasswordController);


//test routes
router.get('/test', requiredSignIn, isAdmin, testController);

//protected User route auth
router.get('/user-auth', requiredSignIn, (req,res) => {
    res.status(200).send({ok:true});
})

//protected Admin route auth
router.get('/admin-auth', requiredSignIn, isAdmin, (req,res) => {
    res.status(200).send({ok:true});
})

//update profile
router.put("/profile", requiredSignIn, updateProfileController);

//orders
router.get("/orders", requiredSignIn, getOrdersController);

//all orders
router.get("/all-orders", requiredSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requiredSignIn,
  isAdmin,
  orderStatusController
);


export default router;