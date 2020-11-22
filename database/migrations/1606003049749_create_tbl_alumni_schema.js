'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateTblAlumniSchema extends Schema {
  up () {
    this.createIfNotExists('tbl_alumni', (table) => {
      table.string('nim', 10).notNullable().primary()
      table.string('nama', 100).notNullable()
      table.enu('jenis_kelamin', ['L', 'P']).notNullable()
      table.string('tempat_lahir', 25).notNullable()
      table.date('tanggal_lahir').notNullable()
      table.string('no_hp', 15).notNullable()
      table.text('alamat').notNullable()
      table.string('angkatan_masuk', 4).notNullable()
      table.integer('id_fakultas', 10).unsigned().notNullable().references('id_fakultas').inTable('tbl_fakultas').onDelete('cascade')
      table.integer('id_jurusan', 10).unsigned().notNullable().references('id_jurusan').inTable('tbl_jurusan').onDelete('cascade')
      table.enu('status', [0, 1]).notNullable().defaultTo(1)
      table.timestamps()
    })
  }

  down () {
    this.dropIfExists('tbl_alumni')
  }
}

module.exports = CreateTblAlumniSchema
