import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import classes from "./MajorProjects.module.css";
import MajorProject from "./MajorProject/MajorProject";
import ContentPadding from "../ContentPadding/ContentPadding";

const MajorProjects = (props) => {
  const { elementRef } = props;

  const [isLoadingImages, setIsLoadingImages] = useState(true);
  const [projectHubImages, setProjectHubImages] = useState([]);
  const [algalysisImages, setAlgalysisImages] = useState([]);

  useEffect(() => {
    async function fetchProjectHubImages() {
      const tempImages = [];
      for (let i = 1; i <= 16; i++) {
        const image = await import(
          `../../assets/ProjectScreenshots/ProjectHub/projectHub_${i}.jpg`
        );
        tempImages.push(image.default);
      }
      return tempImages;
    }

    async function fetchAlgalysisImages() {
      const tempImages = [];
      for (let i = 1; i <= 6; i++) {
        const image = await import(
          `../../assets/ProjectScreenshots/Algalysis/Screenshot_${i}.jpg`
        );
        tempImages.push(image.default);
      }
      return tempImages;
    }

    async function loadImages() {
      setIsLoadingImages(true);
      const projectHubImages = await fetchProjectHubImages();
      const algalysisImages = await fetchAlgalysisImages();

      setProjectHubImages(projectHubImages);
      setAlgalysisImages(algalysisImages);

      setIsLoadingImages(false);
    }

    loadImages();
  }, []);

  const projectHubInfo = {
    projectName: "ProjectHub",
    projectDescriptionWithoutName:
      "is a project management platform that allows you to organize and track your projects, tasks, and team members. With intuitive features for managing changes, tracking metrics, and providing insightful project and user statistics, ProjectHub ensures efficient collaboration and project execution.",
    projectGithubLink: "https://github.com/nguyensongvo2652001/Project-Hub",
    projectLiveWebsiteLink: "https://project-hub.onrender.com",
    projectLiveWebsiteAdditionalInfo:
      "Use user1@example.com as email and someThing2605! as password to login",
    projectImages: projectHubImages,
  };

  const algalysisInfo = {
    projectName: "Algalysis",
    projectDescriptionWithoutName:
      " is a full-stack machine learning project designed to analyze algorithmic questions and provide users with valuable insights. It offers information on the complexity, difficulty level, recommended techniques, and related problems for each question.",
    projectGithubLink: "https://github.com/nguyensongvo2652001/Algalysis",
    projectImages: algalysisImages,
  };

  const allProjects = [projectHubInfo, algalysisInfo];

  const [currentProjectName, setCurrentProjectName] = useState("ProjectHub");

  const projectOptions = ["ProjectHub", "Algalysis"];

  return (
    <div className={classes.majorProjects__container} ref={elementRef}>
      {!isLoadingImages && (
        <ContentPadding>
          <SectionTitle title="Major Projects" />
          <p className={classes.majorProjects__metaInfo}>
            Below are some of the noteworthy projects that I have completed.
          </p>
          <ul className={classes.majorProjects__optionButtons}>
            {projectOptions.map((option, index) => {
              const isActive = option === currentProjectName;
              let buttonClass = `${classes.majorProjects__optionButton}`;
              if (isActive) {
                buttonClass = `${classes["majorProjects__optionButton--active"]}`;
              }
              return (
                <li
                  className={classes.majorProjects__optionButtonContainer}
                  key={index}
                >
                  <button
                    className={buttonClass}
                    onClick={() => {
                      setCurrentProjectName(option);
                    }}
                  >
                    {option}
                  </button>
                </li>
              );
            })}
          </ul>

          {allProjects.map((project) => {
            if (project.projectName === currentProjectName) {
              return <MajorProject {...project} />;
            }
          })}
        </ContentPadding>
      )}
    </div>
  );
};

export default MajorProjects;
