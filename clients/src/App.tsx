import AppRoutes from "./routes/approutes";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "./styles/variables.css";
const App = () => {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
};

export default App;
