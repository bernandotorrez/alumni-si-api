'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateTblJurusanSchema extends Schema {
  up () {
    this.createIfNotExists('tbl_jurusan', (table) => {
      table.increments('id_jurusan')
      table.integer('id_fakultas', 10).unsigned().notNullable().references('id_fakultas').inTable('tbl_fakultas').onDelete('cascade')
      table.string('nama_jurusan', 100).notNullable()
      table.enu('status', [0, 1]).defaultTo(1)
      table.timestamps()
    })

    this.raw("INSERT INTO tbl_jurusan (id_fakultas, nama_jurusan) VALUE (1, 'Sistem Informasi')")
  }

  down () {
    this.dropIfExists('tbl_jurusan')
  }
}

module.exports = CreateTblJurusanSchema
