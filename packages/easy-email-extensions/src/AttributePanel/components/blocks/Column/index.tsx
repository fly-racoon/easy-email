import React from 'react';

import { Collapse, Grid, Space } from '@arco-design/web-react';
import { AttributesPanelWrapper } from '@extensions/AttributePanel/components/attributes/AttributesPanelWrapper';
import { Padding } from '@extensions/AttributePanel/components/attributes/Padding';
import { Width } from '@extensions/AttributePanel/components/attributes/Width';
import { VerticalAlign } from '@extensions/AttributePanel/components/attributes/VerticalAlign';
import { Background } from '@extensions/AttributePanel/components/attributes/Background';
import { Border } from '@extensions/AttributePanel/components/attributes/Border';
import { ClassName } from '../../attributes/ClassName';
import { CollapseWrapper } from '../../attributes/CollapseWrapper';

export function Column() {
  return (
    <AttributesPanelWrapper>
      <CollapseWrapper defaultActiveKey={['0', '1', '2']}>
        <Collapse.Item name='0' header='Размер'>
          <Space direction='vertical'>
            <Grid.Row>
              <Grid.Col span={11}>
                <Width />
              </Grid.Col>
              <Grid.Col offset={1} span={11}>
                <VerticalAlign />
              </Grid.Col>
            </Grid.Row>

            <Padding />
          </Space>
        </Collapse.Item>
        <Collapse.Item name='1' header='Фон'>
          <Background />
        </Collapse.Item>
        <Collapse.Item name='2' header='Граница'>
          <Border />
        </Collapse.Item>
        <Collapse.Item name='4' header='Дополнительно'>
          <Grid.Col span={24}>
            <ClassName />
          </Grid.Col>
        </Collapse.Item>
      </CollapseWrapper>
    </AttributesPanelWrapper>
  );
}
