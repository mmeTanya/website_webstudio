import s from "../styles/contacts.module.scss";


const ContactsInfo = () => {

  return (
    <section className={s.contacts}>
      <div className="container">
        <h1 className={s.contacts__title}>Welcome to Our WebStudio !</h1>
        <div className={s.contacts__overlay}>
          <h2 className={s.contacts__title_paragraf}>We are located at the address:</h2>
          <p className={s.contacts__text}>Kyiv, 26 Lesia Ukrainka Ave</p>
          <p className={s.contacts__text}>Our phone: +38 096 111 11 11</p>
          <p className={s.contacts__text}>Or send email to adress: info@devstudio.com</p>
        </div>
        <div className={s.contacts__overlay}>
          <h2 className={s.contacts__title_paragraf}>Time of work</h2>
          <p className={s.contacts__text}>Monday - Thursday : 9 am - 7 pm</p>
          <p className={s.contacts__text}>Friday : 9 am - 5 pm</p>
        </div>
        <div className={s.contacts__overlay}>
          <h2 className={s.contacts__title_paragraf}>We will glad to see you in our WebStudio !</h2>
        </div>
      </div>
    </section>
  );
};

export default ContactsInfo;
