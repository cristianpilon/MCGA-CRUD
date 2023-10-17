const { clientsService } = require('../services/clientsService');

const clientsController = (router) => {
    const service = clientsService();

    router.get('/clients/:id', (req, res) => {
        const client = service.get(req.params.id);

        if (client) {
            res.json(cliente);
        }
        
        return res.status(404).json({ message: 'Cliente no encontrado' });
    });

    router.get('/clients', (req, res) => {
        const clients = service.getAll();
        res.json(clients);
    });

    router.post('/clients', createClient = (req, res) => {
        const { name, lastName, mail } = req.body;
    
        if (name && lastName && mail) {
            const newClient = service.add(name, lastName, mail);
            res.status(201).json(newClient);
        }
        
        return res.status(400).json({ message: 'Debe proporcionar nombre, apellido y mail del cliente' });
    });

    router.delete('/clients/:id', (req, res) => {
        const id = service.delete(req.params.id);

        if (id) {
          return res.status(200);
        }

        return res.status(404).json({ message: 'Cliente no encontrado' });
    });
}

module.exports = { clientsController };