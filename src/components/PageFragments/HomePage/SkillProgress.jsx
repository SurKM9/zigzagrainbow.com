import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={80}
          text="C++"
        />
        <ProgressBar
          percent={95}
          text="Qt"
        />
        <ProgressBar
          percent={85}
          text="OpenCV"
        />
        <ProgressBar
          percent={90}
          text="CMake"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={30}
          text="Python"
        />
        <ProgressBar
          percent={30}
          text="Machine Learning"
        />
        <ProgressBar
          percent={20}
          text="Tensorflow"
        />
        <ProgressBar
          percent={25}
          text="Gatsby"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
