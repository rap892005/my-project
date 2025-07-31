import { useState, useEffect } from "react";
import "./App.css";
import { Link, useLocation } from "react-router-dom";
import Category from "./components/Categories";
import { Products } from "./components/Products";
import { ShoppingCart, Home } from "@mui/icons-material"; 

function App() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const onCategoryClick = (id) => {
    setActiveCategoryId(id);
  };
  const location = useLocation();
  return (
    <>
       <nav className="navbar">
      <Link to="/" className={`icon ${location.pathname === "/" ? "active" : ""}`}>
        <Home />
      </Link>

      <header className="store-name">My Store</header>

      <Link to="/checkout" className={`icon ${location.pathname === "/checkout" ? "active" : ""}`}>
        <ShoppingCart />
        </Link>
    </nav>

      <section>
        <nav>
          <ul>
            {categories.map((category) => (
              <Category
                key={category.id}
                id={category.id}
                title={category.title}
                isActive={category.id === activeCategoryId}
                onCategoryClick={onCategoryClick}
              />
            ))}
          </ul>
        </nav>
        <article>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>Error: {error}</p>}
          <Products categoryId={activeCategoryId} />
        </article>
      </section>
      <footer>@ayushsharma 2025</footer>
    </>
  );
}

export default App;
