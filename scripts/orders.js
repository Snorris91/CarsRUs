export const CurrentOrders = async () => {
  const response = await fetch(
    "http://localhost:8088/orders?_expand=wheel&_expand=interior&_expand=paint&_expand=package&_expand=type"
  );
  const orders = await response.json();

  let orderHtml = ``;
  const ordersArr = orders.map((order) => {
    let price =
        order.type.multiplier*
      (order.wheel.price +
      order.package.price +
      order.interior.price +
      order.paint.price);

    orderHtml += `<section class="orders">
        <div>Your Order (${order.id}) is a Total of: ${price.toLocaleString(
      "en-us",
      {
        style: "currency",
        currency: "USD",
      }
    )}</div>
        </section>`;
  });
  orderHtml += ordersArr.join("");
  return orderHtml;
};
