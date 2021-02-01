import { CssBaseline } from '@material-ui/core';
import styles from './container.module.css';

export default function Container({ children }) {
  return (
    <div className={styles.container}>
      {children}
      <CssBaseline />
    </div>
  );
}
