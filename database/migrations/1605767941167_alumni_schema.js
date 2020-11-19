'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlumniSchema extends Schema {
  up () {
    this.create('alumni', (table) => {
      table.string('nim', 10).notNullable().primary()
      table.string('nama', 100).notNullable()
      table.enu('jenis_kelamin', ['L', 'P']).notNullable()
      table.string('tempat_lahir', 25).notNullable()
      table.date('tanggal_lahir').notNullable()
      table.string('no_hp', 15).notNullable()
      table.text('alamat').notNullable()
      table.string('angkatan_masuk', 4).notNullable()
      table.string('fakultas', 100).notNullable()
      table.string('jurusan', 50).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('alumni')
  }
}

module.exports = AlumniSchema
