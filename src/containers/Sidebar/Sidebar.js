import React from "react";

import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";

import { ReactComponent as PreviewLogo } from "./preview.svg";
import { ReactComponent as ActiviteitenLogo } from "./activiteiten.svg";
// import { ReactComponent as MenuLogo } from "./menu.svg";
// import { ReactComponent as MediaLogo } from "./media.svg";
// import { ReactComponent as SignaalLogo } from "./signaal.svg";
// import { ReactComponent as UpdatesLogo } from "./updates.svg";
// import { ReactComponent as UserlistLogo } from "./userlist.svg";
import { ReactComponent as UitloggenLogo } from "./uitloggen.svg";



import style from "./Sidebar.module.css";

const Sidebar = () => {


  return (
    <section className={style.container}>
      <header className={style.header}>
        <h2 className={style.title}>Heilig Hart</h2>
      </header>
      <section className={style.navigation}>
        
        <Link className={style.navItem} activeClassName={style.navItem__active} to={ROUTES.overzicht}>
         <PreviewLogo />
          <p className={style.navText}>Overzicht</p>
        </Link>

        <Link className={style.navItem} activeClassName={style.navItem__active} to={ROUTES.activiteiten}>
          <ActiviteitenLogo />
          <p className={style.navText}>Activiteiten</p>
        </Link>
      </section>

      <section className={style.bottomNavigation}>
        <Link className={style.navItem} to={ROUTES.uitloggen}>
          <UitloggenLogo />
          <p className={style.navText}>Uitloggen</p>
        </Link>
      </section>
    </section>
  )
};

export default Sidebar;
