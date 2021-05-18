# frst-helpers

Classes

ModelUtils
    Uso:
        const modelUtils = new ModelUtils(ReferenciaModulo)
        modelUtils.updateOrCreate(valores, condicao)
            valores: (array) array com valores a serem inseridos no model
            condicao: condição para serem inseridos

MailService
    Uso:
        const mailService = new MailService(urlDoVero, tokenDoVero)
        mailService.sendMail(objDados, nomeDoEvento)
