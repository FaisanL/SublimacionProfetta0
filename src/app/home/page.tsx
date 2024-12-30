import Image from "next/image";
import styles from "./home.module.css";
import AccordionComp from "../components/accordion";
import clsx from "clsx";
export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center justify-center w-3/4 text-center">
            <p className="text-2xl">
              Lorem ipsum dolor sit amet consectetur. In pulvinar senectus quam
              sed congue id felis facilisi hac. Quam mi sed porttitor eget
              proin. Sed iaculis sed ipsum urna ante amet. Ornare pharetra ipsum
              et odio sit metus pulvinar urna purus. Eget enim posuere quis
              integer. Aenean tempor consectetur in integer. Natoque eget arcu
              pretium tellus curabitur. Sit est odio tempus commodo metus nulla.
              Massa non arcu cursus cursus urna id vel pulvinar amet. Risus
              sapien volutpat cursus id habitant tristique amet viverra ac.
              Justo sodales tempor commodo ullamcorper tempus id. Cursus amet
              viverra ultricies odio etiam nec. Vitae amet faucibus eu nibh. Et
              elit quis elementum volutpat consectetur augue nisi varius.
              Fringilla vulputate faucibus tortor aliquet maecenas. Proin mauris
              fringilla tristique nunc. Lectus elementum nunc lobortis dui amet
              viverra maecenas. Ornare ultrices at amet arcu.
            </p>
          </div>
          <div className={styles.secTrabajos}>
            <div className={clsx(styles.box, "grid grid-cols-2 gap-2")}>
              <img src="ejemplo.png" alt="img" />
              <img src="ejemplo.png" alt="img" />
              <img src="ejemplo.png" alt="img" />
              <img src="ejemplo.png" alt="img" />
              <img src="ejemplo.png" alt="img" />
              <img src="ejemplo.png" alt="img" />
            </div>
          </div>
        </div>
        <br />
        <div className="flex justify-center items-center my-6 flex-col">
          <h2 className="my-6 text-2xl">Preguntas Frecuentes</h2>
          <AccordionComp />
        </div>
      </div>
    </>
  );
}
