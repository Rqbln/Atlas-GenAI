import HomeContent from '@views/homeContent/HomeContent';
import React from 'react';

interface ContentAreaProps {
  currentContent: string;
}

const ContentArea: React.FC<ContentAreaProps> = ({ currentContent }) => {
  const renderContent = () => {
    switch (currentContent) {
      case 'home':
        return <HomeContent />;
      // case 'profile':
      //   return <ProfileContent />;
      // case 'settings':
      //   return <SettingsContent />;
      default:
        return <HomeContent />;
    }
  };

  return <div style={{ height: '100%', width: '100%' }}>{renderContent()}</div>;
};

export default ContentArea;