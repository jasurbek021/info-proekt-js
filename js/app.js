const projects = [
  {
    title: "social-links-profile",
    githubLink: "https://github.com/jasurbek021/social-links-profile",
    vercelLink: "https://social-links-profile-ten-beige.vercel.app/",
  },
  {
    title: "blog-preview-card",
    githubLink: "https://github.com/jasurbek021/blog-preview-card",
    vercelLink: "https://blog-preview-card-six-jet.vercel.app/",
  },
];

const template = document.querySelector("template");
const worksList = document.querySelector(".works__list");

projects.forEach((project) => {
  const clone = template.content.cloneNode(true);

  const title = clone.querySelector(".works__list__title");
  const linkGithub = clone.querySelector(".works__list__link__github");
  const linkVercel = clone.querySelector(".works__list__link__vercel");

  title.textContent = project.title;
  linkGithub.href = project.githubLink;
  linkVercel.href = project.vercelLink;

  worksList.appendChild(clone);
});
