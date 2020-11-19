'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')


Factory.blueprint('App/Models/Alumni', async (faker) => {
    return {
        nim: faker.natural(),
        nama: faker.name({nationality: 'en'}),
        jenis_kelamin: faker.pickone(['L', 'P']),
        tempat_lahir: faker.city(),
        tanggal_lahir: faker.birthday(),
        no_hp: faker.phone({formatted: false}),
        alamat: faker.address(),
        angkatan_masuk: faker.birthday({year: faker.year({min: 1960, max: 2002})}),
        fakultas: 'Fakultas Ilmu Komputer',
        jurusan: faker.pickone(['Sistem Informasi', 'Teknik Informaika', 'Manajemen Informatika'])
    }
})

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })
