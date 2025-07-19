import BentoGridDemo from "./bento-grid-demo"
import Image from "next/image"

const OurFeatures = () => {
  // Wedding planning features data with real images
  const featuresData = [
    {
      title: "Wedding Timeline",
      description:
        "Build a personalized timeline that keeps your wedding planning on track. From venue tours to dress fittings, never miss a moment.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl overflow-hidden">
          <Image src="/calender.avif" height={200} width={600} alt="Wedding Hall Booking" className="w-full h-full object-cover" />
        </div>
      ),
      className: "bg-white hover:shadow-lg transition-shadow duration-300",
    },
    {
      title: "Guest List Manager",
      description:
        "Easily create and manage your guest list. Track RSVPs, meal preferences, plus-ones, and seating arrangements — all in one place.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl overflow-hidden">
          <Image src="/guest.jpg" height={200} width={600} alt="Wedding Hall Booking" className="w-full h-full object-cover" />
        </div>
      ),
      className: "bg-white hover:shadow-lg transition-shadow duration-300",
    },
    {
      title: "Digital Invitations",
      description:
        "Design and send elegant digital invites that match your wedding theme. Guests can RSVP directly and receive automatic reminders.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl overflow-hidden">
          <Image src="/invitations.jpg" height={200} width={600} alt="Wedding Hall Booking" className="w-full h-full object-cover" />
        </div>
      ),
      className: "bg-white hover:shadow-lg transition-shadow duration-300",
    },
    {
      title: "Budget Tracker",
      description:
        "Stay financially confident with real-time expense tracking, category breakdowns, and budget alerts to help you avoid overspending.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl overflow-hidden">
          <Image src="/budget.webp" height={200} width={600} alt="Wedding Hall Booking" className="w-full h-full object-cover" />
        </div>
      ),
      className: "bg-white hover:shadow-lg transition-shadow duration-300 md:col-span-2",
    },
    {
      title: "Photo & Memory Vault",
      description:
        "Save and organize your special moments — from engagement to wedding day — and share them with loved ones.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl overflow-hidden">
          <Image src="/photo.jpg" height={200} width={600} alt="Wedding Hall Booking" className="w-full h-full object-cover" />
        </div>
      ),
      className: "bg-white hover:shadow-lg transition-shadow duration-300",
    },
    {
      title: "Planning Dashboard",
      description:
        "Your command center for everything — from guest updates to vendor communication and task checklists.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl overflow-hidden">
          <Image src="/dashboard.png" height={200} width={600} alt="Wedding Hall Booking" className="w-full h-full object-cover" />
        </div>
      ),
      className: "bg-white hover:shadow-lg transition-shadow duration-300",
    },
    {
      title: "Wedding Hall Booking",
      description:
        "Discover and reserve the perfect beautiful venue with availability calendars, virtual tours, and direct bookings through the app.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl overflow-hidden">
          <Image src="/weddinghall.webp" height={200} width={600} alt="Wedding Hall Booking" className="w-full h-full object-cover" />
        </div>
      ),
      className: "bg-white hover:shadow-lg transition-shadow duration-300 md:col-span-2",
    },
  ]

  return (
    <div className="relative w-full min-h-screen mb-10">
      {/* Curved Background Section */}
      <div className="absolute top-0 left-0 w-[50%] h-[102%]">
        <div className="w-full h-full bg-[#F5E6B8] rounded-r-full"></div>
      </div>

      {/* Title positioned on the curved section */}
      <div className="absolute top-20 left-16 z-20 mb-50">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#2C5530] font-bold leading-tight">Our Features</h1>
      </div>

      {/* Feature Cards Container - Overlaying both sections */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center mt-5">
        <div className="w-full max-w-6xl px-8 pt-45">
          <BentoGridDemo
            items={featuresData}
            className="gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default OurFeatures
