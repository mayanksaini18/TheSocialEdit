"use client"


// Mock Data - Replace 'videoUrl' with your actual local file paths or cloud URLs (e.g., AWS S3, Cloudinary)
const projects = [
  {
    id: 1,
    client: "Urban Brew",
    category: "Brand Identity",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-coffee-maker-pouring-coffee-into-a-glass-4179-large.mp4", 
    poster: "/api/placeholder/400/700", // Replace with an actual image thumbnail
  },
  {
    id: 2,
    client: "Neon Fitness",
    category: "Reels Production",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-athlete-working-out-with-heavy-ropes-in-the-gym-437-large.mp4",
    poster: "/api/placeholder/400/700",
  },
  {
    id: 3,
    client: "Tech Nova",
    category: "Product Launch",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-typing-on-a-mechanical-keyboard-with-backlight-4241-large.mp4",
    poster: "/api/placeholder/400/700",
  },
];

const VideoCard = ({ project }) => {
  

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Optional: Reset video to start
    }
  };

  return (
    <div 
      className="group relative flex flex-col gap-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Container - Aspect Ratio 9:16 for Reels */}
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-xl">
        
        {/* The Video */}
        <video        
          
          src={project.videoUrl}
          poster={project.poster}
          muted
          loop
          playsInline
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay: Play Icon (Disappears on Hover) */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 group-hover:opacity-0">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
    
          </div>
        </div>

        {/* Overlay: View Project Button (Appears on Hover) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
           <button className="rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition-transform hover:scale-105">
             View Case Study
           </button>
        </div>
      </div>

      {/* Project Info */}
      <div className="flex items-start justify-between px-1">
        <div>
          <h3 className="text-xl font-bold text-white">{project.client}</h3>
          <p className="text-sm font-medium text-neutral-400">{project.category}</p>
        </div>
        <div className="rounded-full border border-neutral-800 p-2 text-neutral-400 transition-colors group-hover:border-white group-hover:text-white">
         
        </div>
      </div>
    </div>
  );
};

const WorkSection = () => {
  return (
    <section className=" bg-neutral-950 ">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-black uppercase tracking-tighter text-white md:text-7xl">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Work</span>
            </h2>
            <p className="mt-6 text-lg text-neutral-400 max-w-lg">
              A curation of our best edits. We turn raw footage into scrolling-stopping content for brands that dare to be different.
            </p>
          </div>
          
          <button className="hidden md:flex items-center gap-2 border-b border-white pb-1 text-sm font-bold uppercase tracking-widest text-white hover:text-yellow-500 hover:border-yellow-500 transition-colors">
            View All Projects
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <VideoCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mobile "View All" Button (Only visible on small screens) */}
        <div className="mt-12 flex justify-center md:hidden">
          <button className="rounded-full border border-neutral-700 px-8 py-3 text-sm font-bold uppercase text-white">
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
};

export default WorkSection;