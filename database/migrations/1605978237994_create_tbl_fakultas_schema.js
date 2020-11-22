'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateTblFakultasSchema extends Schema {
  up () {
    this.createIfNotExists('tbl_fakultas', (table) => {
      table.increments('id_fakultas')
      table.string('nama_fakultas', 100).notNullable()
      table.enu('status', [0, 1]).defaultTo(1)
      table.timestamps()
    })

    this.raw("INSERT INTO tbl_fakultas (nama_fakultas) VALUE ('Fakultas Ilmu Komputer')")
  }

  down () {
    this.dropIfExists('tbl_fakultas')
  }
}

module.exports = CreateTblFakultasSchema
