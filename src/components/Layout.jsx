import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state, pathname } = location;

  const backHandler = () => {
    navigate(state?.from, { state: { pathname } });
  } 

  return (
    <div className="container">
      
      <Header />

      <div className="history-block">
        {
          state?.from && <button onClick={backHandler}>{state?.from}</button>
        }
      </div>

      <main className="main">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};