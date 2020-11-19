'use strict'

class CreateAlumni {
  get rules () {
    return {
      nim: 'required|min:10|max:10',
      nama: 'required|string|min:3|max:100',
      jenis_kelamin: 'required|in:L,P',
      tempat_lahir: 'required|string|min:3|max:25',
      tanggal_lahir: 'required|date|date_format:YYYY-MM-DD',
      no_hp: 'required|integer|min:10|max:15',
      alamat: 'required|string|min:6',
      angkatan_masuk: 'required|integer|min:4|max:4',
      fakultas: 'required|string|min:10|max:100',
      jurusan: 'required|string|min:5|max:50'
    }
  }

  async fails (errorMessages) {
    const { message, field, validation } = errorMessages[0]
    return this.ctx.response.status(400).send({
      httpStatus: 400,
      message: message,
      total: 0,
      data: field+' '+validation
    })
  }
}

module.exports = CreateAlumni
