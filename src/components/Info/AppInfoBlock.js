import React from 'react';
import styles from './info.module.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import DATA from './constInfo';

const AppInfoBlock = () => {
    return (
        <section className={styles.info}>
            <div className={styles.infoWrapper}>
                    {DATA.map(({id,header,icon}) => (
                        <div key={id} className={styles.infoItem}>
                            <div className={styles.infoItemHeader}>
                                <FontAwesomeIcon className={styles.infoIcon} icon={icon}/>
                                <span className={styles.infoItemSpan}>{header}</span>
                            </div>
                            <div className={styles.infoContent}>
                                <div className={styles.infoContentText}>
                                    <p>
                                        Nam pharetra nisi eget dui pretium, a mollis turpis congue. Fusce eros massa,
                                        dictum
                                        in rutrum
                                        eu, gravida sed odio. Quisque diam massa, consectetur sed metus a, porta pretium
                                        elit. Ut luctus
                                        sodales ipsum eu semper. Aliquam et felis at dui gravida aliquam. Morbi dapibus
                                        nulla eu
                                        eleifend feugiat. Duis porttitor tellus at ante accumsan sodales. Vivamus
                                        sodales
                                        sem at dolor
                                        aliquet, sed lobortis diam interdum.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
}

export default AppInfoBlock;