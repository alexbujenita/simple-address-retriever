import styles from './App.module.css';
import PostcodeSearch from './components/PostcodeSearch/PostcodeSearch';
import DurationSelector from './components/DurationSelector/DurationSelector';
import AddressSelector from './components/AddressSelector/AddressSelector';
import DisplayAddress from './components/DisplayAddress/DisplayAddress';
import PersonalAddress from './components/PersonalAddress/PersonalAddress';

function App() {

  return (
    <div className={styles.pageContainer}>
      <div className={styles.titleWrapper}>
      <h1 className={styles.pageTitle}>Address Search</h1>
      <p className={styles.pageSubTitle}>Please enter your address</p>
      </div>
      <PersonalAddress />
      <DurationSelector />
      <PostcodeSearch />
      <AddressSelector />
      <DisplayAddress />
    </div>
  );
}

export default App;
