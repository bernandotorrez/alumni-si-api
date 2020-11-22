'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Alumni extends Model {
    static get incrementing() {
        return false
    }

    static get primaryKey() {
        return 'nim'
    }

    static get table() {
        return 'tbl_alumni'
    }

    static get hidden() {
        return ['status']
    }

    static scopeActive(builder) {
        return builder.where('status', '1')
    }
}

module.exports = Alumni
