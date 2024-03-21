const projects = [
  {
    title: "Uzbekston",
    githubLink: "https://github.com/jasurbek021/uzbekiston",
    vercelLink: "https://uzb-pi.vercel.app/",
  },
  {
    title: "kard",
    githubLink: "https://github.com/jasurbek021/blog-prefik-card",
    vercelLink: "https://perfume-phi.vercel.app/",
  },
  {
    title: "i-info",
    githubLink: "https://github.com/jasurbek021/I-info",
    vercelLink: "https://i-info.vercel.app/",
  },
  {
    title: "PERFUME",
    githubLink: "https://github.com/jasurbek021/PERFUME",
    vercelLink: "https://perfume-phi.vercel.app/",
  },
  {
    title: "Makeremote work",
    githubLink: "https://github.com/jasurbek021/snap-finish",
    vercelLink: "https://snap-lime.vercel.app/",
  },
  {
    title: "splliter",
    githubLink: "https://github.com/jasurbek021/splliter",
    vercelLink: "https://splliter.vercel.app/",
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
