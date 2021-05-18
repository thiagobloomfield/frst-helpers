<p align="center">
  <a href="https://frstfalconi.com/">
    <img src="https://frstfalconi.com/wp-content/themes/frst-theme/img/logo-frst-completo2x.png" height="150" width="175" alt="FRSTFalconi" />
  </a>
</p>

<p align="center">NOSSO PROPÓSITO É REVOLUCIONAR O APRENDIZADO PARA GERAR IMPACTO POSITIVO NAS PESSOAS E NO MUNDO.</p>

Tabela de conteúdos
=================
<!--ts-->
   * [Instalação](#Instalação)
   * [Classes](#Classes)
      * [ModelUtils](#ModelUtils)
      * [MailService](#MailService)
<!--te-->

Instalação
============

```bash
npm i frst-helpers
```

Classes
============

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
