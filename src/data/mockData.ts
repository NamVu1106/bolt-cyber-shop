
// Mock data for the e-commerce application

// Products data
export const products = [
  {
    id: 1,
    name: "SteelForce Pro Gaming Mouse",
    price: 79.99,
    category: "mouse",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1000",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1000",
      "https://images.unsplash.com/photo-1618499890638-13200c204204?q=80&w=1000"
    ],
    description: "Professional gaming mouse with 16,000 DPI optical sensor, customizable RGB lighting, and 8 programmable buttons for the ultimate gaming performance.",
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "MechMaster X Mechanical Keyboard",
    price: 129.99,
    category: "keyboard",
    image: "https://images.unsplash.com/photo-1595044778530-695bfe1c5a2d?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1595044778530-695bfe1c5a2d?q=80&w=1000",
      "https://images.unsplash.com/photo-1561112078-7d24e04c3407?q=80&w=1000",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1000"
    ],
    description: "Premium mechanical keyboard with Cherry MX switches, full RGB backlighting, aluminum frame, and customizable macros for gaming and typing enthusiasts.",
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "AudioPhase Pro Gaming Headset",
    price: 99.99,
    category: "headset",
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=1000",
      "https://images.unsplash.com/photo-1606143412458-acc75583a1e0?q=80&w=1000",
      "https://images.unsplash.com/photo-1604182429724-a1e2a2d47490?q=80&w=1000"
    ],
    description: "Immersive 7.1 surround sound gaming headset with memory foam ear cushions, detachable noise-cancelling microphone, and multi-platform compatibility.",
    inStock: true,
    featured: false
  },
  {
    id: 4,
    name: "PowerHub 10-Port USB Station",
    price: 49.99,
    category: "usb-hub",
    image: "https://images.unsplash.com/photo-1625480860249-7a1dabf73b39?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1625480860249-7a1dabf73b39?q=80&w=1000",
      "https://images.unsplash.com/photo-1618760439048-865e011edfee?q=80&w=1000"
    ],
    description: "Expand your connectivity with this powered USB hub featuring 10 ports including USB-C, fast charging, and data transfer up to 10Gbps.",
    inStock: true,
    featured: false
  },
  {
    id: 5,
    name: "UltraWide Curved Gaming Monitor",
    price: 349.99,
    category: "monitor",
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=1000",
      "https://images.unsplash.com/photo-1610264614261-38d985acbcdc?q=80&w=1000"
    ],
    description: "34-inch ultrawide curved gaming monitor with 144Hz refresh rate, 1ms response time, and adaptive sync technology for the ultimate gaming experience.",
    inStock: false,
    featured: true
  },
  {
    id: 6,
    name: "RGBrilliance Mouse Pad XL",
    price: 29.99,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1616768756694-6840b574c5aa?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1616768756694-6840b574c5aa?q=80&w=1000",
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1000"
    ],
    description: "Extended RGB mouse pad with 14 lighting modes, smooth micro-textured surface, and non-slip rubber base for precision gaming and typing.",
    inStock: true,
    featured: false
  },
  {
    id: 7,
    name: "StreamLine Pro Webcam 4K",
    price: 89.99,
    category: "webcam",
    image: "https://images.unsplash.com/photo-1592157941082-8b33a9f6453c?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1592157941082-8b33a9f6453c?q=80&w=1000",
      "https://images.unsplash.com/photo-1615775772454-b0d2d9cbe9fa?q=80&w=1000"
    ],
    description: "Crystal clear 4K webcam with autofocus, built-in dual microphones, and privacy shutter for professional streaming and video conferencing.",
    inStock: true,
    featured: false
  },
  {
    id: 8,
    name: "BattleStation LED Desk",
    price: 249.99,
    category: "furniture",
    image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1000",
      "https://images.unsplash.com/photo-1537208534421-7227afe4f457?q=80&w=1000"
    ],
    description: "Gaming desk with built-in RGB lighting, cable management system, headphone hook, and cup holder for the ultimate gaming setup.",
    inStock: true,
    featured: true
  }
];

// Categories data
export const categories = [
  {
    name: "Mice",
    slug: "mouse",
    icon: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=100"
  },
  {
    name: "Keyboards",
    slug: "keyboard",
    icon: "https://images.unsplash.com/photo-1595044778530-695bfe1c5a2d?q=80&w=100"
  },
  {
    name: "Headsets",
    slug: "headset",
    icon: "https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=100"
  },
  {
    name: "USB Hubs",
    slug: "usb-hub",
    icon: "https://images.unsplash.com/photo-1625480860249-7a1dabf73b39?q=80&w=100"
  },
  {
    name: "Monitors",
    slug: "monitor",
    icon: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=100"
  },
  {
    name: "Accessories",
    slug: "accessories",
    icon: "https://images.unsplash.com/photo-1616768756694-6840b574c5aa?q=80&w=100"
  }
];

// Featured banner data
export const banners = [
  {
    id: 1,
    title: "Gaming Peripherals",
    subtitle: "Upgrade your setup with RGB glory",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1200",
    link: "/products?category=keyboard"
  },
  {
    id: 2,
    title: "Premium Headsets",
    subtitle: "Immersive sound for gaming",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200",
    link: "/products?category=headset"
  },
  {
    id: 3,
    title: "Gaming Monitors",
    subtitle: "Ultra-fast refresh rates",
    image: "https://images.unsplash.com/photo-1616041463039-ed6b7620fc44?q=80&w=1200",
    link: "/products?category=monitor"
  }
];
