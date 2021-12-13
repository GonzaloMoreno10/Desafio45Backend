'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarritoSchema extends Schema {
  up () {
    this.create('carritos', (table) => {
      table.increments()
      table.integer('userId')
      table.timestamps('created_at')
    })
  }

  down () {
    this.drop('carritos')
  }
}

module.exports = CarritoSchema
