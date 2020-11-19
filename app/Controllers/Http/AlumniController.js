'use strict'

const AlumniModel = use('App/Models/Alumni')

const alumniModel = new AlumniModel()

class AlumniController {
    async index({response}) {
        let data = await AlumniModel.all()
        let count = await AlumniModel.getCount('nim')
        return response.status(200).json({
            httpStatus: 200,
            message: 'success',
            total: count,
            data: data
        })
    }
}

module.exports = AlumniController
