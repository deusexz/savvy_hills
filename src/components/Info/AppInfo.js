import React from 'react';
import './info.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import DATA from './infoData';

function AppInfo(props) {
    return (
        <section className={'info'}>
            <div className={'infoWrapper'}>
                    {DATA.map((item) => (
                        <div className={'infoItem'}>
                            <div key={item.id} className={'infoItemHeader'}>
                                <FontAwesomeIcon className={'infoIcon'} icon={item.icon}/>
                                <span className={'infoItemSpan'}>{item.header}</span>
                            </div>
                            <div className={'infoContent'}>
                                <div key={item.id} className={'infoContentText'}>
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

export default AppInfo;