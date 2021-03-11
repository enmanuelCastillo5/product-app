require('dotenv').config()
const app = require('./app')
const connectDb = require('./db/mongodb')
const { appConfig, dbConfig } = require('./config')




const initApp = async (appConfig, dbConfig) => {
    try {
        await connectDb(dbConfig)
        app.listen(appConfig.port, () => {
            console.log(`server run on the port ${appConfig.port}`)
        });
    } catch (error) {
        console.error(error)
        process.exit(0)
    }
}

initApp(appConfig, dbConfig)