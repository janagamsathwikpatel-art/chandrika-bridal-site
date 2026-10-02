"use client";

import Image from "next/image";

export interface CategoryCard {
  id: string;
  name: string;
  image: string;
  filterCategory: string;
}

const CATEGORIES: CategoryCard[] = [
  {
    id: "cat-01",
    name: "PURE ZARI KANCHIPURAM",
    image: "/images/kanjivaram-pink-pure-silk.png",
    filterCategory: "KANCHIPURAM",
  },
  {
    id: "cat-02",
    name: "BANARASI SILK",
    image: "/images/banarasi-gold-brocade-saree.jpg",
    filterCategory: "BANARASI",
  },
  {
    id: "cat-03",
    name: "MYSORE CREPE",
    image: "/images/magenta-pink-woven-silk-saree.jpg",
    filterCategory: "NEW ARRIVALS",
  },
  {
    id: "cat-04",
    name: "IKATS",
    image: "/images/patan-patola-double-ikat-saree.jpg",
    filterCategory: "DESIGNED BY CHANDRIKA",
  },
  {
    id: "cat-05",
    name: "TUSSAR",
    image: "/images/tussar-silk-handloom-saree.jpg",
    filterCategory: "FABRICS",
  },
  {
    id: "cat-06",
    name: "SOFT SILKS",
    image: "/images/fav-pink-viscose.png",
    filterCategory: "READYMADES",
  },
  {
    id: "cat-07",
    name: "KANCHI HALF FINE",
    image: "/images/royal-kanjivaram-bridal-saree.jpg",
    filterCategory: "KANCHIPURAM",
  },
  {
    id: "cat-08",
    name: "ORGANZA",
    image: "/images/kanjivaram-arunima-muppagam.png",
    filterCategory: "OCCASIONS",
  },
  {
    id: "cat-09",
    name: "PAITHANI",
    image: "/images/paithani-peacock-teal-saree.jpg",
    filterCategory: "NEW ARRIVALS",
  },
  {
    id: "cat-10",
    name: "SILK COTTON",
    image: "/images/fav-teal-woven.png",
    filterCategory: "FABRICS",
  },
  {
    id: "cat-11",
    name: "CHIFFON",
    image: "/images/fav-rust-maheshwari.png",
    filterCategory: "OCCASIONS",
  },
  {
    id: "cat-12",
    name: "GEORGETTE",
    image: "/images/fav-blue-woven.png",
    filterCategory: "READYMADES",
  },
  {
    id: "cat-13",
    name: "COTTON",
    image: "/images/artisan-weaver-handloom.jpg",
    filterCategory: "FABRICS",
  },
  {
    id: "cat-14",
    name: "BANGALORE SILK",
    image: "/images/blue-woven-pure-silk-saree.jpg",
    filterCategory: "DESIGNED BY CHANDRIKA",
  },
  {
    id: "cat-15",
    name: "BANARASI KATAN SILK",
    image: "/images/banarasi-gold-brocade-saree.jpg",
    filterCategory: "BANARASI",
  },
  {
    id: "cat-16",
    name: "KANCHIPURAM TISSUE SILK",
    image: "/images/chanderi-tissue-gold-saree.jpg",
    filterCategory: "KANCHIPURAM",
  },
  {
    id: "cat-17",
    name: "CHANDERI",
    image: "/images/chanderi-tissue-gold-saree.jpg",
    filterCategory: "OCCASIONS",
  },
  {
    id: "cat-18",
    name: "BROCADE KANCHIPURAM",
    image: "/images/kanjivaram-navy-blue.png",
    filterCategory: "KANCHIPURAM",
  },
];

interface ShopByCategoryProps {
  onSelectCategory?: (category: string) => void;
}

export default function ShopByCategory({ onSelectCategory }: ShopByCategoryProps) {
  const handleCategoryClick = (filterCategory: string) => {
    if (onSelectCategory) {
      onSelectCategory(filterCategory);
    }
    const sareesSection = document.getElementById("sarees");
    if (sareesSection) {
      const headerOffset = 70;
      const elementPosition = sareesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="shop-by-category"
      className="w-full bg-[#fbfaf8] py-16 md:py-24 px-4 md:px-12 border-b border-[#ece9e2] scroll-mt-20"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Heading matching User Screenshot media_1790932209079 */}
        <div className="mb-10 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2421] tracking-tight uppercase">
            SHOP BY CATEGORY
          </h2>
          <p className="mt-1 text-xs md:text-sm tracking-[0.2em] text-[#767573] uppercase font-medium">
            EXPLORE OUR HERITAGE HANDLOOM WEAVES BY CRAFT, SILK, AND TECHNIQUE
          </p>
        </div>

        {/* 6-Column Category Grid matching Reference Screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.filterCategory)}
              className="cursor-pointer group flex flex-col items-start"
            >
              {/* Square Image Card Container */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#ebe8e2] rounded-md shadow-sm border border-[#e2dfd7] group-hover:border-[#8B0000]/40 group-hover:shadow-md transition-all duration-300">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                />
              </div>

              {/* Uppercase Category Title Below Square Card */}
              <span className="mt-2.5 text-[11px] sm:text-[12px] tracking-wider font-semibold text-[#201f1f] uppercase leading-snug group-hover:text-[#8B0000] transition-colors">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
