import React, { useState, useEffect, useRef } from "react";
import Menu from "./Menu";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { BrandButtonDefault } from "../../library/Button";
import { useLocation } from "react-router-dom";

// const SignUpButton = () => {
//     const [visible, setVisible] = useState(false)

//     const displayMenu = () => {
//         setVisible(true)
//     }
//     const hideMenu = () => {
//         setVisible(false)
//     }
//     return <div className="block"
//         onMouseLeave={hideMenu}>
//         <Nav.Link
//             href="/login"
//             className="flex text-white xl:mr-6 sm:mr-8 md:mr-8 mr-4"
//             onMouseOver={displayMenu}
//         >
//             Yujin님, 환영합니다
//         </Nav.Link>
//         <Menu isVisible={visible} />
//     </div>
// }

const SignUpButton = () => {
  const location = useLocation();

  const [visible, setVisible] = useState(false);

  const displayMenu = () => {
    if (title == "Yujin님, 환영합니다") {
      console.log("sfhyess");
      setVisible(true);
    }
  };
  const hideMenu = () => {
    setVisible(false);
  };
  const [title, setTitle] = useState("Login");

  useEffect(() => {
    setTitle(JSON.parse(JSON.stringify(window.localStorage.getItem("title"))));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("title", title);
  }, [title]);

  const onClick = () => {
    setTitle("Yujin님, 환영합니다");
    setShowSignUpButton(false);
  };
  const [showSignUpButton, setShowSignUpButton] = useState(true);

  return (
    <React.StrictMode>
      <div className="flex xs:hidden items-center ml-auto">
        {showSignUpButton && (
          <Link to="/signup" className="mr-5">
            <BrandButtonDefault type="button" value="Sign up" />
          </Link>
        )}
        <div className="block" onMouseLeave={hideMenu}>
          <Nav.Link
            className="flex text-white xl:mr-6 sm:mr-8 md:mr-8 mr-4"
            onMouseOver={displayMenu}
            onClick={onClick}
          >
            {title}
          </Nav.Link>
          <Menu isVisible={visible} />
        </div>
      </div>
    </React.StrictMode>
  );
};

export default SignUpButton;
