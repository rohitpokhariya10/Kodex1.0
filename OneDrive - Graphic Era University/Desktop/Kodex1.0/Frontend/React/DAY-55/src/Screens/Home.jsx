import axios from "axios";
import { useContext, useEffect } from "react";
import ProductsCard from "../Components/ProductsCard";
import { CartStore } from "../Context/CartContext";

const Home = () => {
  let { products, setProducts, cartItem } = useContext(CartStore);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products);
      } catch (error) {
        console.log("Eroor in API", error);
      }
    })();
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-5.5rem)] px-3 py-6 sm:px-6 sm:py-8 lg:px-10">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 sm:gap-10">
        <section className="soft-grid float-in relative grid gap-6 overflow-hidden rounded-[30px] border border-white/80 bg-[linear-gradient(145deg,rgba(255,253,248,0.96),rgba(248,241,230,0.96))] p-4 shadow-[var(--hero-shadow)] sm:rounded-[40px] sm:p-6 lg:grid-cols-[1.15fr_0.85fr] lg:p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(224,159,62,0.12),transparent_72%)]" />
          <div className="flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <span className="inline-flex w-fit rounded-full border border-[#e09f3e]/30 bg-white/80 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.28em] text-[#c77d1f]">
                Modern storefront
              </span>
              <div className="space-y-3">
                <h1 className="max-w-3xl text-4xl font-bold tracking-[-0.05em] text-[#14213d] sm:text-5xl lg:text-6xl">
                  Cleaner cards, richer spacing, and a storefront that feels more premium.
                </h1>
                <p className="max-w-2xl text-sm leading-7 text-[#4f5d75] sm:text-lg sm:leading-8">
                  Your catalog now reads more like a polished ecommerce landing
                  page, with softer surfaces, clearer hierarchy, and smoother
                  interactions that feel deliberate.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] border border-white/70 bg-white/80 px-4 py-4 shadow-[0_14px_30px_rgba(20,33,61,0.06)] sm:px-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#c77d1f]">
                  Inventory
                </p>
                <p className="mt-2 text-3xl font-extrabold text-[#14213d]">
                  {products.length}
                </p>
                <p className="mt-1 text-sm text-[#5f6b80]">Live items on display</p>
              </div>
              <div className="rounded-[24px] border border-white/20 bg-[#14213d] px-4 py-4 text-white shadow-[0_22px_40px_rgba(20,33,61,0.18)] sm:px-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#f2cc8f]">
                  Experience
                </p>
                <p className="mt-2 text-lg font-semibold">
                  Product browsing feels smoother and more structured
                </p>
              </div>
              <div className="rounded-[24px] border border-[#14213d]/10 bg-[#f8f3ea] px-4 py-4 sm:px-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#c77d1f]">
                  Quality
                </p>
                <p className="mt-2 text-lg font-semibold text-[#14213d]">
                  Refined visual hierarchy
                </p>
              </div>
            </div>
          </div>

          <div className="drift rounded-[28px] border border-white/70 bg-[linear-gradient(180deg,#f8f3ea_0%,#f0e7d9_100%)] p-4 shadow-[0_20px_45px_rgba(20,33,61,0.08)] sm:rounded-[34px] sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#c77d1f]">
                  Visual index
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#14213d]">
                  Designed for browsing
                </h2>
              </div>
              <div className="h-3 w-3 rounded-full bg-[#e09f3e]" />
            </div>
            <div className="aspect-[16/11] overflow-hidden rounded-[24px] border border-white/80 bg-[#fffdf8] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:rounded-[28px] sm:p-4">
              <svg
                viewBox="0 0 320 220"
                className="h-full w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="30"
                  y="28"
                  width="168"
                  height="128"
                  rx="24"
                  fill="#14213D"
                />
                <rect
                  x="52"
                  y="54"
                  width="122"
                  height="12"
                  rx="6"
                  fill="#FFF4DB"
                />
                <rect
                  x="52"
                  y="80"
                  width="82"
                  height="10"
                  rx="5"
                  fill="#8D99AE"
                />
                <rect
                  x="52"
                  y="111"
                  width="95"
                  height="18"
                  rx="9"
                  fill="#E09F3E"
                />
                <path
                  d="M229 53h42c10 0 18 8 18 18v76c0 10-8 18-18 18h-42c-10 0-18-8-18-18V71c0-10 8-18 18-18Z"
                  fill="#FFFDF8"
                  stroke="#14213D"
                  strokeWidth="8"
                />
                <circle cx="250" cy="85" r="15" fill="#E09F3E" />
                <path
                  d="M230 136c7-17 18-25 32-25 14 0 25 8 32 25"
                  stroke="#14213D"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M33 180c35-14 72-21 111-21 39 0 74 7 111 21"
                  stroke="#C77D1F"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </section>

        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-[#c77d1f]">
              Catalog
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#14213d] sm:text-4xl">
              Featured products
            </h2>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-sm text-[#4f5d75] shadow-[0_10px_24px_rgba(20,33,61,0.05)] md:flex">
            <span className="h-px w-12 bg-[#14213d]/15" />
            Refined product cards with subtle motion
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {products.map((product, index) => {
            let isInCart = cartItem.find((elem) => {
              return elem.id == product.id;
            });

            return <ProductsCard key={index} product={product} type="home" isInCart={isInCart}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
