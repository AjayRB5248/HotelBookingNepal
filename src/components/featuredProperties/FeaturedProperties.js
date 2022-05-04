import "./featuredproperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/197435469.webp?k=e519c3d978983ac43eb5131cd5e3f254a2d39a9e12cdedef684529b02a92c9ee&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hotel Iceland</span>
        <span className="fpCity">Pokhara</span>
        <span className="fpPrice">Starting from $100</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/353495401.webp?k=d1d2f242b2061f5ff2d77547f3f17c6cff66a95857b82333434f27f5241a5c6c&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hotel Yak & Yeti</span>
        <span className="fpCity">Kathmandu</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/194841028.webp?k=546b7c6f6892b0d24fa8d7ba20cc2355e272a1806cd978fe45c98fae82a07c07&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hotel Earth Light Sauraha</span>
        <span className="fpCity">Chitwan</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/86026466.webp?k=7eb7a0fc620d9ad3cd70e91133b7f371eb5383d0d59ace2a8a21173dc38b6684&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hotel Country Villa</span>
        <span className="fpCity">nagarkot</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;