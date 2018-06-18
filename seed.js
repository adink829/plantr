const db = require('./models.js');
const Gardener = db.model('gardener');
const Plot = db.model('plot');
const Vegetable = db.model('vegetable');
let vegetableData = [
  {
    name: 'Nopales',
    color: 'green',
  },
  {
    name: 'Amaranth',
    color: 'magenta',
  },
  { name: 'Tomato', color: 'red' },
];

db
  .sync({ force: true })
  .then(() => Vegetable.bulkCreate(vegetableData, { returning: true }))
  .then(() => {
    console.log('Database synced!');
  })
  .catch(err => {
    console.log('Disaster! Something went wrong! ');
    console.log(err);
  })
  .finally(() => {
    db.close();
  });
