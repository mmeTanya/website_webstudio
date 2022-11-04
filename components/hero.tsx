import Image from "next/image";
import { useState } from "react";
import ClientOnlyPortal from './clientOnlyPortal'
import Button from "../components/button";
import Modal from "../components/modal";
import s from "../styles/hero.module.scss";


const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className={s.hero}>
      <div className="container">
        <div className={s.hero__style}>
          <h1 className={s.hero__title}>
            EFFECTIVE SOLUTIONS  <br /> FOR YOUR BUSINESS
          </h1>
          <Button theme={'blue'} className={s.button} onClick={handleOpenModal} type={'button'} text={'Order service'} />
          {showModal && <ClientOnlyPortal selector="#modal"><Modal onClose={handleCloseModal} /></ClientOnlyPortal>}
        </div>
      </div>
    </section>
  );
};

export default Hero;
