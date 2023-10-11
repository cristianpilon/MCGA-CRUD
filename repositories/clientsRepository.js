const fs = require('fs');
const clientData = fs.readFileSync('./data/clients.json', 'utf-8');
const clientJSON = JSON.parse(clientData);
const Client = require("../models/client");

const clientsRepository = () => {
    const saveClientToJSONFile = (clients) => {
        fs.writeFileSync('./data/clients.json', JSON.stringify(clients, null, 2), 'utf-8');
    }

    const generateClientId = () => {
        const ids = clientJSON.map((p) => p.id);
        let newId = 1;
    
        while (ids.includes(newId)) {
            newId++;
        }
    
        return newId;
    }
    
    return {
        get: (id) => {
            return clientJSON.find((c) => c.id === parseInt(id));
        },
        getAll: () => {
            return clientJSON;
        },
        add: (name, lastName, mail) => {
            const newClient = new Client(generateClientId(), name, lastName, mail);
            clientJSON.push(newClient);

            saveClientToJSONFile(clientJSON);
        },
        delete: (id) => {
            const clientIndex = clientJSON.findIndex((p) => p.id === parseInt(id));
            clientJSON.splice(clientIndex, 1);

            saveClientToJSONFile(clientJSON);
        }
    }
}

module.exports = { clientsRepository };