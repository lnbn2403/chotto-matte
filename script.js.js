const products = [
  {
    name: "Matcha Latte",
    price: 22000,
    image: "https://link-anh-matcha.jpg",
    options: ["Có đường", "Không đường"]
  },
  {
    name: "Combo Đặc Biệt",
    price: 60000,
    image: "https://link-anh-combo.jpg",
    options: ["Không đổi món"]
  }
];

const productList = document.querySelector(".product-list");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>Giá: ${product.price.toLocaleString()}đ</p>
    <label>Chọn loại:</label>
    <select>
      ${product.options.map(opt => `<option>${opt}</option>`).join("")}
    </select>
    <label>Thêm topping (+3.000đ):</label>
    <select>
      <option>Không thêm</option>
      <option>Hạt chia</option>
      <option>Yến mạch</option>
    </select>
    <button>Đặt món</button>
  `;
  productList.appendChild(div);
});