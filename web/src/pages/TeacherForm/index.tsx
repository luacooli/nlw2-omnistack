import React from 'react'

import PageHeader from '../../components/PageHeader';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrivel que voce quer dar aula."
        description="O primeiro passo e preencher esse formulario de inscricao"
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>

          <div className="input-block">
            <label htmlFor="name">Nome Completo</label>
            <input type="text" id="name" />
          </div>
          <div className="input-block">
            <label htmlFor="avater">Avatar</label>
            <input type="text" id="avatar" />
          </div>
          <div className="input-block">
            <label htmlFor="whatsapp">Whatsapp</label>
            <input type="text" id="whatsapp" />
          </div>
        </fieldset>
      </main>
    </div>
  )
}

export default TeacherForm;