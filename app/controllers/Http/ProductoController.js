'use strict'

const Producto = use('App/Models/Producto')

class ProductoController {

    async get({ request,response }) {
        //const user = await auth.getUser();
       // console.log(user);
        const productos = await Producto.all()
        response.json(productos);
      }

    async delete({request,response}){
        const {id} = request.params
        console.log(id)
        const producto = await Producto.findOrFail(id)
        await producto.delete()
        response.json({msg:"Producto eliminado",producto:producto});
    }

    async create({request,response}){
        const {title,description,code,image,price,stock}  = request.all();
        console.log(title)
        console.log(description)
        const prod = await Producto.create({title,description,code,image,price,stock})
        response.json({msg:"Producto creado",producto:prod});
    }

    async update({request,response}){
        const {title,description,code,image,price,stock}  = request.all();
        const {id} = request.params
        const prod = await Producto.findOrFail(id)
        console.log(id)
        prod.title = title;
        prod.description = description;
        prod.code = code;
        prod.image = image;
        prod.price = price;
        prod.stock = stock;
        
        await prod.save()
        response.json({msg:'Producto actualizado',producto: prod})
    }

}

module.exports = ProductoController
