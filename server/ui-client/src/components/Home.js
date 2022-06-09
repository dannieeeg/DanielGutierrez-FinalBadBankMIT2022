import Card from "./Card";
function Home() {
  return (
    <div id="home" className="home-background">
      <div className="right">
        <Card
          className="card mb-3"
          maxWidth="26rem"
          txtcolor="black"
          header="Bad Bank Capstone"
          title="Bank Safe with Danel Gutierrez"
          text="BAD BANKS MADE SAFER BY DANIEL GUTIERREZ"
          body={<img src="mylogo.png" className="img-fluid" alt="Logo" />}
        />
      </div>
    </div>
  );
}

export default Home;
