import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Check, ChevronDown, Leaf, Menu, Minus, Phone, Plus, Search, ShoppingBag, Sprout, Star, Truck, X } from 'lucide-react';
import './styles.css';

const products = [
  { id: 1, name: 'Cây giống Sầu riêng Ri6', category: 'Cây ăn trái', price: 85000, old: 95000, badge: 'Bán chạy', img: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=900&q=85', desc: 'Ghép chuẩn giống • Cao 60–80cm' },
  { id: 2, name: 'Cây giống Bưởi da xanh', category: 'Cây ăn trái', price: 55000, old: 65000, badge: '-15%', img: 'https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?auto=format&fit=crop&w=900&q=85', desc: 'Chiết cành khỏe • Sớm cho trái' },
  { id: 3, name: 'Cây Hương thảo', category: 'Cây gia vị', price: 35000, badge: 'Dễ trồng', img: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=900&q=85', desc: 'Bầu ươm ươm sẵn • Thơm tự nhiên' },
  { id: 4, name: 'Cây giống Hoa hồng cổ', category: 'Hoa & cảnh', price: 120000, old: 145000, badge: 'Mới', img: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85', desc: 'Nhiều màu • Thuần khí hậu Việt' },
  { id: 5, name: 'Cây giống Ổi nữ hoàng', category: 'Cây ăn trái', price: 45000, badge: 'Khỏe mạnh', img: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=85', desc: 'Ghép chuẩn giống • Tỉ lệ sống cao' },
  { id: 6, name: 'Cây Trầu bà lá xẻ', category: 'Cây nội thất', price: 95000, old: 110000, badge: 'Bán chạy', img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85', desc: 'Lọc không khí • Chậu bầu 25cm' },
  { id: 7, name: 'Sen đá mix màu', category: 'Hoa & cảnh', price: 29000, badge: 'Tiết kiệm', img: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=900&q=85', desc: 'Dễ chăm sóc • Chậu 8cm' },
  { id: 8, name: 'Cây Chanh không hạt', category: 'Cây ăn trái', price: 50000, badge: 'Nhà vườn chọn', img: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=900&q=85', desc: 'Sai trái • Kháng bệnh tốt' },
];

const money = value => new Intl.NumberFormat('vi-VN').format(value) + 'đ';

function App() {
  const [category, setCategory] = useState('Tất cả');
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const filtered = useMemo(() => products.filter(p => (category === 'Tất cả' || p.category === category) && p.name.toLowerCase().includes(search.toLowerCase())), [category, search]);
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const addCart = product => {
    setCart(items => items.some(i => i.id === product.id) ? items.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i) : [...items, { ...product, qty: 1 }]);
    setCartOpen(true);
  };
  const updateQty = (id, delta) => setCart(items => items.map(i => i.id === id ? { ...i, qty: i.qty + delta } : i).filter(i => i.qty > 0));

  return <>
    <div className="topbar">Miễn phí giao hàng cho đơn từ 500.000đ <span>•</span> Tư vấn kỹ thuật trọn đời</div>
    <header>
      <a href="#home" className="brand"><span className="brand-icon"><Leaf /></span><span>VƯỜN MẦM <b>VIỆT</b><small>CÂY KHỎE • VƯỜN XANH</small></span></a>
      <nav className={menuOpen ? 'open' : ''}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Trang chủ</a><a href="#products" onClick={() => setMenuOpen(false)}>Cây giống</a><a href="#about" onClick={() => setMenuOpen(false)}>Về nhà vườn</a><a href="#guide" onClick={() => setMenuOpen(false)}>Cẩm nang</a><a href="#contact" onClick={() => setMenuOpen(false)}>Liên hệ</a>
      </nav>
      <div className="header-actions"><button className="icon-btn search-trigger" onClick={() => document.querySelector('.searchbox input').focus()} aria-label="Tìm kiếm"><Search /></button><button className="cart-btn" onClick={() => setCartOpen(true)}><ShoppingBag /><span className="cart-text">Giỏ hàng</span><i>{totalQty}</i></button><button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">{menuOpen ? <X /> : <Menu />}</button></div>
    </header>

    <main id="home">
      <section className="hero">
        <div className="hero-copy"><div className="eyebrow"><Sprout /> TỪ NHÀ VƯỜN ĐẾN VƯỜN NHÀ</div><h1>Gieo mầm xanh,<br/><em>gặt mùa lành.</em></h1><p>Cây giống khỏe mạnh, tuyển chọn tận vườn. Chúng tôi không chỉ bán cây — chúng tôi đồng hành cùng khu vườn của bạn.</p><div className="hero-buttons"><a href="#products" className="btn primary">Khám phá cây giống <ArrowRight /></a><a href="tel:0901234567" className="btn secondary"><Phone /> 0901 234 567</a></div><div className="proof"><div><b>10+</b><span>Năm kinh nghiệm</span></div><div><b>50K+</b><span>Cây đã trao tay</span></div><div><b>98%</b><span>Khách hài lòng</span></div></div></div>
        <div className="hero-visual"><div className="hero-image"></div><div className="quality-card"><span><Check /></span><div><b>Cam kết khỏe mạnh</b><small>Đổi mới trong 7 ngày</small></div></div><div className="round-text">NUÔI DƯỠNG TỪ TÂM • XANH MẦM VIỆT •</div></div>
      </section>

      <section className="benefits"><div><span><Truck /></span><b>Giao hàng an toàn</b><small>Đóng gói chuyên dụng</small></div><div><span><Sprout /></span><b>Chuẩn giống 100%</b><small>Nguồn gốc rõ ràng</small></div><div><span><Phone /></span><b>Tư vấn tận tâm</b><small>Hỗ trợ kỹ thuật trọn đời</small></div><div><span><Check /></span><b>Bảo hành cây</b><small>Đổi mới trong 7 ngày</small></div></section>

      <section className="products-section" id="products">
        <div className="section-heading"><div><span>SẢN PHẨM NỔI BẬT</span><h2>Chọn một mầm xanh<br/>cho khu vườn bạn</h2></div><p>Mỗi cây giống được chăm sóc kỹ lưỡng, kiểm tra bộ rễ và sức khỏe trước khi rời vườn.</p></div>
        <div className="product-tools"><div className="filters">{['Tất cả','Cây ăn trái','Hoa & cảnh','Cây nội thất','Cây gia vị'].map(c => <button key={c} className={category === c ? 'active' : ''} onClick={() => setCategory(c)}>{c}</button>)}</div><label className="searchbox"><Search /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Tìm cây giống..."/></label></div>
        <div className="product-grid">{filtered.map(p => <article className="product-card" key={p.id}><div className="product-image"><img src={p.img} alt={p.name}/><span>{p.badge}</span><button onClick={() => addCart(p)} aria-label={`Thêm ${p.name}`}><Plus /></button></div><div className="product-info"><small>{p.category}</small><h3>{p.name}</h3><p>{p.desc}</p><div><strong>{money(p.price)}</strong>{p.old && <del>{money(p.old)}</del>}<button onClick={() => addCart(p)}>Đặt cây</button></div></div></article>)}</div>
        {filtered.length === 0 && <div className="empty">Không tìm thấy cây giống phù hợp.</div>}
      </section>

      <section className="story" id="about"><div className="story-image"><span>VƯỜN ƯƠM<br/><b>ĐẠT CHUẨN</b></span></div><div className="story-copy"><span>CHUYỆN NHÀ VƯỜN</span><h2>Trồng một cái cây,<br/>vun một niềm tin.</h2><p>Từ một khu vườn nhỏ tại Bến Tre, chúng tôi dành hơn 10 năm để tuyển chọn và ươm dưỡng những giống cây phù hợp nhất với khí hậu Việt Nam.</p><ul><li><Check /> Quy trình ươm dưỡng tự nhiên, hạn chế hóa chất</li><li><Check /> Kiểm tra kỹ bộ rễ và sâu bệnh trước khi giao</li><li><Check /> Kỹ sư nông nghiệp đồng hành trong suốt quá trình trồng</li></ul><a href="#contact">Tìm hiểu về chúng tôi <ArrowRight /></a></div></section>

      <section className="guide" id="guide"><div><span>CẨM NANG XANH</span><h2>Trồng đúng cách,<br/>cây khỏe mỗi ngày.</h2></div><div className="guide-cards"><article><b>01</b><h3>Chọn vị trí trồng</h3><p>Hiểu ánh sáng, đất và không gian mà cây của bạn cần.</p></article><article><b>02</b><h3>Chăm sóc bộ rễ</h3><p>Tưới nước đúng lượng và bổ sung dinh dưỡng theo mùa.</p></article><article><b>03</b><h3>Phòng sâu bệnh</h3><p>Nhận biết sớm và xử lý bằng những giải pháp thân thiện.</p></article></div></section>
    </main>

    <footer id="contact"><div className="footer-main"><div><a className="brand light" href="#home"><span className="brand-icon"><Leaf /></span><span>VƯỜN MẦM <b>VIỆT</b><small>CÂY KHỎE • VƯỜN XANH</small></span></a><p>Mang những mầm xanh khỏe mạnh<br/>đến mọi khu vườn Việt.</p></div><div><h4>Khám phá</h4><a href="#products">Cây ăn trái</a><a href="#products">Hoa & cây cảnh</a><a href="#products">Cây nội thất</a></div><div><h4>Hỗ trợ</h4><a href="#guide">Hướng dẫn trồng</a><a href="#contact">Chính sách giao hàng</a><a href="#contact">Bảo hành cây</a></div><div><h4>Liên hệ nhà vườn</h4><a href="tel:0901234567"><Phone/> 0901 234 567</a><a href="https://zalo.me/0901234567" target="_blank" rel="noreferrer"><span className="zalo-small">Z</span> Chat Zalo ngay</a><small>07:00 – 21:00, Thứ 2 – Chủ nhật</small></div></div><div className="copyright">© 2026 Vườn Mầm Việt. Gieo mầm bằng cả tấm lòng.</div></footer>

    <div className="floating"><a href="tel:0901234567" className="float-phone"><Phone /></a><a href="https://zalo.me/0901234567" target="_blank" rel="noreferrer" className="float-zalo">Zalo</a></div>
    {cartOpen && <><div className="overlay" onClick={() => setCartOpen(false)}></div><aside className="cart-drawer"><div className="cart-head"><div><small>ĐƠN HÀNG CỦA BẠN</small><h2>Giỏ cây xanh <span>({totalQty})</span></h2></div><button onClick={() => setCartOpen(false)}><X /></button></div><div className="cart-list">{cart.length === 0 ? <div className="cart-empty"><ShoppingBag/><h3>Giỏ hàng đang trống</h3><p>Hãy chọn một mầm xanh cho khu vườn nhé!</p><button onClick={() => setCartOpen(false)}>Tiếp tục mua sắm</button></div> : cart.map(item => <div className="cart-item" key={item.id}><img src={item.img} alt=""/><div><h4>{item.name}</h4><strong>{money(item.price)}</strong><div className="qty"><button onClick={() => updateQty(item.id,-1)}><Minus/></button><span>{item.qty}</span><button onClick={() => updateQty(item.id,1)}><Plus/></button></div></div></div>)}</div>{cart.length > 0 && <div className="cart-footer"><div><span>Tạm tính</span><b>{money(total)}</b></div><p>Phí vận chuyển sẽ được xác nhận khi tư vấn.</p><a href={`https://zalo.me/0901234567`} target="_blank" rel="noreferrer">Đặt hàng qua Zalo <ArrowRight/></a><a className="call-order" href="tel:0901234567"><Phone/> Gọi để đặt nhanh</a></div>}</aside></>}
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
