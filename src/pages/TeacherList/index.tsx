import React, { FormEvent, useState } from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/pageHeader";
import Select from "../../components/select";
import TeacherItem, {Teacher} from "../../components/TeacherItem";
import api from "../../services/api";

import './styles.css';


function TeacherList() {
const [teachers,setTeachers] = useState([]);

  const [subject, setSubject] = useState("");
  const [week_day, setWeek_day] = useState("");
  const [time, setTime] = useState("");

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    setTeachers(response.data);

  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys diponiveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>

          <Select
            name="subject"
            label="Materia"
            value={subject}
            onChange={(e) => { setSubject(e.target.value) }}
            options={[
              { value: 'Programação', label: 'Programação' },
              { value: '1', label: 'Mecanico => Carros' },
              { value: '2', label: 'Borracheiro => Carros' },
              { value: '3', label: 'Pintor => Carros' },
              { value: '4', label: 'Pintor => Casa' },
              { value: '5', label: 'Jardineiro => condomínios' },
              { value: '6', label: 'Eletricista => Casa' },
              { value: '7', label: 'Gesseiro => Casa' },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={(e) => { setWeek_day(e.target.value) }}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sabado' },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(e) => { setTime(e.target.value) }}
          />

          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher)  => {
          return <TeacherItem key={teacher.id} teacher={teacher}/>;
        })}
      </main>
    </div>
  )
}

export default TeacherList;