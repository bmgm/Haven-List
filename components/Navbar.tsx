"use client";
import { useState } from "react";
import { navLinkData } from "@/data/data"; // Import as "navLinkData"
import Link from "next/link";
import NavLink from "./NavLink";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { playfair } from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const topHamBarVariants: Variants = {
    ham: { rotate: 0 },
    cross: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
  };

  const centerHamBarVariants: Variants = {
    ham: { opacity: 1 },
    cross: { opacity: 0 },
  };

  const bottomHamBarVariants: Variants = {
    ham: { rotate: 0 },
    cross: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
  };

  const mobileMenuBgVariants: Variants = {
    off: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        when: "afterChildren",
      },
    },
    on: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const navLinksItemsVariant: Variants = {
    moff: {
      y: -20,
      opacity: 0,
    },
    mon: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-14 bg-white flex justify-between items-center px-4 relative border-b container mx-auto">
      {/* Logo */}
      <div className="z-40">
        <Link
          href="/"
          className={`${playfair.className} antialiased text-2xl text-orange-600`}
        >
          Heaven List
        </Link>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex gap-6 items-center">
        {navLinkData.map((link) => (
          <NavLink link={link} key={link.id} />
        ))}
        <Button
          variant="outline"
          className="bg-orange-500 text-white border-none rounded-full hover:text-orange-600"
        >
          Add property
        </Button>
      </div>

      {/* Mobile Responsive menu - Nav links */}
      <div className="md:hidden">
        <button
          className="flex flex-col gap-2 relative z-50"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topHamBarVariants}
            animate={open ? "cross" : "ham"}
            className="w-7 h-0.5 bg-gray-900 rounded-lg origin-left"
          ></motion.div>
          <motion.div
            variants={centerHamBarVariants}
            animate={open ? "cross" : "ham"}
            className="w-7 h-0.5 bg-gray-900 rounded-lg"
          ></motion.div>
          <motion.div
            variants={bottomHamBarVariants}
            animate={open ? "cross" : "ham"}
            className="w-7 h-0.5 bg-gray-900 rounded-lg origin-left"
          ></motion.div>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              variants={mobileMenuBgVariants}
              initial="off"
              animate="on"
              exit="off"
              className="z-40 h-screen w-screen absolute top-0 left-0 bg-amber-950 text-white items-center justify-center flex flex-col gap-12 text-2xl"
            >
              {navLinkData.map((link) => (
                <motion.div
                  variants={navLinksItemsVariant}
                  initial="moff"
                  animate="mon"
                  exit="moff"
                  key={link.id}
                >
                  <Link href={link.url} onClick={() => setOpen(false)}>
                    {link.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={navLinksItemsVariant}
                initial="moff"
                animate="mon"
                exit="moff"
              >
                <Button
                  variant="outline"
                  className="bg-orange-600 text-white text-xl px-8 border-none rounded-full hover:text-orange-500"
                >
                  Add Property
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
