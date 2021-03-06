'use strict'

/*
|--------------------------------------------------------------------------
| AlumnusSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class AlumniSeeder {
  async run () {
    await Factory.model('App/Models/Alumni').createMany(200)
  }
}

module.exports = AlumniSeeder
