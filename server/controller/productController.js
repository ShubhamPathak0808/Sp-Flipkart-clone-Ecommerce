import { homeProduct } from "../database/modols-schema/homeProductSchema.js";


const getProducts = async function(req,res){
   try {
    const homeProducts_from_dataBase = await homeProduct.find({});
    res.status(200).json(homeProducts_from_dataBase);
   } catch (error) {
    res.status(500).json( {message: error});
   }
}

export const getProductById = async (req,res) =>{
   try {
      const id = req.params.id;
      const product = await homeProduct.findOne({'id':id});
      console.log(product);
      res.status(200).json(product);
   } catch (error) {
      res.status(500).json( {message: error});
   }
}

export default getProducts;