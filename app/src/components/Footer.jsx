import '../App.scss';

function Footer() {
  return (
    <>
      <footer>
        <div className='footer-wrapper'>
          <a href='https://www.linkedin.com/in/thierrybeaulieu/'>
            <i className='fa-brands fa-linkedin'></i> LinkedIn
          </a>
          <a href='https://github.com/ThierryBeaulieu'>
            <i className='fa-brands fa-github'></i> Github
          </a>
          <a href='mailto:thierry.abeaulieu@gmail.com'>
            <i className='fa-regular fa-envelope'></i> thierry.abeaulieu@gmail.com
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
