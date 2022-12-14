import React, { useState,useEffect } from 'react';
import logoImg from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';
import StudyIcon from '../../assets/images/icons/study.svg';
import giveclassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import { Link } from "react-router-dom";

import './styles.css';
import api from '../../services/api';

function Landing(){

  const [totalConnections, setotalConnections] = useState(0);

  useEffect(()=>{
    api.get('/connections').then(response =>{
      const {total} = response.data;
      setotalConnections(total);
    })
  },[])


  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img 
        src={landing} 
        alt="Plataforma de estudos" 
        className="hero-image" 
        />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={StudyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveclassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>
        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  )
}

export default Landing;