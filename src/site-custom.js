const PHONE = '0899101222';
const PHONE_DISPLAY = '0899 101 222';

function replaceTextNodes(root, from, to) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    if (node.nodeValue && node.nodeValue.includes(from)) {
      node.nodeValue = node.nodeValue.replaceAll(from, to);
    }
  });
}

function applyBranding() {
  document.querySelectorAll('.brand').forEach(brand => {
    const textWrap = brand.querySelector(':scope > span:last-child');
    if (textWrap && !textWrap.textContent.includes('VƯỜN CÂY MẦM XANH VIỆT')) {
      textWrap.innerHTML = 'VƯỜN CÂY <b>MẦM XANH VIỆT</b><small>CÂY KHỎE • VƯỜN XANH</small>';
    }
  });

  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    if (link.getAttribute('href') !== `tel:${PHONE}`) link.setAttribute('href', `tel:${PHONE}`);
  });
  document.querySelectorAll('a[href*="zalo.me/"]').forEach(link => {
    if (link.getAttribute('href') !== `https://zalo.me/${PHONE}`) link.setAttribute('href', `https://zalo.me/${PHONE}`);
  });

  replaceTextNodes(document.body, '0901 234 567', PHONE_DISPLAY);
  replaceTextNodes(document.body, 'Vườn Mầm Việt', 'Vườn Cây Mầm Xanh Việt');
  replaceTextNodes(document.body, 'XANH MẦM VIỆT', 'MẦM XANH VIỆT');
  replaceTextNodes(document.body, 'Từ một khu vườn nhỏ tại Bến Tre, chúng tôi dành hơn 10 năm để tuyển chọn và ươm dưỡng những giống cây phù hợp nhất với khí hậu Việt Nam.', 'Từ những luống cây được chăm sóc mỗi ngày, chúng tôi tuyển chọn và ươm dưỡng những giống cây khỏe, phù hợp với điều kiện trồng tại Việt Nam.');
}

applyBranding();
const observer = new MutationObserver(() => applyBranding());
observer.observe(document.body, { childList: true, subtree: true });
