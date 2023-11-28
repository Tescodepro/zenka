import React from "react";

const social_links = [
  {
    link: "https://www.facebook.com/profile.php?id=100094383633224",
    target: "_blank",
    icon: "fa-brands fa-facebook-f",
    name: "Facebook",
  },
  {
    link: "https://twitter.com/zenkaeurope",
    target: "_blank",
    icon: "fa-brands fa-x-twitter",
    name: "Twitter",
  },
  {
    link: "https://www.linkedin.com/company/zenka-europe-uab",
    target: "_blank",
    icon: "fa-brands fa-linkedin",
    name: "LinkedIn",
  },
  // {
  //   link: "https://www.linkedin.com/",
  //   target: "_blank",
  //   icon: "fa-brands fa-linkedin-in",
  //   name: "Linkedin",
  // },
  // {
  //   link: "https://www.youtube.com/",
  //   target: "_blank",
  //   icon: "fa-brands fa-youtube",
  //   name: "Youtube",
  // },
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <a className="" key={i} href={l.link} target={l.target}>
          <span>
            <i className={`dark-icon ${l.icon}`}></i>
          </span>
        </a>
      ))}

    </>
  );
};

export default SocialLinks;

export function HeaderSocial() {
  return (
    <>
      {social_links.slice(0, 3).map((l, i) => (
        <li key={i}>
          <a href={l.link} target={l.target}>
            <i className={`dark-icon ${l.icon}`}></i>
          </a>
        </li>
      ))}
    </>
  );
}

export function SocialShare() {
  return (
    <>
      {social_links.slice(0, 3).map((l, i) => (
        <a key={i} href={l.link} target={l.target}>
          <i className={`dark-icon ${l.icon}`}></i>
        </a>
      ))}
    </>
  );
}
