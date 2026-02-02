import { createBrowserRouter } from "react-router-dom";
import Login from "@/app/pages/Login";
import DashboardLayout from "@/app/pages/DashboardLayout";
import Dashboard from "@/app/pages/Dashboard";
import UnitUsaha from "@/app/pages/UnitUsaha";
import UnitUsahaDetail from "@/app/pages/UnitUsahaDetail";
import Keuangan from "@/app/pages/Keuangan";
import KasMasuk from "@/app/pages/KasMasuk";
import KasKeluar from "@/app/pages/KasKeluar";
import LaporanKeuangan from "@/app/pages/LaporanKeuangan";
import Inventaris from "@/app/pages/Inventaris";
import Administrasi from "@/app/pages/Administrasi";
import Laporan from "@/app/pages/Laporan";
import Pengguna from "@/app/pages/Pengguna";
import ProfilBumdes from "@/app/pages/ProfilBumdes";
import Pengaturan from "@/app/pages/Pengaturan";
import LandingPage from "@/app/pages/LandingPage";
import ErrorPage from "@/app/components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
    errorElement: <ErrorPage />,
  },
  {
    path: "/landing",
    Component: LandingPage,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    Component: DashboardLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Dashboard },
      { path: "unit-usaha", Component: UnitUsaha },
      { path: "unit-usaha/:id", Component: UnitUsahaDetail },
      { path: "keuangan", Component: Keuangan },
      { path: "keuangan/kas-masuk", Component: KasMasuk },
      { path: "keuangan/kas-keluar", Component: KasKeluar },
      { path: "keuangan/laporan", Component: LaporanKeuangan },
      { path: "inventaris", Component: Inventaris },
      { path: "administrasi", Component: Administrasi },
      { path: "laporan", Component: Laporan },
      { path: "pengguna", Component: Pengguna },
      { path: "profil-bumdes", Component: ProfilBumdes },
      { path: "pengaturan", Component: Pengaturan },
      { path: "landing", Component: LandingPage },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);
