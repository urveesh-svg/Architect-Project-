import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../shared/layouts/MainLayout";

import HomePage from "../features/home/pages/HomePage";
import AboutPage from "../features/about/pages/AboutPage";
import ServicesPage from "../features/services/pages/ServicesPage";
import ProjectsPage from "../features/projects/pages/ProjectsPage";
import TeamPage from "../features/team/pages/TeamPage";
import GalleryPage from "../features/gallery/pages/GalleryPage";
import ContactPage from "../features/contact/pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "team", element: <TeamPage /> },
      { path: "gallery", element: <GalleryPage /> },
      { path: "contact", element: <ContactPage /> }
    ]
  }
]);

export default router;
