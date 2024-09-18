import express from 'express'
import { isAdmin, requiredSignIn } from '../middlewares/authMiddlewares.js'
import { brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, relatedProductController, searchProductController, updateProductController } from '../controller/productController.js'
import formidable from 'express-formidable';

const router = express.Router()

//routes 
router.post('/create-product', requiredSignIn, isAdmin, formidable(), createProductController)

//get products
router.get('/get-product', getProductController);

//single product
router.get('/get-product/:slug', getSingleProductController)

//get photo
router.get('/product-photo/:pid', productPhotoController)

//delete product
router.delete('/delete-product/:pid', deleteProductController)

//updateproduct
router.put('/update-product/:pid', requiredSignIn, isAdmin, formidable(), updateProductController)

//filter product
router.post('/product-filters', productFiltersController )

//product count 
router.get('/product-count', productCountController)

//product per page 
router.get('/product-list/:page', productListController)

//search product
router.get('/search', searchProductController)

//similar product
router.get('/realated-product/:pid/:cid', relatedProductController)

//category wise product
router.get('/product-category/:slug', productCategoryController)

//payments routes
//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requiredSignIn, brainTreePaymentController);

export default router