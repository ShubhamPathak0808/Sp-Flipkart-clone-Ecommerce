import mongoose from "mongoose";
import homeProductsData from "../../constantDatas/homeProductsData.js"

const productSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true    // this will stop dta to duplicate every time nodemon runs
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description : String,
    discount: String,
    tagline: String
});

// this created a model(collection) of homeProduct name with productSchemad
 export const homeProduct = mongoose.model("homeProduct", productSchema);

const homeProductData_In_productSchema = async function () {
    try {
        await homeProduct.deleteMany({});  //this will delete homeProduct collection
        await homeProduct.insertMany(homeProductsData);
        console.log("homeProductsData is added in homeProducts successfully");
    }
    catch (err) {
        console.log("error while inserting homeProductdata in homeProducts", err);
    }
}

export default homeProductData_In_productSchema;



