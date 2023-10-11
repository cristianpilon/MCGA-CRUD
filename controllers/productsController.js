const { productsService } = require('../services/productsService');

const productsController = (router) => {
    const service = productsService();

    router.get('/getProduct/:id', (req, res) => {
        const product = service.get(req.params.id);

        if (product) {
            res.json(product);
        }
        
        return res.status(404).json({ message: 'Producto no encontrado' });
    });

    router.get('/getProducts', (req, res) => {
        const products = service.getAll();
        res.json(products);
    });
    
    router.post('/addProduct', (req, res) => {
        const { name } = req.body;
    
        if (name) {
            const newProduct = service.add(name);
            res.status(201).json(newProduct);
        }
    
        return res.status(400).json({ message: 'Debe proporcionar nombre del producto' });
    });

    router.delete('/deleteProduct/:id', (req, res) => {
        const id = service.delete(req.params.id);

        if (id) {
          return res.status(200);
        }

        return res.status(404).json({ message: 'Producto no encontrado' });
    });
}

module.exports = { productsController };