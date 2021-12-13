'use strict'

const Carrito = use('App/Models/CarritoProducto')

class CarritoProductoController {

    async find({request, response}) {
        let { id,userId } = request.params;
        if(!id){
            const productos = await Carrito
            .query()
            .where('userId', userId)
            .fetch()
            response.status(201).json(productos);
        }
        else{
            let productos = await Carrito.findBy('userId',userId,'id_producto',id)
            response.status(201).json(productos);
        }
      }

      async add({request,response}){
          let {idProducto,userId} = request.params;
          const id_producto = idProducto
          const agregado = await Carrito.create({id_producto,userId});
          response.json(agregado)
          
      }

      async delete({request,response}){
          let {idProducto,userId} = request.params;
          let prod = await Carrito.findBy("userId",userId,'id_producto',idProducto)
          await prod.delete();
          response.json({msg:'Producto eliminado',producto:prod})
      }
}

module.exports = CarritoProductoController
