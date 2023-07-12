import Reveal from "../../Reveal/Reveal";
import classes from "./SkillBox.module.css";

const SkillBox = (props) => {
  return (
    <li className={classes.skillBox}>
      <Reveal>
        <ion-icon name={props.iconName}></ion-icon>
      </Reveal>

      <Reveal>
        <p className={classes.skillBox__title}>{props.title}</p>
      </Reveal>

      <Reveal>
        <ul className={classes.skillBox__list}>
          {props.skills.map((skillInfo, index) => {
            let allClasses = `${classes.skillBox__skill} `;
            if (skillInfo.mainSkill) {
              allClasses += ` ${classes.skillBox__mainSkill}`;
            }
            let text = `${skillInfo.name}`;
            if (index !== props.skills.length - 1) {
              text += ", ";
            }
            return (
              <li key={index} className={allClasses}>
                {text}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </li>
  );
};

export default SkillBox;
