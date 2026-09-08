# Vườn Mầm Việt

Website bán cây giống chuyên nghiệp, tối ưu cho cả máy tính và điện thoại. Website có danh mục sản phẩm, tìm kiếm/lọc sản phẩm, giỏ hàng, đặt hàng qua Zalo và nút gọi điện nhanh.

## Chạy website

Yêu cầu: [Node.js](https://nodejs.org/) phiên bản 18 trở lên.

```bash
npm install
npm run dev
```

Sau đó mở địa chỉ được hiển thị trong terminal (mặc định `http://localhost:5173`).

## Tạo bản production

```bash
npm run build
npm run preview
```

Mã nguồn đã được cấu hình bằng Vite + React. Thư mục build production là `dist/`.

## Tùy chỉnh thông tin cửa hàng

- Sản phẩm và giá bán nằm trong mảng `products` ở đầu file `src/main.jsx`.
- Thay số điện thoại `0901234567` và liên kết Zalo trong `src/main.jsx` bằng thông tin thật của nhà vườn.
- Giao diện, màu sắc và bố cục nằm trong `src/styles.css`.

> Ảnh sản phẩm hiện được tải từ Unsplash, vì vậy khi chạy website cần có kết nối Internet để hiển thị ảnh.
