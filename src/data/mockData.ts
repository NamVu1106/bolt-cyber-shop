
// Mock data for the e-commerce application

// Products data
export const products = [
  {
    id: 1,
    name: "Chuột Gaming SteelForce Pro",
    price: 79.99,
    category: "mouse",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1000",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1000",
      "https://images.unsplash.com/photo-1618499890638-13200c204204?q=80&w=1000"
    ],
    description: "Chuột gaming chuyên nghiệp với cảm biến quang học 16.000 DPI, đèn RGB tùy chỉnh, và 8 nút có thể lập trình để mang lại hiệu suất chơi game tối ưu.",
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Bàn Phím Cơ MechMaster X",
    price: 129.99,
    category: "keyboard",
    image: "https://images.unsplash.com/photo-1595044778530-695bfe1c5a2d?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1595044778530-695bfe1c5a2d?q=80&w=1000",
      "https://images.unsplash.com/photo-1561112078-7d24e04c3407?q=80&w=1000",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1000"
    ],
    description: "Bàn phím cơ cao cấp với switch Cherry MX, đèn nền RGB đầy đủ, khung nhôm, và các phím macro có thể tùy chỉnh cho người đam mê gaming và đánh máy.",
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Tai Nghe Gaming AudioPhase Pro",
    price: 99.99,
    category: "headset",
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=1000",
      "https://images.unsplash.com/photo-1606143412458-acc75583a1e0?q=80&w=1000",
      "https://images.unsplash.com/photo-1604182429724-a1e2a2d47490?q=80&w=1000"
    ],
    description: "Tai nghe gaming âm thanh vòm 7.1 đắm chìm với đệm tai bằng mút hoạt tính, micrô khử tiếng ồn có thể tháo rời và tương thích đa nền tảng.",
    inStock: true,
    featured: false
  },
  {
    id: 4,
    name: "Bộ Chia USB PowerHub 10 Cổng",
    price: 49.99,
    category: "usb-hub",
    image: "https://images.unsplash.com/photo-1625480860249-7a1dabf73b39?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1625480860249-7a1dabf73b39?q=80&w=1000",
      "https://images.unsplash.com/photo-1618760439048-865e011edfee?q=80&w=1000"
    ],
    description: "Mở rộng khả năng kết nối của bạn với bộ chia USB này có 10 cổng bao gồm USB-C, sạc nhanh và truyền dữ liệu lên đến 10Gbps.",
    inStock: true,
    featured: false
  },
  {
    id: 5,
    name: "Màn Hình Cong UltraWide Cho Gaming",
    price: 349.99,
    category: "monitor",
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=1000",
      "https://images.unsplash.com/photo-1610264614261-38d985acbcdc?q=80&w=1000"
    ],
    description: "Màn hình gaming cong ultrawide 34 inch với tốc độ làm mới 144Hz, thời gian phản hồi 1ms và công nghệ đồng bộ hóa thích ứng cho trải nghiệm gaming tối ưu.",
    inStock: false,
    featured: true
  },
  {
    id: 6,
    name: "Bàn Di Chuột RGBrilliance XL",
    price: 29.99,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1616768756694-6840b574c5aa?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1616768756694-6840b574c5aa?q=80&w=1000",
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1000"
    ],
    description: "Bàn di chuột RGB mở rộng với 14 chế độ chiếu sáng, bề mặt vi kết cấu mượt mà và đế cao su chống trượt để chơi game và đánh máy chính xác.",
    inStock: true,
    featured: false
  },
  {
    id: 7,
    name: "Webcam 4K StreamLine Pro",
    price: 89.99,
    category: "webcam",
    image: "https://images.unsplash.com/photo-1592157941082-8b33a9f6453c?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1592157941082-8b33a9f6453c?q=80&w=1000",
      "https://images.unsplash.com/photo-1615775772454-b0d2d9cbe9fa?q=80&w=1000"
    ],
    description: "Webcam 4K rõ ràng với tự động lấy nét, micrô kép tích hợp và cửa trập bảo mật để phục vụ cho livestream và hội nghị video chuyên nghiệp.",
    inStock: true,
    featured: false
  },
  {
    id: 8,
    name: "Bàn Gaming LED BattleStation",
    price: 249.99,
    category: "furniture",
    image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1000",
      "https://images.unsplash.com/photo-1537208534421-7227afe4f457?q=80&w=1000"
    ],
    description: "Bàn gaming với đèn RGB tích hợp, hệ thống quản lý cáp, móc treo tai nghe và giá đỡ cốc để thiết lập gaming tốt nhất.",
    inStock: true,
    featured: true
  }
];

// Categories data
export const categories = [
  {
    name: "Chuột",
    slug: "mouse",
    icon: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=100"
  },
  {
    name: "Bàn phím",
    slug: "keyboard",
    icon: "https://images.unsplash.com/photo-1595044778530-695bfe1c5a2d?q=80&w=100"
  },
  {
    name: "Tai nghe",
    slug: "headset",
    icon: "https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=100"
  },
  {
    name: "Bộ chia USB",
    slug: "usb-hub",
    icon: "https://images.unsplash.com/photo-1625480860249-7a1dabf73b39?q=80&w=100"
  },
  {
    name: "Màn hình",
    slug: "monitor",
    icon: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=100"
  },
  {
    name: "Phụ kiện",
    slug: "accessories",
    icon: "https://images.unsplash.com/photo-1616768756694-6840b574c5aa?q=80&w=100"
  }
];

// Featured banner data
export const banners = [
  {
    id: 1,
    title: "Phụ kiện Gaming",
    subtitle: "Nâng cấp setup của bạn với ánh sáng RGB",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1200",
    link: "/products?category=keyboard"
  },
  {
    id: 2,
    title: "Tai nghe Cao cấp",
    subtitle: "Âm thanh sống động cho gaming",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200",
    link: "/products?category=headset"
  },
  {
    id: 3,
    title: "Màn hình Gaming",
    subtitle: "Tốc độ làm mới siêu nhanh",
    image: "https://images.unsplash.com/photo-1616041463039-ed6b7620fc44?q=80&w=1200",
    link: "/products?category=monitor"
  }
];
