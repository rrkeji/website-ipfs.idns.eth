import React, { useEffect, useState } from 'react';
import { enquireScreen } from 'enquire-js';

import Nav3 from './Nav3';
import Banner3 from './Banner3';
import Footer1 from './Footer1';
import Teams from './Teams';
import Feature8 from './Feature8';

import './less/antMotionStyle.less';

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default () => {
  const [isMobile, setisMobile] = useState<boolean>(false);

  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    // 适配手机屏幕;
    enquireScreen((b: any) => {
      setisMobile(!!b);
    });
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);

  const children = [
    <Nav3 isMobile={isMobile} />,
    <Banner3 />,
    <Feature8 />,
    <Teams />,
    <Footer1 />,
  ];
  return <div className="templates-wrapper">{show && children}</div>;
};
