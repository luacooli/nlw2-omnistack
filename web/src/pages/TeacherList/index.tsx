import React from 'react'

import Input from '../../components/Input';
import Select from '../../components/Select';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses sao os proffys disponiveis.">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Materia"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Educacao Fisica', label: 'Educacao Fisica' },
              { value: 'Fisica', label: 'Fisica' },
              { value: 'Quimica', label: 'Quimica' },
              { value: 'Gramatica', label: 'Gramatica' },
              { value: 'Redacao', label: 'Redacao' },
              { value: 'Literatura', label: 'Literatura' },
              { value: 'Matematica', label: 'Matematica' },
              { value: 'Ciencias', label: 'Ciencias' },
              { value: 'Historia', label: 'Historia' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ingles', label: 'Ingles' },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              {value: '0', label: 'Domingo'},
              {value: '1', label: 'Segunda-feira'},
              {value: '2', label: 'Terca-feira'},
              {value: '3', label: 'Quarta-feira'},
              {value: '4', label: 'Quinta-feira'},
              {value: '5', label: 'Sexta-feira'},
              {value: '6', label: 'Sabado'},
            ]}
          />
          <Input name="time" type="time" label="Horario" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList;