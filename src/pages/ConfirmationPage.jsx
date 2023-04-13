import GreenButton from "../components/GreenButton";
import styles from "./ConfirmationPage.module.css";
import logo from "../assets/logo.svg";

function Confirmation() {
  return (
    <div className={styles.confirmationPage}>
      <h1>
        Tack <br /> för din beställning
      </h1>
      <img src={logo} />
      <GreenButton />
    </div>
  );
}

export default Confirmation;
