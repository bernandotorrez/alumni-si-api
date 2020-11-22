'use strict'

const FakultasModel = use('App/Models/TblFakultas')

class FakultasController {
    async index({response}) {
        const data = await FakultasModel.query().active().fetch()
        const count = data.rows.length

        if(count >= 1) {
            return response.status(200).json({
                httpStatus: 200,
                message: 'success',
                total: count,
                data: data
            })
        } else {
            return response.status(200).json({
                httpStatus: 200,
                message: 'no_data',
                total: 0,
                data: []
            })
        }
    }

    async getOne({params, response}) {
        const { id } = params
        const data = await FakultasModel.query().where('id_fakultas', id).active().fetch()
        const count = data.rows.length

        if(count >= 1) {
            return response.status(200).json({
                httpStatus: 200,
                message: 'success',
                total: 1,
                data: data.rows[0]
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

    async create({request, response}) {
        const { nama_fakultas } = request.post()
        const find = await FakultasModel.query().where('nama_fakultas', nama_fakultas).active().fetch()

        if(find.rows.length >= 1) {
            return response.status(200).json({
                httpStatus: 200,
                message: 'exist',
                total: 0,
                data: []
            }) 
        } else {
            const create = await FakultasModel.create(request.post())

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
        const { id } = params
        const find = await FakultasModel.query().where('id_fakultas', id).active().fetch()
   
        if(find.rows.length == 0) {
            return response.status(200).json({
                httpStatus: 404,
                message: 'not_found',
                total: 0,
                data: []
            }) 
        } else {
            const update = await FakultasModel.query().where('id_fakultas', id).active().update(request.post())

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
        const { id } = params
        const find = await FakultasModel.query().where('id_fakultas', id).active().fetch()
        
        if(find.rows.length == 0) {
            return response.status(200).json({
                httpStatus: 404,
                message: 'not_found',
                total: 0,
                data: []
            })
        } else {
            const destroy = await FakultasModel.query().where('id_fakultas', id).update({status: '0'})

            if(destroy) {
                return response.status(200).json({
                    httpStatus: 200,
                    message: 'delete_success',
                    total: 1,
                    data: id
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

module.exports = FakultasController
