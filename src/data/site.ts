export const site = {
  name: "Farooq Zahid",
  role: "DevOps engineer and software developer",
  email: "farooqinfocus@gmail.com",
  linkedin: "https://www.linkedin.com/in/mfarooqzahid/",
  instagram: "https://instagram.com/mfarooqzahid.app",
  github: "https://github.com/mfarooqzahid",
};

export const hero = {
  heading: "I build, ship and run cloud infrastructure.",
  intro:
    "DevOps engineer and software developer. AWS, Terraform, Kubernetes and CI/CD, plus Flutter and Go for the application side.",
  primary: { label: "View projects", href: "/projects/" },
  secondary: { label: "Contact", href: "#contact" },
};

export const projectMenu = [
  {
    label: "All projects",
    description: "Every case study, DevOps and mobile.",
    href: "/projects/",
  },
  {
    label: "DevOps projects",
    description: "Cloud, delivery and infrastructure work.",
    href: "/projects/devops/",
  },
  {
    label: "Flutter projects",
    description: "Apps and games built with Flutter.",
    href: "/projects/flutter/",
  },
];

export interface Fact {
  label: string;
  value: string;
  accent?: boolean;
}

export const facts: Fact[] = [
  { label: "Role", value: "DevOps and cloud" },
  { label: "Also", value: "Flutter" },
  { label: "Location", value: "Pakistan" },
  { label: "Status", value: "Open to full-time roles", accent: true },
];

export const contact = {
  heading: "Open to full-time roles.",
  note: "Also available for freelance app work.",
};
