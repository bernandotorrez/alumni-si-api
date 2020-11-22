'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TblFakultas extends Model {
    static get table() {
        return 'tbl_fakultas'
    }

    static get primaryKey() {
        return 'id_fakultas'
    }

    static get incrementing() {
        return true
    }
}

module.exports = TblFakultas
