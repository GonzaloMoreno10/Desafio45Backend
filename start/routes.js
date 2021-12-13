'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

const Producto = use('App/Models/Producto')


Route.group(() => {
    Route.post("/", "UsuarioController.store");
    Route.post("/login", "UsuarioController.login");
  }).prefix("api/v1/usuarios");

Route.group(() => {
    Route.get("/", "ProductoController.get");
    Route.post("/", "ProductoController.create");
    Route.put("/:id", "ProductoController.update");
    Route.delete("/:id", "ProductoController.delete");
  })
  .prefix("api/v1/productos")
  .middleware("auth")


  Route.group(() => {
    Route.get('/:userId/:id?', "CarritoProductoController.find");
    Route.post('/:userId/:idProducto', "CarritoProductoController.add");
    Route.delete('/:userId/:idProducto', "CarritoProductoController.delete");
  })
  .prefix("api/v1/carrito")
  .middleware("auth")
