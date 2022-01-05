import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout__header">
        <h1 className="layout__title">React Challenges</h1>
        <div className="layout__icons">
          <FaGithub className="layout__icon layout__icon--github" />
          <FaLinkedin className="layout__icon" />
        </div>
      </header>
      <main className="layout__main">{children}</main>
    </div>
  );
};

export default Layout;
