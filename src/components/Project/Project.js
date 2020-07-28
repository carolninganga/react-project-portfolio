import React from 'react';
import styles from './Project.module.css';
import 'animate.css';

function Project(props) {
        return (
            <div className="col-md-4 justify-content-center">
            <div className="card">
                <div className={styles.topCard}>
                <h4 className="text-center">{props.name}</h4>
                </div>
                <div className={styles.mediaCard}>
                <img src={props.img} className="card-img-top" alt="project"/>
                </div>
                <div className={styles.bottomCard}>
        <p className={styles.bottomText}>{props.description }</p>
                <div className="text-center">
                <a target='_blank' rel="noopener noreferrer" href={props.site}><button className={styles.actions}><i class="fab fa-internet-explorer"></i> VISIT SITE</button></a>
                <a target='_blank' rel="noopener noreferrer" href={props.github}><button className={styles.actions}><i class="fab fa-github"></i> GITHUB</button></a>
                </div>
             </div>
            </div>
         </div>
        )
}

export default Project;

{/* <div className="col-6 m-0">
                      <a target='_blank' rel="noopener noreferrer" href={props.github} id={styles.learnMoreBtn} className="btn waves-effect waves-light white-text">GitHub</a>
                    </div>
                    <div className="col-6 m-0">
                      <a target='_blank' rel="noopener noreferrer" href={props.site} id={styles.learnMoreBtn} className="btn waves-effect waves-light white-text">Live Site</a>
                    </div> */}