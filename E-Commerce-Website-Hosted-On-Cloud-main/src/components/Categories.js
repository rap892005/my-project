const Categories = ({ id, title, onCategoryClick, isActive }) => {
  return (
    <li
      key={id}
      className={isActive ? "active" : ""}
      onClick={() => onCategoryClick(id)}
    >
      {title}
    </li>
  );
};

export default Categories;
