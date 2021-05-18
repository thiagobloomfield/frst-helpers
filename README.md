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
   * [Uso](#Uso)
   * [Classes](#Classes)
      * [ModelUtils](#ModelUtils)
      * [MailService](#MailService)
<!--te-->

Instalação
============

```bash
npm i frst-helpers
```

Uso
============

Para usar basta importar o nome da classe desejada

ES6

```bash
import { ModelUtils, MailService } from 'frst-helpers'
```

ES5

```bash
const { ModelUtils, MailService } = require('frst-helpers')
```

Classes
============

ModelUtils
-----

Classe para auxiliar o uso de model pelo sequelize

Parâmetros:
- valores: (array) array com valores a serem inseridos no model
- condicao: (object) condição para serem inseridos

```bash
const modelUtils = new ModelUtils(ReferenciaModulo)
modelUtils.updateOrCreate(valores, condicao)
```
        

MailService
-----

Classe para enviar email pelo vero

Parâmetros:
- urlDoVero: (string) url do vero
- tokenDoVero: (string) token de acesso ao vero
- objDados: (object) objeto para envio de email
- nomeDoEvento: (string) nome do evento cadastrado no vero

```bash
const mailService = new MailService(urlDoVero, tokenDoVero)
mailService.sendMail(objDados, nomeDoEvento)
```        
