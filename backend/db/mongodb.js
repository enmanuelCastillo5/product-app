const mongoose = require('mongoose');

mongoose.connection.on('open', () => {
  console.log('db conencted')
})
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };

const connectDb = async ({ host, port, dbName }) => {
    const uri = `mongodb://${host}:${port}/${dbName}`
    await mongoose.connect(uri, options)
}

module.exports = connectDb