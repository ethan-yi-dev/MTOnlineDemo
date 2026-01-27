import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfileViewPage from "../pages/ProfileViewPage";
import ProfileEditPage from "../pages/ProfileEditPage";
import StatusUpdatesPage from "../pages/StatusUpdatesPage";
import FriendsPage from "../pages/FriendsPage";
import SearchFriendsPage from "../pages/SearchFriendsPage";
import PendingRequestsPage from "../pages/PendingRequestsPage";

export const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },

  { path: "/profile", element: <ProfileViewPage /> },
  { path: "/profile/edit", element: <ProfileEditPage /> },

  { path: "/profile/status", element: <StatusUpdatesPage /> },
  { path: "/profile/friends", element: <FriendsPage /> },
  { path: "/profile/search", element: <SearchFriendsPage /> },
  { path: "/profile/requests", element: <PendingRequestsPage /> },
]);
