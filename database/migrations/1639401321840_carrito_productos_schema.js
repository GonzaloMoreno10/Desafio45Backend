'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarritoProductosSchema extends Schema {
  up () {
    this.create('carrito_productos', (table) => {
      table.increments()
      table.integer('id_carrito')
      table.integer('id_producto')
      table.timestamps('created_at')
    })
  }

  down () {
    this.drop('carrito_productos')
  }
}

module.exports = CarritoProductosSchema
