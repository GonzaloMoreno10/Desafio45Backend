'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MensajeSchema extends Schema {
  up () {
    this.create('mensajes', (table) => {
      table.increments()
      table.string('texto',100)
      table.string('nombre',100)
      table.string('apellido',100)
      table.integer('edad')
      table.string('alias',100)
      table.string('avatar',100)
      table.timestamps('created_at')
    })
  }

  down () {
    this.drop('mensajes')
  }
}

module.exports = MensajeSchema
