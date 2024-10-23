import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.css";

// Importation des composants pour les articles
import Listarticle from "./components/articles/Listarticle";
import Insertarticle from "./components/articles/Insertarticle";
import Editarticle from "./components/articles/Editarticle";
import Viewarticle from "./components/articles/Viewarticle";

// Importation des composants pour les catégories
import Listcategories from "./components/categories/Listcategories";
import Insertcategorie from "./components/categories/Insertcategorie";
import Editcategorie from "./components/categories/Editcategorie";
import Viewcategorie from "./components/categories/Viewcategorie";

// Importation des composants pour les sous-catégories
import Listscategories from "./components/scategories/Listscategorie";
import Insertscategorie from "./components/scategories/Insertscategorie";
import Editscategorie from "./components/scategories/Editscategorie";
import Viewscategorie from "./components/scategories/Viewscategorie";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Routes pour les articles */}
          <Route path="/articles" element={<Listarticle />} />
          <Route path="/article/add" element={<Insertarticle />} />
          <Route path="/article/edit/:id" element={<Editarticle />} />
          <Route path="/article/view/:id" element={<Viewarticle />} />

          {/* Routes pour les catégories */}
          <Route path="/categories" element={<Listcategories />} />
          <Route path="/categorie/add" element={<Insertcategorie />} />
          <Route path="/categorie/edit/:id" element={<Editcategorie />} />
          <Route path="/categorie/view/:id" element={<Viewcategorie />} />

          {/* Routes pour les sous-catégories */}
          <Route path="/scategories" element={<Listscategories />} />
          <Route path="/scategorie/add" element={<Insertscategorie />} />
          <Route path="/scategorie/edit/:id" element={<Editscategorie />} />
          <Route path="/scategorie/view/:id" element={<Viewscategorie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
