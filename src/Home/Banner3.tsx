import React from 'react';
import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import Texty from 'rc-texty';

import 'rc-texty/assets/index.css';

import SWARM_KEY from '@/assets/swarm.txt';

export const Banner30DataSource = {
  wrapper: { className: 'banner3' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'nameEn',
        className: 'banner3-name-en',
        children: (
          <span>
            <p>IDNS &amp; IPFS &amp;UDI</p>
          </span>
        ),
      },
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children: 'IDNS中的IPFS私有网络',
        texty: true,
      },
      {
        name: 'name',
        className: 'banner3-name',
        children: (
          <span>
            <span>
              <p>加入IDNS中的IPFS的私有网络试用各种UDI应用</p>
            </span>
          </span>
        ),
      },
      {
        name: 'button',
        className: 'banner3-button',
        children: (
          <span
            onClick={() => {
              //
              console.log(SWARM_KEY);
            }}
          >
            <p>现在接入</p>
          </span>
        ),
      },
      {
        name: 'time',
        className: 'banner3-time',
        children: (
          <span>
            <p>IDNS.ETH</p>
          </span>
        ),
      },
    ],
  },
};

export const Banner = (props: any) => {
  const dataSource = Banner30DataSource;

  const children = dataSource.textWrapper.children.map((item: any) => {
    const { name, texty, ...$item } = item;
    if (name.match('button')) {
      return (
        <Button type="primary" key={name} {...$item}>
          {item.children}
        </Button>
      );
    }

    return (
      <div key={name} {...$item}>
        {texty ? (
          <Texty type="mask-bottom">{item.children}</Texty>
        ) : (
          item.children
        )}
      </div>
    );
  });
  return (
    <div {...dataSource.wrapper}>
      <QueueAnim
        key="QueueAnim"
        type={['bottom', 'top']}
        delay={200}
        {...dataSource.textWrapper}
      >
        {children}
      </QueueAnim>
    </div>
  );
};

export default Banner;
