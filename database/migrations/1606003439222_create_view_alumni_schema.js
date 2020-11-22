'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateViewAlumniSchema extends Schema {
  _queryUp = `
      CREATE VIEW IF NOT EXISTS view_alumni
      AS
      SELECT ta.*, tf.nama_fakultas, tj.nama_jurusan
      FROM tbl_alumni ta
      INNER JOIN tbl_fakultas tf ON tf.id_fakultas = ta.id_fakultas
      INNER JOIN tbl_jurusan tj ON tj.id_jurusan = ta.id_jurusan
      WHERE tf.status = '1' AND tj.status = '1' AND ta.status = '1'
    `

    _queryDown = `
      DROP VIEW IF EXISTS view_alumni
    `

  up () {
    this.raw(this._queryUp)
  }

  down () {
    this.raw(this._queryDown)
  }
}

module.exports = CreateViewAlumniSchema
