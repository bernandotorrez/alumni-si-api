'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TblJurusan extends Model {
    static get incrementing() {
        return true
    }

    static get primaryKey() {
        return 'id_jurusan'
    }

    static get foreignKey() {
        return 'id_fakultas'
    }

    static get table() {
        return 'tbl_jurusan'
    }

    static get hidden() {
        return ['status']
    }

    static scopeActive(builder) {
        return builder.where('status', '1')
    }
}

module.exports = TblJurusan
