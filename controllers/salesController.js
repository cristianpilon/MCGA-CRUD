const { salesService } = require('../services/salesService');

const salesController = (router) => { 
    const service = salesService();

    router.get('/sales', (req, res) => {
        const sales = service.getAll();
        res.json(sales);
    });
}

module.exports = { salesController };