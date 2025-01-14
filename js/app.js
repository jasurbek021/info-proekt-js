const projects = [
  {
    title: "begraunt color",
    githubLink: "https://github.com/jasurbek021/begraunt-color",
    vercelLink: "https://begraunt-color.vercel.app/",
  },
  {
    title: "my key info",
    githubLink: "https://github.com/jasurbek021/key",
    vercelLink: "https://key-sand.vercel.app/",
  },
  {
    title: "madal",
    githubLink: "https://github.com/jasurbek021/madal",
    vercelLink: "https://madal.vercel.app/",
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
