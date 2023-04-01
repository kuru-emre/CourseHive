import mongoose from 'mongoose'

export const connectToMongo = async () => {
  const { connection } = await mongoose.connect(process.env.DB_CONN_STRING!)

  console.log(`Successfully connected to Mongo.`)

  return connection
}
