// src/Route.tsx

import { Navigate, useRoutes } from 'react-router-dom';
import { SimpleLayout } from './layouts/Simple';

// import
import { Signup } from './pages/Signup';

// <ForgetPassForm>import
import { ForgetPassForm } from './pages/ForgetPassForm';
import { Signout } from './pages/Signout';

export const RootRouter = () => {
  return useRoutes([
    {
      element: <SimpleLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <Signup /> },

        // 追加！！
        { path: 'signout', element: <Signout /> },
        { path: 'forget', element: <ForgetPassForm /> },
        { path: '404', element: <div>Not Found</div> },
        { path: '*', element: <Navigate to='/404' /> }
      ],
    },
    {
      // ルーレット関連のデザイン
      element: <GroupLayout />,
      children: [
        // プロフィールのルーティング koki-sys
        { path: '/profile', element: <Profile />},

        // グループの作成など、ルーレット画面のルーティング koki-sys
        { path: '/:group', element: <Roulet />},
        { path: '/:group/member', element: <GroupMenber />},
        { path: '/:group/create', element: <CreateGroup />},
        { path: '/:group/join', element: <JoinGroup />},
      ]
    },
    { path: '*', element: <Navigate to='/404' /> },
  ]);
};
