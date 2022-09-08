import React, { useRef, useState } from 'react';
import { Row, Col, Button } from 'antd';
import {
  DownloadOutlined,
  EditOutlined,
  CheckOutlined,
  FileProtectOutlined,
} from '@ant-design/icons';
import SWARM_KEY from '@/assets/swarm.txt';

const Feature8 = (props: any) => {
  return (
    <div className="home-page-wrapper feature8-wrapper">
      <div className="home-page feature8">
        <div className="feature8-title-wrapper">
          <div className="feature8-title-h1">接入流程</div>
        </div>
        <div className="feature8-carousel">
          <div className="feature8-block-wrapper">
            <div className="feature8-block">
              <div className="feature8-carousel-title-wrapper">
                <div className="feature8-carousel-title"></div>
              </div>
              <Row className="feature8-block-row">
                <Col md={6} xs={24} className="feature8-block-col">
                  <div className="feature8-block-child">
                    <div className="feature8-block-image">
                      <DownloadOutlined></DownloadOutlined>
                    </div>
                    <div className="feature8-block-title">下载IPFS</div>
                    <div className="feature8-block-content">
                      IPFS-DESKTOP不支持私有网络
                      <br />
                      <a
                        href="https://github.com/ipfs/kubo/releases"
                        target="_blank"
                      >
                        点击下载IPFS Kubo
                      </a>
                    </div>
                  </div>
                  <img
                    className="feature8-block-arrow"
                    src={
                      'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg'
                    }
                  ></img>
                </Col>
                <Col md={6} xs={24} className="feature8-block-col">
                  <div className="feature8-block-child">
                    <div className="feature8-block-image">
                      <FileProtectOutlined />
                    </div>
                    <div className="feature8-block-title">
                      下载并导入swarm.key
                    </div>
                    <div className="feature8-block-content">
                      <a
                        href="#"
                        onClick={() => {
                          var blob = new Blob([SWARM_KEY], {
                            type: 'text/plain',
                          });
                          var a = document.createElement('a');
                          var url = window.URL.createObjectURL(blob);
                          var filename = 'swarm.key';
                          a.href = url;
                          a.download = filename;
                          a.click();
                          window.URL.revokeObjectURL(url);
                        }}
                      >
                        点击下载swarm.key文件
                      </a>
                      <br />
                      保存或者替换到~/.ipfs/swarm.key
                    </div>
                  </div>
                  <img
                    className="feature8-block-arrow"
                    src={
                      'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg'
                    }
                  ></img>
                </Col>
                <Col md={6} xs={24} className="feature8-block-col">
                  <div className="feature8-block-child">
                    <div className="feature8-block-image">
                      <EditOutlined />
                    </div>
                    <div className="feature8-block-title">修改配置</div>
                    <div className="feature8-block-content">
                      打开~/.ipfs/config文件
                      <br />
                      找到Bootstrap修改为"/dns/ipfs.idns.link/tcp/4002/ipfs/12D3KooWKWQLjyfuVBspjvrYt6pchrxBdSiTGRYisGaKRpkSwY4m"
                    </div>
                  </div>
                  <img
                    className="feature8-block-arrow"
                    src={
                      'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg'
                    }
                  ></img>
                </Col>
                <Col md={6} xs={24} className="feature8-block-col">
                  <div className="feature8-block-child">
                    <div className="feature8-block-image">
                      <CheckOutlined />
                    </div>
                    <div className="feature8-block-title">重启完成</div>
                    <div className="feature8-block-content">
                      重启IPFS即可加入新的网络
                    </div>
                  </div>
                  <img
                    className="feature8-block-arrow"
                    src={
                      'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg'
                    }
                  ></img>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="feature8-button-wrapper">
          <div className="feature8-button">
            <Button>立即体验</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feature8;
