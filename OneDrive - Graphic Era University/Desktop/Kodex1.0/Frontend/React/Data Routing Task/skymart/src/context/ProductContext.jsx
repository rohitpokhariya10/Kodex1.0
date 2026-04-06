import { Children, createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../instance/axiosInstance";
import { userData } from "./AuthContext";
import { load, save } from "../lib/locaStorage";

const ProductContext = createContext();

export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [catagoryBifercation, setCatagoryBifercation] = useState({});
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { user } = userData();
    const userKey = user?.id || user?.email || "guest";

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axiosInstance.get("/products");
            setProducts(res.products);
            let catagoryData = getCatagories(res.products);
            setCatagoryBifercation(catagoryData);
        };

        const getCatagories = (data) => {
            const topCategory = data.length > 0 ? data.reduce((acc, h) => {
                acc[h.category] = (acc[h.category] || 0) + 1;
                return acc;
            }, {}) : "No data";
            return topCategory;
        }

        fetchProducts();
    }, []);

    useEffect(() => {
        // load cart for current user
        const stored = load(`cart_${userKey}`) || [];
        setCart(stored);
    }, [userKey]);

    useEffect(() => {
        // persist cart for user
        save(`cart_${userKey}`, cart);
    }, [cart, userKey]);

    const items = {
        products,
        catagoryBifercation,
        cart,
        isCartOpen,
        addToCart: (item) => {
            setCart((prev) => {
                const exists = prev.find((p) => p.id === item.id);
                if (exists) {
                    return prev.map((p) =>
                        p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
                    );
                }
                return [...prev, { ...item, quantity: 1 }];
            });
            setIsCartOpen(true);
        },
        updateQuantity: (id, delta) => {
            setCart((prev) =>
                prev
                    .map((p) =>
                        p.id === id ? { ...p, quantity: p.quantity + delta } : p
                    )
                    .filter((p) => p.quantity > 0)
            );
        },
        removeFromCart: (id) => {
            setCart((prev) => prev.filter((p) => p.id !== id));
        },
        clearCart: () => setCart([]),
        toggleCart: (state) => setIsCartOpen((prev) => (typeof state === "boolean" ? state : !prev)),
        getCartCount: () => cart.reduce((sum, item) => sum + item.quantity, 0),
        getCartTotal: () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    }

    return <ProductContext.Provider value={items}>
        {children}
    </ProductContext.Provider>
}

export const productData = () => useContext(ProductContext);
