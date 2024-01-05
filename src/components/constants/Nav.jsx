import Facebook from "../assets/images/facebook.svg";
import Twitter from "../assets/images/twitter.svg";
import Instagram from "../assets/images/instagram.svg";
import footerIcon from "../assets/images/footerimage.svg";
// header
export const NavBar = [
  {
    name: "Academy",
    to: "/academy",
  },
  {
    name: "Community",
    to: "/community",
  },
  {
    name: "Blog",
    to: "/blog",
  },
  {
    name: "Events",
    to: "/events",
  },
  {
    name: "Faq",
    to: "/faq",
  },
];
// footer
export const arrayOfArrayOfObjects = [
  [
  
    {
      logo: footerIcon,
    },
    {
        content: "Visit our website",
      },
  ],
  [
    {
      heading: "Learn",
    },
    {
      name: "Blockchain",
      to: "/academy",
    },
    {
      community: "Community",
      to: "/academy",
    },
    {
      blog: "Blog",
      to: "/blog",
    },
    {
      events: "Events",
      to: "events",
    },
    {
      faq: "Faq",
      to: "faq",
    },
  ],
  [
    {
      heading: "explore",
    },
    {
      name: "Learn",
      to: "/academy",
    },
    {
      community: "Glossary",
      to: "/academy",
    },
    {
      blog: "Blog",
      to: "/blog",
    },
  ],
  [
    {
      heading: "support",
    },
    {
      name: "Help & FAQs",
      to: "/academy",
    },
    {
      community: "Contact us",
      to: "/academy",
    },
    {
      blog: "Platform Status",
      to: "/blog",
    },
  ],
  [
    {
      heading: "community",
      Facebook: Facebook,
      Twitter: Twitter,
      Insta: Instagram,
    },
  ],
];
