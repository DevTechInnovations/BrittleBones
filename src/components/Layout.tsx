// import { ReactNode } from "react";
// import Navigation from "./Navigation";
// import Footer from "./Footer";

// interface LayoutProps {
//   children: ReactNode;
// }

// const Layout = ({ children }: LayoutProps) => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navigation />
//       <main className="flex-1">{children}
     
//       </main>
//       <Footer />
//     </div>
//   );
// };

import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet /> {/* This is where the child route pages load */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
