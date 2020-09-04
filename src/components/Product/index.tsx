import React from 'react';

import tshirtImage from '../../assets/tshirt.png';
import ProductAction from '../ProductAction';
import SellerInfo from '../SellerInfo';

import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="/" >Compartilhar</a>
        <a href="/" >Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida como o Lorem Ipsum</p>
        <p className="descripiton">Receba o que você está esperando ou devolvemos o seu dinheiro</p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="descripiton">Sem garantia</p>
      </span>
    </div>
    <a href="/" >Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Desscrição</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio mi,
      molestie vel sapien vitae, luctus gravida dui. Duis sit amet metus orci.
      Phasellus a turpis vestibulum, malesuada erat id, finibus purus. Fusce et
      hendrerit mi, ac scelerisque mauris. Ut eu faucibus justo. Nulla fermentum
      sagittis leo.
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      ulla quis luctus turpis. Aenean purus augue, faucibus nec justo eu, varius
      euismod libero. Fusce et libero leo. Cras ante sem, tincidunt et fringilla
      sit amet, mollis nec nisi. Integer at enim ligula. Vestibulum eleifend est
      diam, egestas lobortis dui laoreet sed. Phasellus eget erat vulputate,
      eleifend magna id, bibendum lectus. Nam pretium molestie magna ut posuere.
      Suspendisse interdum tortor nec lectus vehicula sodales. Vivamus non
      pulvinar leo. Nunc nunc ante, porta eu rhoncus id, accumsan a mauris.
      Suspendisse potenti. Nulla consectetur eros leo. Proin vel est tellus.
    </p>
  </Description>
)

export default Product;