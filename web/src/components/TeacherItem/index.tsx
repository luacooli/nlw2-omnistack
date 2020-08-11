import React from 'react'

import whastappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/51122375?s=460&u=89a57a78839cd36a24cbdea65763c9a8598f2300&v=4" alt="Luana Correia" />
        <div>
          <strong>Luana Correia</strong>
          <span>Quimica</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de quimica avancada.
      <br /> <br />
      Apaixonada por explodir coisas laboratorio e mudar a vida de seus alunos atraves de experiencias incriveis
    </p>

      <footer>
        <p>
          Preco/hora
        <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whastappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
      </footer>
    </article>
  )
}

export default TeacherItem;