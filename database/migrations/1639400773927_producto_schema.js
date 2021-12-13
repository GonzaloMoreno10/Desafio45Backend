'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductoSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.string('title',80)
      table.string('description',200)
      table.integer('code')
      table.string('image',80)
      table.integer('price')
      table.integer('stock')
      table.integer('enabled')
      table.timestamps('created_at')
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductoSchema
