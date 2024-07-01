import 'dotenv/config'
import connectDB from "./db/index.js";
import app from './app.js';

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("Error: ", error)
            throw error
        })

        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server running on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log("mongodb connection error", error)
    })