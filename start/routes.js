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
  return { routeList: [
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
    }
  ] }
})

Route.group(() => {

  /**
   * Alumni Route
   */
  Route.get('/alumni', 'AlumniController.index'),
  Route.get('/alumni/:nim', 'AlumniController.getOne')
  Route.post('/alumni/create', 'AlumniController.create').validator('CreateAlumni')

}).prefix('/api/v1')
