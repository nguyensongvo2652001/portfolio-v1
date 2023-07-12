import classes from "./WorkExperience.module.css";
import ContentPadding from "../ContentPadding/ContentPadding";
import SectionTitle from "../SectionTitle/SectionTitle";
import Reveal from "../Reveal/Reveal";

const WorkExperience = (props) => {
  const { elementRef } = props;

  return (
    <div className={classes.workExperience__container} ref={elementRef}>
      <ContentPadding>
        <SectionTitle title="Work Experience" />

        <div className={classes.workExperience__content}>
          <p className={classes.workExperience__number}>
            <Reveal>01</Reveal>
          </p>

          <div className={classes.workExperience__companyInfo}>
            <Reveal>
              <p className={classes.workExperience__companyName}>Shopee</p>
            </Reveal>
            <Reveal>
              <p className={classes.workExperience__jobTitle}>
                Backend Developer Intern
              </p>
            </Reveal>

            <div className={classes.workExperience__durationContainer}>
              <Reveal>
                <label className={classes.workExperience__label}>
                  Duration:
                </label>
              </Reveal>
              <Reveal>
                <p className={classes.workExperience__info}>
                  3 months (Jul 2022 - Sep 2022)
                </p>
              </Reveal>
            </div>

            <div className={classes.workExperience__contributionContainer}>
              <Reveal>
                <label className={classes.workExperience__label}>
                  Contribution:
                </label>
              </Reveal>
              <ul className={classes.workExperience__contributionList}>
                <Reveal>
                  <li className={classes.workExperience__info}>
                    - &nbsp; Implemented a missing invoices monitoring system
                    that helps display the number of invoices missing in each
                    region and then sends alert notifications to team members
                    when the value passes a certain threshold using Golang,
                    MySQL, Prometheus, and Grafana.
                  </li>
                </Reveal>
                <Reveal>
                  <li className={classes.workExperience__info}>
                    - &nbsp;Fix an error that allowed sellers to modify the
                    invoice’s info even after the products are shipped.
                  </li>
                </Reveal>
                <Reveal>
                  <li className={classes.workExperience__info}>
                    - &nbsp;Add invoice's price by text.
                  </li>
                </Reveal>
              </ul>
            </div>
          </div>
        </div>
      </ContentPadding>
    </div>
  );
};

export default WorkExperience;
