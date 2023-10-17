const { productsService } = require('../services/productsService');

const productsController = (router) => {
    const service = productsService();

    router.get('/products/:id', (req, res) => {
        const product = service.get(req.params.id);

        if (product) {
            res.json(product);
        }
        
        return res.status(404).json({ message: 'Producto no encontrado' });
    });

    router.get('/products', (req, res) => {
        const products = service.getAll();
        res.json(products);
    });
    
    router.post('/products', (req, res) => {
        const { name } = req.body;
    
        if (name) {
            const newProduct = service.add(name);
            res.status(201).json(newProduct);
        }
    
        return res.status(400).json({ message: 'Debe proporcionar nombre del producto' });
    });

    router.delete('/products/:id', (req, res) => {
        const id = service.delete(req.params.id);

        if (id) {
          return res.status(200);
        }

        return res.status(404).json({ message: 'Producto no encontrado' });
    });
}

module.exports = { productsController };