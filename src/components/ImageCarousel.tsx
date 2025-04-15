import React, { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ProjectImageCarouselProps {
  images: string[];
}

const ImprovedProjectImageCarousel: React.FC<ProjectImageCarouselProps> = ({
  images,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="mt-6">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div
                  className="h-48 rounded-lg overflow-hidden bg-gray-100 cursor-pointer"
                  onClick={() => handleImageClick(image)}
                >
                  <Image
                    width={400}
                    height={300}
                    src={image}
                    alt={`Project screenshot ${index + 1}`}
                    className="h-full w-full object-cover object-top transition-transform hover:scale-105"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-2">
            <CarouselPrevious className="relative inset-0 translate-y-0 translate-x-0" />
            <CarouselNext className="relative inset-0 translate-y-0 translate-x-0" />
          </div>
        </Carousel>
      </div>

      {/* Improved full-screen image modal with better sizing */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] w-full h-full p-0 bg-black border-none">
          <DialogClose asChild>
            <button className="absolute right-4 top-4 rounded-full bg-black/50 p-1 text-white hover:bg-black/70 focus:outline-none z-10">
              <X size={20} />
            </button>
          </DialogClose>
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full max-w-full max-h-full">
              <Image
                src={selectedImage}
                alt="Project image"
                fill={true}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImprovedProjectImageCarousel;
