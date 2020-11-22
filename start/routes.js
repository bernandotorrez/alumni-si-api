'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const { validate, validator } = use('Validator')

Route.get('/', () => {
  return { 
    v1: {
      routeList: [
        {
          Alumni: [
            {
              route: '/api/v1/alumni',
              method: 'GET',
              desc: 'Get All Data Alumni'
            },
            {
              route: '/api/v1/alumni/{nim}',
              method: 'GET',
              desc: 'Get One Data Alumni by NIM'
            },
            {
              route: '/api/v1/alumni/create',
              method: 'POST',
              desc: 'Create Data Alumni'
            },
            {
              route: '/api/v1/alumni/edit/{nim}',
              method: 'PATCH',
              desc: 'Update Data Alumni By NIM'
            },
            {
              route: '/api/v1/alumni/delete/{nim}',
              method: 'DELETE',
              desc: 'Delete Data Alumni By NIM'
            },
          ]
        },
        {
          Fakultas: [
            {
              route: '/api/v1/fakultas',
              method: 'GET',
              desc: 'Get All Data Fakultas'
            },
            {
              route: '/api/v1/fakultas/{id}',
              method: 'GET',
              desc: 'Get One Data Fakultas By ID'
            },
            {
              route: '/api/v1/fakultas/create',
              method: 'POST',
              desc: 'Create Data Fakultas'
            },
            {
              route: '/api/v1/fakultas/edit/{id}',
              method: 'PATCH',
              desc: 'Update Fakultas Data By ID'
            },
            {
              route: '/api/v1/fakultas/delete/{id}',
              method: 'DELETE',
              desc: 'Delete Data Alumni By ID'
            },
          ]
        }

      ]
    }
    
 }
})

Route.group(() => {

  /**
   * Alumni Route
   */
  Route.get('/alumni', 'AlumniController.index'),
  Route.get('/alumni/:nim', 'AlumniController.getOne')
  Route.post('/alumni/create', 'AlumniController.create').validator('CreateAlumni')
  Route.patch('/alumni/edit/:nim', 'AlumniController.edit').validator('UpdateAlumni')
  Route.delete('/alumni/delete/:nim', 'AlumniController.delete')


  /**
   * Fakultas Route
   */
  Route.get('/fakultas', 'FakultasController.index')
  Route.get('/fakultas/:id', 'FakultasController.getOne')
  Route.post('/fakultas/create', 'FakultasController.create').validator('CreateFakultas')
  Route.patch('/fakultas/edit/:id', 'FakultasController.edit').validator('CreateFakultas')
  Route.delete('/fakultas/delete/:id', 'FakultasController.delete')

}).prefix('/api/v1')
