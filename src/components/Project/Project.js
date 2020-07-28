import React from 'react';
import styles from './Project.module.css';
import 'animate.css';

function Project(props) {
        return (
            <div className="col-md-4 justify-content-center">
            <div className="card">
                <div className={styles.topCard}>
                <h4 className="text-center">Título do card</h4>
                </div>
                <div className={styles.mediaCard}></div>
                <div className={styles.bottomCard}>
                <p className={styles.bottomText}>Aqui é um texto exemplo de resumo da página ou do documento que o card trata.</p>
                <div className="text-center">
                    <button className={styles.actions}><i class="fab fa-internet-explorer"></i> VISIT SITE</button>
                    <button className={styles.actions}><i class="fab fa-github"></i> GITHUB</button>
                </div>
             </div>
            </div>
         </div>
        )
}

export default Project;