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
  {
    title: "vidio",
    githubLink: "https://github.com/jasurbek021/vidio",
    vercelLink: "https://vidio-one.vercel.app/",
  },
  {
    title: "Jacob Paulaner",
    githubLink: "https://github.com/jasurbek021/finish",
    vercelLink: "https://finsh-alpha.vercel.app/",
  },
  {
    title: "animatsya topmlam",
    githubLink: "https://github.com/jasurbek021/animatsaya",
    vercelLink: "https://animatsaya.vercel.app/",
  },
  {
    title: "CROWDFUN",
    githubLink: "https://github.com/jasurbek021/CROWDFUN",
    vercelLink: "https://crowdfun-sigma.vercel.app/",
  },
  {
    title: "imtxon 1",
    githubLink: "https://github.com/jasurbek021/1-oy-imthon",
    vercelLink: "https://imthon-rose.vercel.app/about.html",
  },
  {
    title: "imtxon 2",
    githubLink: "https://github.com/jasurbek021/designo",
    vercelLink: "https://designo-vert.vercel.app/index.html",
  },
  {
    title: "CREATEX",
    githubLink: "https://github.com/jasurbek021/contak",
    vercelLink: "https://contak.vercel.app/",
  },
  {
    title: "js mustaqil ish",
    githubLink: "https://github.com/jasurbek021/mustaqil-ish",
    vercelLink: "https://mustaqil-ish.vercel.app/",
  },
  {
    title: "js mustaqil ish 2 vazifa",
    githubLink: "https://github.com/jasurbek021/js-masalalar",
    vercelLink: "https://js-masalalar.vercel.app/",
  },
  {
    title: "js uy ish 12 for",
    githubLink: "https://github.com/jasurbek021/uy-ish-js",
    vercelLink: "https://uy-ish-js.vercel.app/",
  },
  {
    title: "js uy ish 48 masala",
    githubLink: "https://github.com/jasurbek021/js-masala-48",
    vercelLink: "https://js-masala-48.vercel.app/",
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
