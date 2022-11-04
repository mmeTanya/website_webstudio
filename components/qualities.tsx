import Image from 'next/image'
import s from "../styles/qualities.module.scss";


const Qualities = () => {

  return (
    <section className={s.qualities}>
      <div className='container'>
        <ul className={s.qualities__list}>
          <li className={s.qualities__item}>
            <div className={s.qualities__background_icon}>
              <Image src="/antenna.svg" alt="antenna" width="70" height="70" />
            </div>
            <h3 className={s.qualities__name}>ATTENTION TO DETAIL</h3>
            <p className={s.qualities__description}>Ideological considerations, as well as the beginning of daily work on the formation of a position.</p>
          </li>
          <li className={s.qualities__item}>
            <div className={s.qualities__background_icon}>
              <Image src="/clock.svg" alt="clock" width="70" height="70" />
            </div>
            <h3 className={s.qualities__name}>PUNCTUALITY</h3>
            <p className={s.qualities__description}>The task of the organization, in particular the framework and place of training of personnel entails.</p>
          </li>
          <li className={s.qualities__item}>
            <div className={s.qualities__background_icon}>
              <Image src="/diagram.svg" alt="diagram" width="70" height="70" />
            </div>
            <h3 className={s.qualities__name}>PLANNING</h3>
            <p className={s.qualities__description}>Similarly, consultation with a broad asset is largely conditional.</p>
          </li>
          <li className={s.qualities__item}>
            <div className={s.qualities__background_icon}>
              <Image src="/astronaut.svg" alt="astronaut" width="70" height="70" />
            </div>
            <h3 className={s.qualities__name}>MODERN TECHNOLOGIES</h3>
            <p className={s.qualities__description}>The role of technology would be to empower businesses with new and improved systems so that they can offer better products and services. </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Qualities;
