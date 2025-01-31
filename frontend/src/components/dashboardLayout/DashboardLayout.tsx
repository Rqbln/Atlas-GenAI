import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from '@components/sidebar/Sidebar';
import ContentArea from '@components/contentArea/ContentArea';
import styles from './DashboardLayout.module.css';

const { Sider, Content } = Layout;

const DashboardLayout: React.FC = () => {
  const [currentContent, setCurrentContent] = useState<string>('home');

  return (
    <Layout className={styles.dashboardLayout}>
      {/* Sidebar fixe */}
      <Sider className={styles.sider} width={400}>
        <Sidebar setCurrentContent={setCurrentContent} />
      </Sider>

      {/* Content box qui prend le reste */}
      <Layout className={styles.mainLayout}>
        <Content className={styles.content}>
          <ContentArea currentContent={currentContent} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;