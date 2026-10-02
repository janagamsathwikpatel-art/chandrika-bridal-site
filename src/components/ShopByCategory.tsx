"use client";

import Image from "next/image";

export interface CategoryItem {
  id: string;
  name: string;
  image: string;
  categoryFilter: string;
}

export const CATEGORIES_LIST: CategoryItem[] = [
  {
    id: "cat-01",
    name: "Pure Zari Kanchipuram",
    image: "/images/royal-kanjivaram-bridal-saree.jpg",
    categoryFilter: "KANCHIPURAM",
  },
  {
    id: "cat-02",
    name: "Banarasi Silk",
    image: "/images/banarasi-gold-brocade-saree.jpg",
    categoryFilter: "BANARASI",
  },
  {
    id: "cat-03",
    name: "Mysore Crepe",
    image: "/images/kanjivaram-pink-pure-silk.png",
    categoryFilter: "NEW ARRIVALS",
  },
  {
    id: "cat-04",
    name: "Ikats",
    image: "/images/patan-patola-double-ikat-saree.jpg",
    categoryFilter: "DESIGNED BY CHANDRIKA",
  },
  {
    id: "cat-05",
    name: "Tussar",
    image: "/images/tussar-silk-handloom-saree.jpg",
    categoryFilter: "FABRICS",
  },
  {
    id: "cat-06",
    name: "Soft Silks",
    image: "/images/magenta-pink-woven-silk-saree.jpg",
    categoryFilter: "OCCASIONS",
  },
  {
    id: "cat-07",
    name: "Kanchi Half Fine",
    image: "/images/kanjivaram-gold-dual-tone.png",
    categoryFilter: "KANCHIPURAM",
  },
  {
    id: "cat-08",
    name: "Organza",
    image: "/images/chanderi-tissue-gold-saree.jpg",
    categoryFilter: "FABRICS",
  },
  {
    id: "cat-09",
    name: "Paithani",
    image: "/images/paithani-peacock-teal-saree.jpg",
    categoryFilter: "OCCASIONS",
  },
  {
    id: "cat-10",
    name: "Silk Cotton",
    image: "/images/fav-rust-maheshwari.png",
    categoryFilter: "READYMADES",
  },
  {
    id: "cat-11",
    name: "Chiffon",
    image: "/images/fav-pink-viscose.png",
    categoryFilter: "READYMADES",
  },
  {
    id: "cat-12",
    name: "Georgette",
    image: "/images/fav-teal-woven.png",
    categoryFilter: "DESIGNED BY CHANDRIKA",
  },
  {
    id: "cat-13",
    name: "Cotton",
    image: "/images/fav-blue-woven.png",
    categoryFilter: "FABRICS",
  },
  {
    id: "cat-14",
    name: "Bangalore Silk",
    image: "/images/blue-woven-pure-silk-saree.jpg",
    categoryFilter: "NEW ARRIVALS",
  },
  {
    id: "cat-15",
    name: "Banarasi Katan Silk",
    image: "/images/banarasi-gold-brocade-saree.jpg",
    categoryFilter: "BANARASI",
  },
  {
    id: "cat-16",
    name: "Kanchipuram Tissue Silk",
    image: "/images/kanjivaram-gold-dual-tone.png",
    categoryFilter: "KANCHIPURAM",
  },
  {
    id: "cat-17",
    name: "Chanderi",
    image: "/images/chanderi-tissue-gold-saree.jpg",
    categoryFilter: "FABRICS",
  },
  {
    id: "cat-18",
    name: "Brocade Kanchipuram",
    image: "/images/kanjivaram-arunima-muppagam.png",
    categoryFilter: "KANCHIPURAM",
  },
];

interface ShopByCategoryProps {
  onSelectCategory?: (category: string) => void;
}

export default function ShopByCategory({ onSelectCategory }: ShopByCategoryProps) {
  const handleCategoryClick = (filterName: string) => {
    if (onSelectCategory) {
      onSelectCategory(filterName);
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
    <section className="w-full bg-[#fbfaf8] py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Heading matching Nalli screenshot */}
        <div className="mb-8 md:mb-10 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide text-[#111111] uppercase">
            Shop By Category
          </h2>
          <div className="w-16 h-0.5 bg-[#8B0000] mx-auto mt-3" />
        </div>

        {/* 6-Column Category Grid matching Screenshot 2 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {CATEGORIES_LIST.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.categoryFilter)}
              className="group cursor-pointer flex flex-col items-center text-center"
            >
              {/* Square Image Card */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#e8e5de] shadow-sm rounded-none border border-[#e2dfd5]">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                />
              </div>

              {/* Category Name Label underneath image */}
              <span className="mt-2.5 text-[12px] md:text-[13px] font-normal text-[#333333] group-hover:text-[#8B0000] transition-colors leading-tight">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
