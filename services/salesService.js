const { salesRepository } = require('../repositories/salesRepository');

const salesService = () => {
    const repo = salesRepository();

    return {
        getAll: () => {
            const items = repo.getAll();
            return items;
        }  
    }
}

module.exports = { salesService };