import { useState, useEffect } from 'react';
import s from "../styles/team.module.scss";


const Team = () => {
  const [team, setTeam] = useState([])

  const loadTeam = async () => {
    const response = await fetch('/api/team')
    const result = await response.json()
    console.log(result)
    setTeam(result.team)
  }
  useEffect(() => {
    loadTeam()
  }, []);


  return (
    <section className={s.team}>
      <div className="container">
        <h2 className={s.team__title}>Our team</h2>
        <ul className={s.team__list}>
          {team &&
            team.map(member => (
              <li className={s.team__item} key={member._id}>
                <img src={member.photo} alt={member.name}
                  width='450' height='460' className={s.team__image} />
                <div className={s.team_member}>
                  <p className={s.team_member__name}>{member.name} </p>
                  <span className={s.team_member__function}>{member.role} </span>
                  <ul className={s.social_list}>
                    <li className={s.social_list__item}>
                      <a href={member.instagram} className={s.social_list__instagram}>
                      </a>
                    </li>
                    <li className={s.social_list__item}>
                      <a href={member.twitter} className={s.social_list__twitter}>
                      </a>
                    </li>
                    <li className={s.social_list__item}>
                      <a href={member.facebook} className={s.social_list__facebook}>
                      </a>
                    </li>
                    <li className={s.social_list__item}>
                      <a href={member.linkedin} className={s.social_list__linkedin}>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
};

export default Team;
