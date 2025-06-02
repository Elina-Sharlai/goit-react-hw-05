import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const getActiveLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  return (
    <div className={css.container}>
      <ul className={css.nav}>
        <li>
          <NavLink to="/" className={getActiveLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={getActiveLinkClass}>
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
