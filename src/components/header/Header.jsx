import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={style.header}>
      <figure className={style.boxLogo}>
        <img src="/logo.png" alt="Logo" />
        <h1 className={style.logoTitle}>Médicos & Dentistas</h1>
      </figure>

      <button
        className={style.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <nav className={`${style.nav} ${menuOpen ? style.active : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li className={style.inscricao}><Link to="/inscricao">Seja Voluntário</Link></li>
        </ul>
      </nav>
    </header>
  )
}
