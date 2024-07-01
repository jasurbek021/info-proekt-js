const projects = [
  {
    title: " 5 oy 7 dars",
    githubLink: "https://github.com/jasurbek021/TO-DO--5.7.1-homework",
    vercelLink: "https://to-do-5-7-1-homework-ten.vercel.app/",
  },
  {
    title: " 5 oy 2dars",
    githubLink: "https://github.com/jasurbek021/5-oy-2-dars",
    vercelLink: "https://5-oy-2-dars-ecru.vercel.app/",
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
