const fs = require('fs');
const productData = fs.readFileSync('./data/products.json', 'utf-8');
const productJSON = JSON.parse(productData);
const Product = require("../models/product");

const productsRepository = () => {
    const saveProductsToJSONFile = () => {
        fs.writeFileSync('./data/products.json', JSON.stringify(productJSON, null, 2), 'utf-8');
    }

    const generateProductId = () => {
        const ids = productJSON.map((p) => p.id);
        let newId = 1;
    
        while (ids.includes(newId)) {
            newId++;
        }
    
        return newId;
    }
    
    return {
        get: (id) => {
            return productJSON.find((c) => c.id === parseInt(id));
        },
        getAll: () => {
            return productJSON;
        },
        add: (name) => {
            const newProduct = new Product(generateProductId(), name);
            productJSON.push(newProduct);

            saveProductsToJSONFile(productJSON);
        },
        delete: (id) => {
            const productIndex = productJSON.findIndex((p) => p.id === parseInt(id));
            productJSON.splice(productIndex, 1);

            saveProductsToJSONFile(productJSON);
        }
    }
}

module.exports = { productsRepository };