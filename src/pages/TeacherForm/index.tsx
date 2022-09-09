import React, {useState} from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/pageHeader";
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import Textarea from "../../components/Textarea";
import Select from "../../components/select";


function TeacherForm() {
  const [scheduleItems, setScheduleItems ] = useState([
    {week_day: 0,from: '',to: ''}
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {week_day: 0,from: '',to: ''}
    ]);

  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Que incrivel que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome Completo" />
          <Input type="url" name="avatar" label="Avatar" />
          <Input type="tel" name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Biografia" />

        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            name="subject"
            label="Materia"
            options={[
              { value: '1', label: 'Mecanico => Carros' },
              { value: '2', label: 'Borracheiro => Carros' },
              { value: '3', label: 'Pintor => Carros' },
              { value: '4', label: 'Pintor => Casa' },
              { value: '5', label: 'Jardineiro => condomínios' },
              { value: '6', label: 'Eletricista => Casa' },
              { value: '7', label: 'Gesseiro => Casa' },
            ]}
          />
          <Input name="cost" label="Custo da sua hora por aula" />

        </fieldset>

        <fieldset>
          <legend>Horarios disponiveis
            <button type="button" onClick={addNewScheduleItem}>
              + novo horario
            </button>
          </legend>

          {
            scheduleItems.map(scheduleItem => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da semana"
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
                  <Input name="from" label="Das" type="time" />
                  <Input name="to" label="Até" type="time" />
                </div>
              );
            })
          }
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            !importante <br />
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm;