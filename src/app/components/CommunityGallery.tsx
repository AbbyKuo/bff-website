import Image from "next/image";

const galleryImages = [
    {src: "/images/galleries/gallery1.jpg", alt: "BFF 1"},
    {src: "/images/galleries/gallery2.jpg", alt: "BFF 2"},
    {src: "/images/galleries/gallery3.jpg", alt: "BFF 3"},
    {src: "/images/galleries/gallery4.jpg", alt: "BFF 4"},
    {src: "/images/galleries/gallery5.jpg", alt: "BFF 5"},
    {src: "/images/galleries/gallery6.jpg", alt: "BFF 6"},
    {src: "/images/galleries/gallery7.jpg", alt: "BFF 7"},
    {src: "/images/galleries/gallery8.jpg", alt: "BFF 8"},
];

export default function CommunityGallery() {
    return (
        <section id="gallery" className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Life at BFF</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Take a look at our community in action—from high-energy court rallies to our social gatherings off the court!
                </p>
                </div>

                {/* Responsive Responsive Grid Layout */}
                {/* On mobile: 2 columns, on tablets: 3 columns, on desktops: 4 columns */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {galleryImages.map((image, index) => (
                    <div 
                    key={index} 
                    className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-sm border border-gray-100 group"
                    >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        loading="lazy"
                    />
                    {/* Subtle hover overlay hint */}
                    <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                ))}
                </div>

            </div>
        </section>
    );
}