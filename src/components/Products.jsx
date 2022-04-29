import { Outlet } from "react-router-dom";
const Products = ({ children }) => {
  return (
    <div>
      Products
      <Outlet />
    </div>
  );
};

export default Products;
