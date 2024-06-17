import { Dispatch, SetStateAction, useEffect } from "react";
import showProjectsStyle from "./ShowProjects.module.css";

interface ShowProjectsProps {
  props: Dispatch<SetStateAction<boolean>>;
}
type Repo = {
  name: string;
  html_url: string;
};

export const ShowProjects = ({ props }: ShowProjectsProps) => {
  useEffect(() => {
    adjustContentPositionRelativeToLi();
    getDataFromGithub();
  });

  const handleOnMouseLeave = () => {
    props(false);
  };

  const getDataFromGithub = async () => {
    await fetch("https://api.github.com/users/fredrikhov/repos")
      .then((response) => response.json())
      .then((data) => {
        const appendToDiv = document.getElementById("popover");
        data.forEach((repo: Repo) =>
          appendToDiv?.insertAdjacentHTML(
            "beforeend",
            `<li><a href=${repo.html_url}>${repo.name}</a></li>`
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const adjustContentPositionRelativeToLi = () => {
    const targetLi = document
      .getElementById("Projects")
      ?.getBoundingClientRect().x;

    const moveDiv = document.getElementById("projectsContainer");
    const moveArrow = document.getElementById("arrow");

    if (moveDiv && targetLi && moveArrow !== null) {
      moveDiv.style.transform = `translateX(${targetLi - 130}px)`;
      moveArrow.style.transform = `translateX(${targetLi - 20}px)rotate(45deg)`;
    }
  };
  return (
    <>
      <div id="arrow" className={showProjectsStyle.arrow}></div>
      <div
        className={showProjectsStyle.container}
        id="projectsContainer"
        onMouseLeave={handleOnMouseLeave}
      >
        <div className={showProjectsStyle.popover} id="popover">
          <h1>Github Projects</h1>
        </div>
      </div>
    </>
  );
};
