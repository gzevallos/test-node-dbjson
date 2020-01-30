const express = require('express');
const app = express();
const method = require('method-override');


//view engine
app.set('view engine', 'ejs');
app.set('views', './src/views');

//middlewares de aplicación
app.use(express.urlencoded({ extended: false}));   // parsea la data que viene del formulario

//static resources
app.use(express.static('public'));

//method-override
app.use(method('_method'));

// routes
const staticRouter = require('./routes/static');
const productsRouter = require('./routes/products');

// muchas rutas ---- middleware
app.use('/', staticRouter);
app.use('/productos', productsRouter);

// ruta puntual
app.get('*', (req, res) => {
   res.render('error');
});


app.listen(3000, () => console.log('Server is running...'));