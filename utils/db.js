
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/marvaadi' , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.log('MongoDB connection error:', err);
});

module.exports = mongoose.connection;
