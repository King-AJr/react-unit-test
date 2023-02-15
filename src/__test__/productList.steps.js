// src/__test__/productList.steps.js
import { render, screen } from "@testing-library/react";
import { ProductList } from "../productList";

let products;
beforeEach(() => {
  products = [];
});

export const productListSteps = ({ given, when, then, pending }) => {
  when("I list products", () => {
    render(<ProductList products={products} />);
  });

  then(/^there should be (\d+) products$/, (count) => {
    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(+count);
  });

  given(/^there is a product "(.*)"$/, (name) => {
    products.push({ name });
  });

  then(/^there should be the "(.*)" product$/, (name) => {
    const item = screen.getByText(name);
    expect(item).toBeInTheDocument();
  });

  given(/^there is a product "(.*)" with price \$(\d+)$/, (name, price) => {
    products.push({ name, price: +price });
  });

  then(
    /^there should be the "(.*)" product with price \$(\d+)$/,
    (name, price) => {
      const item = screen.getByText(name);
      expect(item).toHaveTextContent(`$${price}`);
    }
  );
};
