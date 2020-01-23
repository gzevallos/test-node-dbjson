const express = require('express');
const app = express();


//view engine
app.set('view engine', 'ejs');
app.set('views', './src/views');



//static resources
app.use(express.static('public'));

// routes
const staticRoutes = require('./routes/static');

// muchas rutas ---- middleware
app.use('/', staticRoutes);

// ruta puntual
app.get('*', (req, res) => {
   res.render('error');
});


app.listen(3030, () => console.log('Server is running...'));