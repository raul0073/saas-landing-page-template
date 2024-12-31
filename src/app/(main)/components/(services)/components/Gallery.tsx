import {
	AnimatedTestimonials,
	Testimonial,
} from "@/components/ui/animated-testimonials";

interface GalleryProps {
	data: Testimonial[];
}
export function Gallery({ data }: GalleryProps) {
	return (
        
            <AnimatedTestimonials testimonials={data} />
      
    )
}
