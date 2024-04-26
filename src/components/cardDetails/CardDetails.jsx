const CardDetails = (props) => {
  const { title, desc, price, qty, img } = props;

  return (
    <div className="card card-side bg-base-100 shadow-xl w-fit pr-3 min-h-96 ">
      <figure style={{ height: "386px" }}>
        <img src={img} alt={title} className="h-full w-full object-contain" />
      </figure>
      <div className="card-body w-96">
        <h1 className="card-title text-4xl">{title}</h1>
        <p>{desc}</p>
        <p>Price: {price}</p>
        <p>Quantity: {qty}</p>
      </div>
    </div>
  );
};

export default CardDetails;
