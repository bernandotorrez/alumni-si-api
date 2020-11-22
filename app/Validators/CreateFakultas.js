'use strict'

class CreateFakultas {
  get rules () {
    return {
      nama_fakultas: 'required|string|min:6|max:100'
    }
  }

  async fails (errorMessages) {
    const { message, field, validation } = errorMessages[0]
    return this.ctx.response.status(400).send({
      httpStatus: 400,
      message: 'error_validation',
      total: 0,
      data: message
    })
  }
}

module.exports = CreateFakultas
