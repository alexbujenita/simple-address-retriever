import Select from "../Select/Select";
import styles from './DurationSelector.module.css';

function DurationSelector() {
  const years = [...Array(21).keys()].map(option => `${option} year${option > 1? 's': ''}`);
  const months = [...Array(13).keys()].map(option => `${option} month${option > 1? 's': ''}`);

  return (
    <div>
      <p>How long have you lived at your current address?</p>
      <div className={styles.addressDuration}>
        <Select name="years" placeholder="Select years" options={years} />
        <Select name="months" placeholder="Select months" options={months} />
      </div>
    </div>
  );
}

export default DurationSelector;
