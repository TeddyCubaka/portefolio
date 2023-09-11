import React, { useEffect, useState } from "react";
import { BsTelephone, BsCheckCircleFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { FiCopy } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { Link, animateScroll as scroll } from "react-scroll";

interface CopyType {
  mail: boolean;
  phone: boolean;
}

const Media = () => {
  const [buttonClass, setButtonClass] = useState("navigations_mobile");
  const [copy, setCopy] = useState<CopyType>({
    mail: false,
    phone: false,
  });

  return (
    <div className={buttonClass} id="navBar">
      <div
        onClick={() => {
          if (buttonClass === "navigations_mobile") {
            setButtonClass(buttonClass + " " + "navigations_mobile_focus");
          }
        }}
      >
        <div>
          <BiMenu size="40" />
        </div>
        <p onClick={() => setButtonClass("navigations_mobile")}></p>
        <div className="sidebar">
          <div
            className="w-full  m-3 pr-6 flex justify-end"
            onClick={() => setButtonClass("navigations_mobile")}
          >
            <TfiClose size="25" />
          </div>
          <Link
            activeClass="active"
            to="about"
            style={{ color: "black" }}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navigations_contents"
            onClick={() => setButtonClass("navigations_mobile")}
          >
            A propos
          </Link>
          <a
            href="#achievements"
            className="navigations_contents"
            onClick={() => setButtonClass("navigations_mobile")}
          >
            Réalisations
          </a>
          <a
            href="#career"
            className="navigations_contents"
            onClick={() => setButtonClass("navigations_mobile")}
          >
            parcours
          </a>
          <a
            href="#skills"
            className="navigations_contents"
            onClick={() => setButtonClass("navigations_mobile")}
          >
            Compétences
          </a>
          <div
            className="navigations_contents"
            onClick={() => {
              navigator.clipboard.writeText("+243 995 867 384");
              setCopy({ ...copy, phone: true });
              setTimeout(() => setCopy({ ...copy, phone: false }), 2000);
            }}
          >
            +243 995 867 384 {copy.phone ? <BsCheckCircleFill /> : <FiCopy />}
          </div>
          <div
            className="navigations_contents"
            onClick={() => {
              navigator.clipboard.writeText("teddycubaka96@gmail.com");
              setCopy({ ...copy, mail: true });
              setTimeout(() => setCopy({ ...copy, mail: false }), 2000);
            }}
          >
            teddycubaka96@gmail.com{" "}
            {copy.mail ? <BsCheckCircleFill /> : <FiCopy />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [showContacts, setShowContacts] = useState(false);
  const [copy, setCopy] = useState<CopyType>({
    mail: false,
    phone: false,
  });

  return (
    <div className="navbar z-20">
      <h1 className="font-bold text-3xl text-[#123853]" onClick={() => console.log(window.matchMedia("(max-width : 800px)"))}>
        Teddy Cubaka
      </h1>
      <nav className="navigations">
        <Link
          to="about"
          style={{ color: "black" }}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          A propos
        </Link>{" "}
        <Link
          to="achievements"
          style={{ color: "black" }}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Réalisations
        </Link>{" "}
        <Link
          to="career"
          style={{ color: "black" }}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          parcours
        </Link>{" "}
        <Link
          to="skills"
          style={{ color: "black" }}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Compétences
        </Link>
        <button
          onClick={() => {
            if (!showContacts) setShowContacts(true);
            else setShowContacts(false);
          }}
          className="ring"
        >
          <BsTelephone size="34px" />
        </button>
        {showContacts ? (
          <>
            <div
              onClick={() => setShowContacts(false)}
              className="sub_contacts_shown"
            ></div>
            <div className="contacts_shown">
              <div
                className=""
                onClick={() => {
                  navigator.clipboard.writeText("+243 995 867 384");
                  setCopy({ ...copy, phone: true });
                  setTimeout(() => setCopy({ ...copy, phone: false }), 2000);
                }}
              >
                {copy.phone ? <BsCheckCircleFill /> : <FiCopy />}
                +243 995 867 384{" "}
              </div>
              <div
                className=""
                onClick={() => {
                  navigator.clipboard.writeText("teddycubaka96@gmail.com");
                  setCopy({ ...copy, mail: true });
                  setTimeout(() => setCopy({ ...copy, mail: false }), 2000);
                }}
              >
                {copy.mail ? <BsCheckCircleFill /> : <FiCopy />}
                teddycubaka96@gmail.com{" "}
              </div>
            </div>
          </>
        ) : null}
      </nav>
      <Media />
    </div>
  );
}
