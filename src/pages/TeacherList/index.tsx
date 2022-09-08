import React from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/pageHeader";
import Select from "../../components/select";
import TeacherItem from "../../components/TeacherItem";

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys diponiveis.">
        <form id="search-teachers">

        <Select 
          name="subject" 
          label="Materia" 
          options={[
            {value: '1', label: 'Mecanico => Carros'},
            {value: '2', label: 'Borracheiro => Carros'},
            {value: '3', label: 'Pintor => Carros'},
            {value: '4', label: 'Pintor => Casa'},
            {value: '5', label: 'Jardineiro => condomínios'},
            {value: '6', label: 'Eletricista => Casa'},
            {value: '7', label: 'Gesseiro => Casa'},
          ]}
          />
          <Select 
          name="week_day" 
          label="Dia da semana" 
          options={[
            {value: '0', label: 'Domingo'},
            {value: '1', label: 'Segunda-feira'},
            {value: '2', label: 'Terça-feira'},
            {value: '3', label: 'Quarta-feira'},
            {value: '4', label: 'Quinta-feira'},
            {value: '5', label: 'Sexta-feira'},
            {value: '6', label: 'Sabado'},
          ]}
          />
          <Input type="time" name="time" label="Hora" />

        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList;