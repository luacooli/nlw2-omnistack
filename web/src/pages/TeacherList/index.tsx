import React, { useState, FormEvent } from 'react'

import Input from '../../components/Input';
import Select from '../../components/Select';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import './styles.css';
import api from '../../services/api';

function TeacherList() {
  const [teachers, setTeachers] = useState([])
  const [subject, SetSubject] = useState('')
  const [week_day, SetWeekDay] = useState('')
  const [time, SetTime] = useState('')

  async function searchTeachers(e: FormEvent) {
    e.preventDefault()

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })

    setTeachers(response.data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses sao os proffys disponiveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Materia"
            value={subject}
            onChange={(e) => { SetSubject(e.target.value) }}
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
            value={week_day}
            onChange={(e) => { SetWeekDay(e.target.value) }}
            label="Dia da semana"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terca-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sabado' },
            ]}
          />
          <Input
            name="time"
            type="time"
            label="Horario"
            value={time}
            onChange={(e) => { SetTime(e.target.value) }}
          />

          <button type="submit">
            Filtrar
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </main>
    </div>
  )
}

export default TeacherList;