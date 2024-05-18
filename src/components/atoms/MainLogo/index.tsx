import Logo from "@/assets/main-logo.svg";
import "./index.sass";

export const MainLogo = () => {
  return (
    <div className="main-logo">
      <a href="/" className="main-logo__link">
        <img src={Logo} alt="avia logo" className="main-logo__img" />
      </a>
    </div>
  );
};
