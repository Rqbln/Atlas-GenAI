import React from 'react';
import MapComponent from '@components/MapComponent';
import styles from './HomeContent.module.css';

const HomeContent: React.FC = () => {
  return (
    <div className={styles.homeContent}>
      <MapComponent />
    </div>
  );
};

export default HomeContent;