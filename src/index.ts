import express from 'express';

const app = express();
app.use(express.json());

const apiRoutes = require("./routes/apiRoutes");

app.use('/api',apiRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`Server escuchando en el puerto ${PORT}`)
});
