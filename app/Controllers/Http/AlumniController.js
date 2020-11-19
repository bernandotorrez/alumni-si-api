'use strict'

const AlumniModel = use('App/Models/Alumni')

const alumniModel = new AlumniModel()

class AlumniController {
    async index({response}) {
        let data = await AlumniModel.all()
        let count = data.rows.length;

        if(count >= 1) {
            return response.status(200).json({
                httpStatus: 200,
                message: 'success',
                total: count,
                data: data
            })
        } else {
            return response.status(200).json({
                httpStatus: 404,
                message: 'no_data',
                total: 0,
                data: []
            })
        }
    }

    async getOne({params, response}) {
        let { nim } = params
        let data = await AlumniModel.query().where('nim', nim).fetch()
        let count = data.rows.length

        if(count >= 1) {
            return response.status(200).json({
                httpStatus: 200,
                message: 'success',
                total: count,
                data: data.rows[0]
            })
        } else {
            return response.status(200).json({
                httpStatus: 400,
                message: 'no_data',
                total: count,
                data: []
            })
        }
    }
}

module.exports = AlumniController
