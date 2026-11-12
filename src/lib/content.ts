export type SectionId = "home" | "about" | "education" | "skills" | "contact";

export interface NavLink {
  id: SectionId;
  label: string;
}

export interface Social {
  label: string;
  href: string;
  external?: boolean;
  icon?: "mail" | "facebook" | "instagram";
}

export const profile = {
  name: "Al Amin",
  location: "Bangladesh",
  status: "Class 11 Student",
  group: "Science",
  session: "2026–2027",
  email: "alaminpqpq8@gmail.com",
  headline: "Curious by nature. Learning by choice.",
  introduction:
    "Just a student exploring ideas, technology, and everything in between.",
  statement: "Always learning. Always becoming.",
};

export const navLinks: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const socials: Social[] = [
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/al.amin.543952",
    external: true,
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/alam.in8261/",
    external: true,
    icon: "instagram",
  },
];

export const skills = [
  "Quick Learner",
  "Problem Solving",
  "Teamwork",
  "Creativity",
];

export const languages = ["Bangla", "English"];

export const interests = [
  "Listening to Music",
  "Football",
  "Movies",
  "Anime",
  "Adventure",
];
