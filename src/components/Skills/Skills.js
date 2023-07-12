import ContentPadding from "../ContentPadding/ContentPadding";
import Reveal from "../Reveal/Reveal";
import SectionTitle from "../SectionTitle/SectionTitle";
import SkillBox from "./SkillBox/SkillBox";
import classes from "./Skills.module.css";

const Skills = (props) => {
  const skillsInfo = [
    {
      iconName: "brush-outline",
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          mainSkill: true,
        },
        {
          name: "CSS",
          mainSkill: true,
        },
        {
          name: "Javascript",
          mainSkill: true,
        },
        {
          name: "React",
          mainSkill: true,
        },
      ],
    },
    {
      iconName: "server-outline",
      title: "Backend",
      skills: [
        {
          name: "NodeJS",
          mainSkill: true,
        },
        {
          name: "MongoDB",
          mainSkill: true,
        },
        {
          name: "SQL",
          mainSkill: true,
        },
        {
          name: "Golang",
          mainSkill: false,
        },
        {
          name: "Flask",
          mainSkill: false,
        },
      ],
    },
    {
      iconName: "settings-outline",
      title: "Machine Learning",
      skills: [
        {
          name: "Python",
          mainSkill: true,
        },
        {
          name: "Tensorflow",
          mainSkill: true,
        },
        {
          name: "Scikit-learn",
          mainSkill: true,
        },
      ],
    },
    {
      iconName: "library-outline",
      title: "Other",
      skills: [
        {
          name: "Prometheus",
          mainSkill: false,
        },
        {
          name: "Grafana",
          mainSkill: false,
        },
        {
          name: "Redis",
          mainSkill: false,
        },
      ],
    },
  ];

  return (
    <div className={classes.skills__container} ref={props.elementRef}>
      <ContentPadding>
        <SectionTitle title="Skills" />
        <div className={classes.skills__content}>
          <div className={classes.skills__textbox}>
            <Reveal>
              <p>
                As a full-stack web developer, I can work well in both frontend
                and backend development using a range of technologies. I also
                have a strong interest in exploring machine learning and data
                science{" "}
              </p>
            </Reveal>
          </div>

          <ul className={classes.skills__skillBoxes}>
            {skillsInfo.map((skillInfo, index) => {
              return <SkillBox key={index} {...skillInfo} />;
            })}
          </ul>
        </div>
      </ContentPadding>
    </div>
  );
};

export default Skills;
