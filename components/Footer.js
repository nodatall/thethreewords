import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      padding: '20px',
      textAlign: 'center',
      color: 'white',
    }}>
      <a href="https://twitter.com/7heThreeWords" target="_blank" rel="noopener noreferrer" style={{color: 'white', textDecoration: 'none'}}>
        Find us on Twitter
      </a>
    </footer>
  );
}
