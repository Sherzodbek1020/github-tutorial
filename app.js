const products = [
  {
    id: 1,
    title: "Apple MacBook Pro 14 Inch Space Grey",
    price: 1999.99,
    category: "laptop",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
  },

  {
    id: 2,
    title: "Apple Airpods",
    price: 129.99,
    category: "headphone",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
  },

  {
    id: 3,
    title: "iPhone X",
    price: 899.99,
    category: "smartphone",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png",
  },

  {
    id: 4,
    title: "iPhone 6",
    price: 299.99,
    category: "smartphone",
    thumbnail: "./img/iphone6.webp",
  },

  {
    id: 5,
    title: "Samsung Galaxy S8",
    price: 499.99,
    category: "smartphone",
    thumbnail: "./img/samsung8.webp",
  },

  {
    id: 6,
    title: "Huawei Matebook X Pro",
    price: 1399.99,
    category: "laptop",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png",
  },

  {
    id: 7,
    title: "Nike Air Jordan 1 Red And Black",
    price: 149.99,
    category: "clothes",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/thumbnail.png",
  },

  {
    id: 8,
    title: "Man Plaid Shirt",
    price: 34.99,
    category: "clothes",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/thumbnail.png",
  },

  {
    id: 9,
    title: "Samsung Galaxy Tab S8 Plus Grey",
    price: 599.99,
    category: "tablet",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/thumbnail.png",
  },

  {
    id: 10,
    title: "Sports Sneakers Off White Red",
    price: 109.99,
    category: "clothes",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/thumbnail.png",
  },

  {
    id: 11,
    title: "Samsung Galaxy S10",
    price: 699.99,
    category: "smartphone",
    thumbnail: "./img/samsungs10.webp",
  },

  {
    id: 12,
    title: "Apple Airpods",
    price: 129.99,
    category: "headphone",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
  },

  {
    id: 13,
    title: "Sports Sneakers Off White & Red",
    price: 119.99,
    category: "clothes",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/thumbnail.png",
  },

  {
    id: 14,
    title: "Oppo F19 Pro+",
    price: 399.99,
    category: "smartphone",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro+/thumbnail.png",
  },

  {
    id: 15,
    title: "Blue & Black Check Shirt",
    price: 29.99,
    category: "clothes",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/thumbnail.png",
  },

  {
    id: 16,
    title: "Huawei Matebook X Pro",
    price: 1399.99,
    category: "laptop",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png",
  },

  {
    id: 17,
    title: "Apple MacBook Pro 14 Inch Space Grey",
    price: 1999.99,
    category: "electronics",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
  },

  {
    id: 18,
    title: "Apple Airpods",
    price: 129.99,
    category: "electronics",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
  },

  {
    id: 19,
    title: "iPhone X",
    price: 899.99,
    category: "electronics",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png",
  },

  {
    id: 20,
    title: "iPhone 6",
    price: 299.99,
    category: "electronics",
    thumbnail: "./img/iphone6.webp",
  },

  {
    id: 21,
    title: "Samsung Galaxy S8",
    price: 499.99,
    category: "electronics",
    thumbnail: "./img/samsung8.webp",
  },

  {
    id: 22,
    title: "Huawei Matebook X Pro",
    price: 1399.99,
    category: "electronics",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png",
  },
];

const box = document.querySelector(".box");

function showProducts(product) {
  const parentElement = document.querySelector(".new-box");

  parentElement.innerHTML = "";

  product.map((product) => {
    parentElement.innerHTML += `
         <div class='cart'>
           <div class = 'img-cart'>
           <img src='./img/main/eye-solid (2).svg' alt="rasm bor"  class = 'eye-img1' onclick='ayeName(${product.id})' />
           </div>
           <div class='cart-img'>
             <img src=${product.thumbnail} alt="rasm bor" />
           </div>
           <span  class='cart-span'>${product.title}</span>
           <p class='cart-p'>$${product.price}</p>
           <button class='cart-button'>В корзинку</button>
         </div>
        `;
  });
}

showProducts(products);

const searchInput = document.querySelector(".search-input");

const menu = document.getElementById("menu");
const heroLeft = document.getElementById("hero-left");
const menu2 = document.getElementById("menu2");

menu.addEventListener("click", function () {
  heroLeft.style.transform = "translateX(0px)";
  menu.style.display = "none";
  menu2.style.display = "block";
  heroLeft.style.transition = "all 0.5s linear";
});

menu2.addEventListener("click", function () {
  heroLeft.style.transform = "translateY(-360px)";
  menu2.style.display = "none";
  menu.style.display = "block";
});

const pLemant = document.getElementById("main-p");
const divMain = document.getElementById("main-lox");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const p = document.getElementById("section");
const divMain1 = document.getElementById("main-lox1");

divMain.addEventListener("click", function () {
  pLemant.innerHTML =
    "Интернет-магазин PlaceMik – это доступные цены, широкий, регулярно обновляемый ассортимент. В онлайн-каталоге PlaceMik представлено около 35 000 ведущих брендов женской, мужской и детской одежды и обуви. Покупателям предлагается электроника, книжная продукция, детские товары. В интернет-магазине можно приобрести продукцию для дома, продукты питания, товары для красоты, ювелирные изделия, игрушки. Для удобства пользования онлайн-каталог поделен на разделы, все товары можно сортировать по ряду критериев: цена, материал изготовления,  сезонность, бренд. Интернет-магазин PlaceMik регулярно проводит масштабные распродажи. В рамках таких акций предоставляются большие скидки (до 95%) на одежду, обувь, детские товары.Условия распродаж распространяютс я и на электронику, продукты питания, товары для дома, книги и многое другое. Интернет-магазин PlaceMik известен не только широким ассортиментом, но и высоким качеством обслуживания клиентов. Процесс покупки удобен и прост, пользователи могут оформить заказ в несколько кликов. Служба доставки охватывает всю страну и работает оперативно, что делает PlaceMik популярным среди покупателей. Кроме того, существует мобильное приложение, что позволяет совершать покупки еще быстрее и удобнее.";
  img1.style.display = "none";
  img2.style.display = "block";
});

divMain1.addEventListener("click", function () {
  pLemant.innerHTML =
    "Интернет-магазин PlaceMik – это доступные цены, широкий, регулярно обновляемый ассортимент. В онлайн-каталоге PlaceMik представлено около 35 000 ведущих брендов женской, мужской и детской одежды и обуви. Покупателям предлагается электроника, книжная продукция, детские товары. В интернет-магазине можно приобрести продукцию для дома, продукты питания, товары для красоты, ювелирные изделия, игрушки. Для удобства пользования онлайн-каталог поделен на разделы, все товары можно сортировать по ряду критериев: цена, материал изготовления...";
  img1.style.display = "block";
  img2.style.display = "none";
});

const resualt1 = document.querySelector(".aye");
const ayeCart = document.querySelector(".close-btn");

function ayeName(id1) {
  products.filter((product) => {
    if (product.id == id1) {
      console.log(product);
      resualt1.innerHTML = `
            <div class="popup-content">
              <img src="${product.thumbnail}" alt="Ko'rish" class = 'eyeimg'>
              <p class = 'eyep'>${product.title} </p>
              <p class = 'eyep1'>$${product.price}</p>
              <button class='cart-button'>В корзинку</button>
              <button class="close-btn" onclick='closeModal()'>X</button>
            </div>
          `;
    }
  });
}
function closeModal() {
  resualt1.style.display = "none";
}

function ayeName(id1) {
  const product = products.find((product) => product.id === id1);

  if (product) {
    console.log(product);
    resualt1.innerHTML = `
      <div class="popup-content">
        <img src="${product.thumbnail}" alt="Ko'rish" class='eyeimg'>
        <p class='eyep'>${product.title}</p>
        <p class='eyep1'>$${product.price}</p>
        <button class='cart-button'>В корзинку</button>
        <button class="close-btn" onclick='closeModal()'>X</button>
      </div>
    `;
    resualt1.style.display = "block";
  }
}

const searchedResults = document.querySelector(".searched-results");
const searchedProducts = document.querySelector(".searched-products");

searchInput.addEventListener("input", function () {
  const searchInputValue = searchInput.value.trim().toLowerCase();
  searchedResults.innerHTML = "";

  if (searchInputValue.length > 0) {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchInputValue)
    );

    if (filteredProducts.length > 0) {
      searchedProducts.style.display = "block";
      filteredProducts.forEach((product) => {
        searchedResults.innerHTML += `
          <div class="searched-products_cart" onclick='ayeName(${product.id})'>
             <div class="searched-product_img">
              <img src="${product.thumbnail}" alt="Product Image" />
             </div>
             <h4>${product.title}</h4>
             <p>$${product.price}</p>
          </div>
        `;
      });
    } else {
      searchedResults.innerHTML = `<h3 class='inputPvalue'>Kechirasiz bunday buyum topilmadi</h3>`;
    }
  } else {
    searchedProducts.style.display = "none";
  }
  showFilteredProducts(filteredTitle, searchedProducts);
});

searchInput.addEventListener("input", function () {
  const searchInputValue = searchInput.value.trim().toLowerCase();
  searchedResults.innerHTML = "";

  if (searchInputValue.length > 0) {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchInputValue)
    );

    if (filteredProducts.length > 0) {
      searchedProducts.style.display = "block";
      filteredProducts.forEach((product) => {
        searchedResults.innerHTML += `
          <div class="searched-products_cart" onclick='ayeName(${product.id})'>
             <div class="searched-product_img">
              <img src="${product.thumbnail}" alt="Product Image" />
             </div>
             <h4>${product.title}</h4>
             <p>$${product.price}</p>
          </div>
        `;
      });
    } else {
      searchedResults.innerHTML = `<h3 class='inputPvalue'>Kechirasiz bunday buyum topilmadi</h3>`;
    }ztez

    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        showProducts(filteredProducts);
        searchedProducts.style.display = "none";
        searchInput.value = "";
      }
    });
  } else {
    searchedProducts.style.display = "none";
  }
});

window.addEventListener("click", function () {
  searchedProducts.style.display = "none";
  searchInput.value = "";
});

function showDetail(id) {
  const filterById = products.filter((item) => item.id === id);

  console.log(filterById);
}
