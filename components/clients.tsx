import s from "../styles/clients.module.scss";


const Clients = () => {

  return (
    <section className={s.clients}>
      <div className="container">
        <h2 className={s.clients__title}>OUR CLIENTS</h2>
        <ul className={s.clients__list}>
          <li className={s.clients__item}>
            <a href="" className={s.clients__client1} />
          </li>
          <li className={s.clients__item}>
            <a href="" className={s.clients__client2}/>
          </li>
          <li className={s.clients__item}>
            <a href="" className={s.clients__client3} />
          </li>
          <li className={s.clients__item}>
            <a href="" className={s.clients__client4} />
          </li>
          <li className={s.clients__item}>
            <a href="" className={s.clients__client5} />
          </li>
          <li className={s.clients__item}>
            <a href="" className={s.clients__client6} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Clients;
