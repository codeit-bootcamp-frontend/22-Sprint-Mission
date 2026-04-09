import logo from "../assets/logo.svg";
import logoText from "../assets/logo_text.svg";
import profile from "../assets/ic_profile.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-375 mx-4 sm:mx-6 md:mx-auto my-0 md:px-6 flex items-center">
        <NavLink to="/">
          <img src={logo} alt="판다마켓 로고" className="hidden sm:block" />
          <img src={logoText} alt="판다마켓 로고" className="block sm:hidden" />
        </NavLink>
        <nav className="flex items-center flex-1 ml-2 sm:ml-8.25">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-1 sm:px-4 py-5 ${isActive ? "text-[#3692FF]" : "text-gray-700"}`
            }
          >
            자유게시판
          </NavLink>
          <NavLink
            to="/items"
            className={({ isActive }) =>
              `px-1 sm:px-4 py-5 ${isActive ? "text-[#3692FF]" : "text-gray-700"}`
            }
          >
            중고마켓
          </NavLink>
        </nav>
        <img src={profile} alt="프로필 이미지" />
      </div>
    </header>
  );
}
