const PersonalLinks = () => {
  return (
    <div>
      <div className="personalLinks">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://mohamadtahakasir.github.io/"
          aria-label="Open Portfolio (new tab)"
        >
          Portfolio
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/mohamadtahakasir"
          aria-label="Open Linkedin (new tab)"
        >
          Linkedin
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/mohamadtahakasir"
          aria-label="Open Github (new tab)"
        >
          Github
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/your-number"
          aria-label="Open Whatsapp (new tab)"
        >
          Whatsapp
        </a>
      </div>
    </div>
  );
};

export default PersonalLinks;
