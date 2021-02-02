import Banner from "./BannerComponent";

function Home(props) {
  return(
    <main>
      <Banner />
      <div className="container">
        <p>Home</p>
      </div>
    </main>
  );
}

export default Home;