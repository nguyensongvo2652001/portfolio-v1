import ImagesCarousel from "../../ImagesCarousel/ImagesCarousel";
import Reveal from "../../Reveal/Reveal";
import classes from "./MajorProject.module.css";

const MajorProject = (props) => {
  const {
    projectName,
    projectDescriptionWithoutName,
    projectGithubLink,
    projectLiveWebsiteLink,
    projectLiveWebsiteAdditionalInfo,
    projectImages,
    projectTechnologiesUsed,
  } = props;

  return (
    <div className={classes.majorProject__container}>
      <Reveal>
        <p className={classes.majorProject__description}>
          <span>{projectName}</span> {projectDescriptionWithoutName}
        </p>
      </Reveal>

      <Reveal>
        <p className={classes.majorProject__technologyUsed}>
          Technologies used in this project: {projectTechnologiesUsed}
        </p>
      </Reveal>

      <Reveal>
        <a className={classes.majorProject__link} href={projectGithubLink}>
          Github link for this project
        </a>
      </Reveal>
      {projectLiveWebsiteLink && (
        <div className={classes.majorProject__liveWebsiteLinkContainer}>
          <Reveal>
            <a
              className={classes.majorProject__link}
              href={projectLiveWebsiteLink}
            >
              Live website link
            </a>
          </Reveal>
          {projectLiveWebsiteAdditionalInfo && (
            <Reveal>
              <p className={classes.majorProject__additionalInfo}>
                {projectLiveWebsiteAdditionalInfo}
              </p>
            </Reveal>
          )}
        </div>
      )}

      <Reveal>
        <p className={classes.majorProject__imageCarouselInfo}>
          Below are some screenshots I took from this project
        </p>
      </Reveal>
      <ImagesCarousel images={projectImages} />
    </div>
  );
};

export default MajorProject;
