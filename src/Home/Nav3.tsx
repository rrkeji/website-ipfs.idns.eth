import React, { useState } from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { getChildrenToRender } from './utils';
import classnames from 'classnames';

import styles from './nav3.less';

import IPFS_PNG from '@/assets/ipfs.png';

export const Header = (props: { isMobile: boolean }) => {
  return (
    <div className={classnames(styles.container)}>
      <div className={classnames(styles.content)}>
        <img src={IPFS_PNG} className={classnames(styles.img)}></img>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
