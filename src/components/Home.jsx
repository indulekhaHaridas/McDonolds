import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
      <Col md={6}>
          <img
            src="./src/assets/mc2.jpg"
            alt="McDonald's Burgers"
            className="img-fluid rounded"
          />
        </Col>


        <Col md={6} className="mb-5">
          <h2 className="fw-bold">Dig into A Minecraft Movie Meal</h2>
          <p>
          Ready to fill your inventory? Check out A Minecraft Movie Meal featuring 1 of 6 limited edition collectibles.* Pick a 10 pc. Chicken McNuggets® to try spicy Nether Flame Sauce or Big Mac® and unlock the McDonald's Add-On in Minecraft after purchase, only when you order in the app.^ Or, get A Minecraft Movie Happy Meal® for your little crafters with 1 of 12 imaginative toys. Movie only in theaters. *At participating McDonald’s for a limited time, while supplies last.
^At participating McDonald's for a limited time. While supplies last. ©2025 WBEI and Legendary.
©2025 Mojang AB. Terms apply. Minecraft: Bedrock Edition (purchased separately) with Minecraft Marketplace, internet access and Microsoft account required. Code expires 12/31/2025. Valid 1x per Microsoft account. Must opt in to email and Rewards before purchase.
          </p>
          <Button variant="warning" className="fw-bold px-4 py-2">
            Order in the App
          </Button>
        </Col>
        <Col md={6}>
          <img
            src="./src/assets/mc3.jpg"
            alt="McDonald's Burgers"
            className="img-fluid rounded"
          />
        </Col>


        <Col md={6} className="mb-5">
          <h2 className="fw-bold">Free large Fries w/ $1 min. purchase</h2>
          <p>
          Free large Fries to keep you company. Download the app and get 'em with your first purchase of $1+.* Every $1 you spend earns 100 points, redeemable for free food.
          *Offer valid 1x thru the last day of month for first time app users at participating McDonald’s. May take up to 48 hours to appear in your deals. Must opt in to Rewards. Excludes tax.
          </p>
          <Button variant="warning" className="fw-bold px-4 py-2">
            Order in the App
          </Button>
        </Col>

        <Col md={6}>
          <img
            src="./src/assets/mc1.jpg"
            alt="McDonald's Burgers"
            className="img-fluid rounded"
          />
        </Col>


        <Col md={6} className="mb-5">
          <h2 className="fw-bold">"McD’s Best Burgers Ever." - Hamburglar</h2>
          <p>
            You’re gonna love the hotter, juicier, tastier upgrades we’ve made
            to burgers like our Cheeseburger and Double Cheeseburger. From
            patties grilled with onions and perfectly melted cheese to new soft,
            pillowy buns—these are our best burgers yet.
          </p>
          <Button variant="warning" className="fw-bold px-4 py-2">
            Order in the App
          </Button>
        </Col>
        <Col md={6}>
          <img
            src="./src/assets/mc4.jpg"
            alt="McDonald's Burgers"
            className="img-fluid rounded"
          />
        </Col>


        <Col md={6} className="mb-5">
          <h2 className="fw-bold">Free large Fries w/ $1 min. purchase</h2>
          <p>
          Free large Fries to keep you company. Download the app and get 'em with your first purchase of $1+.* Every $1 you spend earns 100 points, redeemable for free food.
          *Offer valid 1x thru the last day of month for first time app users at participating McDonald’s. May take up to 48 hours to appear in your deals. Must opt in to Rewards. Excludes tax.
          </p>
          <Button variant="warning" className="fw-bold px-4 py-2">
            Order in the App
          </Button>
        </Col>
        <Col md={6}>
          <img
            src="./src/assets/mc5.jpg"
            alt="McDonald's Burgers"
            className="img-fluid rounded"
          />
        </Col>


        <Col md={6} className="mb-5">
          <h2 className="fw-bold">Breakfast comes first. Don’t forget it.</h2>
          <p>
          You don’t wake up dreaming of Fries, but you do dream of a McGriddles®, McMuffin®, Biscuit or Hash Browns. It’s time to put lunch back in its place—order breakfast when you can in the app for pickup or McDelivery.* *At participating McDonald’s. Prices may be higher than at restaurants. Delivery/other fees may apply. 
          </p>
          <Button variant="warning" className="fw-bold px-4 py-2">
            Order in the App
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
