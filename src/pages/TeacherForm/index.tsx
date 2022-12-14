import React, { FormEvent, useState } from "react";
import {useNavigate} from 'react-router-dom';

import Input from "../../components/Input";
import PageHeader from "../../components/pageHeader";
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import Textarea from "../../components/Textarea";
import Select from "../../components/select";
import api from "../../services/api";


function TeacherForm() {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');


  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);

  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value }
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('/classes',{
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule: scheduleItems
    }).then(() => {
      alert("Cadastrado com sucesso");
      navigate('/proffy')
    }).catch(()=> {
      alert("Erro no cadastro");
    });

    

  }


  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Que incrivel que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input name="name"
              label="Nome Completo"
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />

            <Input
              type="url"
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => { setAvatar(e.target.value) }}
            />

            <Input
              type="tel"
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={(e) => { setWhatsapp(e.target.value) }}
            />

            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => { setBio(e.target.value) }}
            />

          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name="subject"
              label="Materia"
              value={subject}
              onChange={(e) => { setSubject(e.target.value) }}
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

            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={(e) => { setCost(e.target.value) }}
            />

          </fieldset>

          <fieldset>
            <legend>Horarios disponiveis
              <button type="button" onClick={addNewScheduleItem}>
                + novo horario
              </button>
            </legend>

            {
              scheduleItems.map((scheduleItem, index) => {
                return (
                  <div key={scheduleItem.week_day} className="schedule-item">
                    <Select
                      name="week_day"
                      label="Dia da semana"
                      value={scheduleItem.week_day}
                      onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                      name="from"
                      label="Das"
                      type="time"
                      value={scheduleItem.from}
                      onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                    />
                    <Input
                      name="to"
                      label="Até"
                      type="time"
                      value={scheduleItem.to}
                      onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                    />
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
            <button type="submit">
              Salvar cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm;