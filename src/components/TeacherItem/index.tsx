import React from "react";
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars.githubusercontent.com/u/65466371?v=4" alt="Igor Guariroba" />
            <div>
              <strong>Igor Ravel Guariroba</strong>
              <span>Arquitetura de Software</span>
            </div>
          </header>
          <p>
            Entusiasta das melhores tecnologias de software.
            <br />
            Apaixonado por performace e design de software em linguagens multiparadigma, mais 1 milhão de alunos formados e atuando no mercado de trabalho levando performace e inovação para os seus clientes.
          </p>
          <footer>
            <p>
              Preço/hora 
              <strong>R$ 180,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
          </footer>
        </article>
  );
}

export default TeacherItem;