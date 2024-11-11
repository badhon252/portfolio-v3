/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "components/ui/button";

export const ImageCarousel: React.FC<{ images: any }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(
    (event: WheelEvent) => {
      if (isModalOpen) {
        event.preventDefault();
        if (event.deltaY > 0) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        } else {
          setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length,
          );
        }
      } else {
        modalRef.current?.removeEventListener("wheel", handleScroll);
      }
    },
    [isModalOpen],
  );

  useEffect(() => {
    const currentRef = modalRef.current;

    if (isModalOpen) {
      currentRef?.addEventListener("wheel", handleScroll, { passive: false });
    }
  }, [isModalOpen, handleScroll]);

  return (
    <div className="relative">
      <div className="aspect-video relative overflow-hidden rounded-lg shadow-xl group">
        <Image
          src={images}
          alt={`Project screenshot ${currentIndex + 1}`}
          fill // Use fill prop instead of layout
          style={{ objectFit: "cover" }} // Use style to set objectFit
          sizes="(min-width: 768px) 768px, 100vw" // Add sizes
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            <Maximize2 className="size-6 text-white" />
            <span className="sr-only">View fullscreen</span>
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          >
            <div className="relative size-full flex items-center justify-center">
              <Image
                src={images}
                alt={`Project screenshot ${currentIndex + 1}`}
                fill
                style={{ objectFit: "contain" }}
                sizes="(min-width: 768px) 768px, 100vw" // Add sizes
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white"
                onClick={() => setIsModalOpen(false)}
              >
                <X className="size-6" />
                <span className="sr-only">Close fullscreen</span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
