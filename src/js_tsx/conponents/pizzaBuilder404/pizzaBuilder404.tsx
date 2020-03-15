import React from "react";
import { NavLink } from "react-router-dom";

interface Props {};

const page404: React.FC<Props> = props => {
  return (
    <section>
      <div>
        <NavLink to="/" className="page404__link">
          <img
            src={"assets/img/404.gif"}
            alt="page not found"
            className="page404__pic"
          />
        </NavLink>
      </div>
    </section>
  );
};

export default page404;
