import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/960553.webp?k=c5e6482bbb88097905af1590f21494e5162aaeea3461d6d15809d595480ec9da&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Sauraha</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/664666.webp?k=e7f2be1324d4595363ec6d46d988eb21cee118a5530ce0a19a18cf85c4473d2e&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Chitwan</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/664657.webp?k=c1d999b8766abab322730158d960eec68af7910fec9ff61b5339636fd74dfb0e&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Pokhara</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;