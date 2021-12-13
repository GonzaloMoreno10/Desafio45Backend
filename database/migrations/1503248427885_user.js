'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('usuarios', (table) => {
      table.increments()
      table.string('email', 80).unique()
      table.string('user', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamp('created_at')
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
