const { clientsRepository } = require('../repositories/clientsRepository');

const clientsService = () => {
    const repo = clientsRepository();

    return {
        get: (id) => {
            const item = repo.get(id);
            return item;
        },
        getAll: () => {
            const items = repo.getAll();
            return items;
        },
        add: (name, lastName, mail) => {
            repo.add(name, lastName, mail);
        },
        delete: (id) => {
            const item = repo.get(id);

            if (item) {
                repo.delete(id);
                return id;
            }
            
            return null;
        }  
    }
}

module.exports = { clientsService };