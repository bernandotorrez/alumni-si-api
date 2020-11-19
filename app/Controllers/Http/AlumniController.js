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
        let data = await AlumniModel.find(nim)

        if(data) {
            return response.status(200).json({
                httpStatus: 200,
                message: 'success',
                total: 1,
                data: data
            })
        } else {
            return response.status(200).json({
                httpStatus: 400,
                message: 'not_found',
                total: 0,
                data: []
            })
        }
    }

    async create({request, response}) {
        const find = await AlumniModel.find(request.post().nim)

        if(find) {
            return response.status(200).json({
                httpStatus: 200,
                message: 'exist',
                total: 0,
                data: []
            })
        } else {
            const create = await AlumniModel.create(request.post())

            if(create) {
                return response.status(200).json({
                    httpStatus: 200,
                    message: 'create_success',
                    total: 1,
                    data: create
                })
            } else {
                return response.status(200).json({
                    httpStatus: 200,
                    message: 'create_failed',
                    total: 0,
                    data: []
                })
            }
        }
    }

    async edit({request, params, response}) {
        const find = await AlumniModel.find(params.nim)

        if(!find) {
            return response.status(200).json({
                httpStatus: 200,
                message: 'not_found',
                total: 0,
                data: []
            })
        } else {
            const update = await AlumniModel.query().where('nim', params.nim).update(request.post())

            if(update) {
                return response.status(200).json({
                    httpStatus: 200,
                    message: 'update_success',
                    total: 1,
                    data: request.post()
                })
            } else {
                return response.status(200).json({
                    httpStatus: 200,
                    message: 'update_failed',
                    total: 0,
                    data: []
                })
            }
        }
    }

    async delete({params, response}) {
        const find = await AlumniModel.find(params.nim)

        if(!find) {
            return response.status(200).json({
                httpStatus: 200,
                message: 'not_found',
                total: 0,
                data: []
            })
        } else {
            const destroy = await find.delete()

            if(destroy) {
                return response.status(200).json({
                    httpStatus: 200,
                    message: 'delete_success',
                    total: 0,
                    data: params.nim
                })
            } else {
                return response.status(200).json({
                    httpStatus: 200,
                    message: 'delete_failed',
                    total: 0,
                    data: []
                })
            }
        }
    }
}

module.exports = AlumniController
