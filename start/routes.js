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
          route: '/api/v1/alumni',
          method: 'GET',
          desc: 'Get All Data Alumni'
        },
        {
          route: '/api/v1/alumni/{nim}',
          method: 'GET',
          desc: 'Get One Data Alumni'
        },
        {
          route: '/api/v1/alumni/create',
          method: 'POST',
          desc: 'Create Alumni Data' 
        },
        {
          route: '/api/v1/alumni/edit/{nim}',
          method: 'PATCH',
          desc: 'Update Alumni Data By NIM' 
        },
        {
          route: '/api/v1/alumni/delete/{nim}',
          method: 'DELETE',
          desc: 'Delete Alumni Data By NIM' 
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

}).prefix('/api/v1')
