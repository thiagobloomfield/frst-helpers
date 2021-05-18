const axios = require('axios')

class MailService {
  
  _mailUrl = null
  _veroToken = null

  constructor(mailUrl, veroToken) {
    this._setMailUrl(mailUrl)
    this._setVeroToken(veroToken)
  }

  _setMailUrl(value) {
    this._mailUrl = value
  }

  _setVeroToken(value) {
    this._veroToken = value
  }

  /**
   * 
   * @param {*} data 
   * @param {*} event_name 
   * @returns 
   */
  async sendMail(data, event_name) {
    try {
      const sendMailResponse = await axios.post(this._mailUrl,
        {
          auth_token: this._veroToken,
          identity: data,
          event_name: event_name,
          data: {}
        }
      )

      sendMailResponse.data.success = true;
      sendMailResponse.data.error = null;
      console.log(`Success: evento ${event_name} disparado com sucesso |`, data.email);
      return sendMailResponse.data
    } catch (errors) {
      const errorMessage = `Warning: Falha ao disparar evento ${event_name} para usuário ${data.email}`
      console.error(errors.message)
      throw new Error(errorMessage)
    }
  }
}

exports.MailService = MailService
