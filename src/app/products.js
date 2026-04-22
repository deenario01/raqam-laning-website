/** Product data is stored in `public/data/products.json` and served as `/data/products.json`. */
export {
  getProductsSync,
  getProductByIdSync,
  featuredProductsSync as featuredProducts,
} from "@/lib/site-products";
