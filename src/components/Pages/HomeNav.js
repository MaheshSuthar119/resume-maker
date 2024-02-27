import React, {useEffect, useState} from 'react'
import { ArrowDown } from "react-feather";

import styles from "./HomeNav.module.css";
import EditorNav from './Editor/EditorNav';
import Resume from './Resume/Resume';

function HomeNav() {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  useEffect(() => {
    console.log(resumeInformation);
  }, [resumeInformation]);

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume Builder</p>
        <div className={styles.toolbar}>
            <div className={styles.colors}>
                {colors.map((item) => (
                    <span
                      key={item}
                      style={{backgroundColor: item}}
                      className={`${styles.color} ${
                        activeColor === item ? styles.active : ""
                      }`}
                      onClick={() => setActiveColor(item)}
                    />
                ))}
            </div>
            <button>Download <ArrowDown /> </button>
        </div>
        <div className={styles.main}>
          <EditorNav
            sections={sections}
            information = {resumeInformation}
            setInformation={setResumeInformation}
          />
          <Resume/>
        </div>
    </div>
  )
}

export default HomeNav