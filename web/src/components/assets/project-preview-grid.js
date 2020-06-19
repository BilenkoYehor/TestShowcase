import { Link, navigate } from "gatsby";
import React from "react";
import ProjectPreview from "./project-preview";

import styles from "./styles/project-preview-grid.module.css";

function ProjectPreviewGrid(props) {
  return (
    <div className={styles.root} onClick={() => navigate(props.linkTo)}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id} className={styles.projectItem}>
              <ProjectPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  );
}

ProjectPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default ProjectPreviewGrid;