import type React from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '@views/notFound/NotFound';
import { APP_ROUTES } from '@config/appRoutes';

// Lazy-loaded views
const DashboardLayout = lazy(() => import('@components/dashboardLayout/DashboardLayout'));
const ChatContainer = lazy(() => import('@views/chat/ChatContainer'));

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path={APP_ROUTES.PUBLIC.HOME} element={<DashboardLayout />}>
      <Route index element={<ChatContainer />} />
      <Route path="c/:chatId" element={<ChatContainer />} />
    </Route>

    {/* Fallback */}
    <Route path={APP_ROUTES.ERROR.NOT_FOUND} element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
