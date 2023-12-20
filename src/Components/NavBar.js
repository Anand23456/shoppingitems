const NavBar = ({ newData, setData }) => {
    const handelPriceChange = (cost) => {
      let pricedData = [...newData];
  
      if (cost === "prices") {
        // Sort by default prices
        const defaultPricedData = pricedData.sort((a, b) => a.id - b.id);
        setData(defaultPricedData);
      } else if (cost === 'lowtohigh') {
        const lowPricedData = pricedData.sort((a, b) => a.price - b.price);
        setData(lowPricedData);
      } else {
        // Apply price filter within the "electronics" category
        const electronicsData = pricedData.filter((prod) => prod.category === 'electronics');
        const highPricedData = electronicsData.sort((a, b) => b.price - a.price);
        setData(highPricedData);
      }
    };
  
    const handleCategoryChange = (items) => {
      const storedData = [...newData];
      if (items === 'All products') {
        handelPriceChange('prices'); // Apply the price filter for default sorting
      } else {
        const filteredData = storedData.filter((prod) => prod.category === items);
        handelPriceChange('prices'); // Apply the price filter for the selected category
        setData(filteredData);
      }
    };
  
    return (
      <>
        <nav>
          <div class="dropdown-menu">
            <button class="menu-btn">Price</button>
            <div class="menu-content">
              <a class="links-hidden" onClick={() => handelPriceChange('prices')}>
                Prices
              </a>
              <a class="links-hidden" onClick={() => handelPriceChange('lowtohigh')}>
                Lowtohigh
              </a>
              <a class="links-hidden" onClick={() => handelPriceChange('hightolow')}>
                Hightolow
              </a>
            </div>
          </div>
          <div class="dropdown-menu">
            <button class="menu-btn">Products lists</button>
            <div class="menu-content">
              <a class="links-hidden" onClick={() => handleCategoryChange('All products')}>
                Allproducts
              </a>
              <a class="links-hidden" onClick={() => handleCategoryChange("men's clothing")}>
                men's clothing
              </a>
              <a class="links-hidden" onClick={() => handleCategoryChange("electronics")}>
                electronics
              </a>
              <a class="links-hidden" onClick={() => handleCategoryChange('jewelery')}>
                jewelery
              </a>
            </div>
          </div>
        </nav>
      </>
    );
  };
  
  export default NavBar;
  