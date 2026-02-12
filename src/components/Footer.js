const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <span>Created with</span>
      <i className="fa-solid fa-heart heart"></i>

      <a
        href="https://www.linkedin.com/in/sureshder/"
        target="_blank"
        rel="noreferrer"
        title="Suresh Derangula's Linkedin Profile"
      >
        Suresh Derangula
      </a>

      <span className="divider">•</span>

      <span>© {year}</span>

      <a
        href="https://github.com/sureshcod"
        target="_blank"
        rel="noreferrer"
        title="D-Foods"
      >
        <strong>
          D<span>Foods</span>
        </strong>
      </a>
    </div>
  );
};

export default Footer;
