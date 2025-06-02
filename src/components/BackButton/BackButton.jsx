import { NavLink } from "react-router-dom";
import css from "./BackButton.module.css";

export default function BackButton({ to }) {
  return (
    <NavLink to={to} className={css.button}>
      Go back
    </NavLink>
  );
}
