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
    name: "Pure Zari Kanchipuram",
    image: "/images/kanjivaram-pink-pure-silk.png",
    filterCategory: "KANCHIPURAM",
  },
  {
    id: "cat-02",
    name: "Banarasi Silk",
    image: "/images/banarasi-gold-brocade-saree.jpg",
    filterCategory: "BANARASI",
  },
  {
    id: "cat-03",
    name: "Mysore Crepe",
    image: "/images/magenta-pink-woven-silk-saree.jpg",
    filterCategory: "NEW ARRIVALS",
  },
  {
    id: "cat-04",
    name: "Ikats",
    image: "/images/patan-patola-double-ikat-saree.jpg",
    filterCategory: "DESIGNED BY CHANDRIKA",
  },
  {
    id: "cat-05",
    name: "Tussar",
    image: "/images/tussar-silk-handloom-saree.jpg",
    filterCategory: "FABRICS",
  },
  {
    id: "cat-06",
    name: "Soft Silks",
    image: "/images/fav-pink-viscose.png",
    filterCategory: "READYMADES",
  },
  {
    id: "cat-07",
    name: "Kanchi Half Fine",
    image: "/images/royal-kanjivaram-bridal-saree.jpg",
    filterCategory: "KANCHIPURAM",
  },
  {
    id: "cat-08",
    name: "Organza",
    image: "/images/kanjivaram-arunima-muppagam.png",
    filterCategory: "OCCASIONS",
  },
  {
    id: "cat-09",
    name: "Paithani",
    image: "/images/paithani-peacock-teal-saree.jpg",
    filterCategory: "NEW ARRIVALS",
  },
  {
    id: "cat-10",
    name: "Silk Cotton",
    image: "/images/fav-teal-woven.png",
    filterCategory: "FABRICS",
  },
  {
    id: "cat-11",
    name: "Chiffon",
    image: "/images/fav-rust-maheshwari.png",
    filterCategory: "OCCASIONS",
  },
  {
    id: "cat-12",
    name: "Georgette",
    image: "/images/fav-blue-woven.png",
    filterCategory: "READYMADES",
  },
  {
    id: "cat-13",
    name: "Cotton",
    image: "/images/artisan-weaver-handloom.jpg",
    filterCategory: "FABRICS",
  },
  {
    id: "cat-14",
    name: "Bangalore Silk",
    image: "/images/blue-woven-pure-silk-saree.jpg",
    filterCategory: "DESIGNED BY CHANDRIKA",
  },
  {
    id: "cat-15",
    name: "Banarasi Katan Silk",
    image: "/images/banarasi-gold-brocade-saree.jpg",
    filterCategory: "BANARASI",
  },
  {
    id: "cat-16",
    name: "Kanchipuram Tissue Silk",
    image: "/images/chanderi-tissue-gold-saree.jpg",
    filterCategory: "KANCHIPURAM",
  },
  {
    id: "cat-17",
    name: "Chanderi",
    image: "/images/chanderi-tissue-gold-saree.jpg",
    filterCategory: "OCCASIONS",
  },
  {
    id: "cat-18",
    name: "Brocade Kanchipuram",
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
        {/* Section Heading */}
        <div className="mb-10 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2421] tracking-tight">
            Shop by Category
          </h2>
          <p className="mt-1 text-sm md:text-base text-[#6b6965]">
            Explore our heritage handloom weaves by craft, silk, and technique
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

              {/* Category Title Below Square Card */}
              <span className="mt-2.5 text-[12px] sm:text-[13px] text-[#201f1f] font-medium leading-snug group-hover:text-[#8B0000] transition-colors">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
