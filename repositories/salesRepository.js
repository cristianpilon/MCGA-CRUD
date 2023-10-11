const fs = require('fs');
const salesData = fs.readFileSync('./data/sales.json', 'utf-8');
const salesJSON = JSON.parse(salesData);

const salesRepository = () => {
    return {
        getAll: () => {
            return salesJSON;
        }
    }
}

module.exports = { salesRepository };