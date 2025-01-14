const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'Game-Library-Mobile',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

