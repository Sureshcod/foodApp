const UnderCooking = ({ title }) => {
  return (
    <div className="under-cooking">
      <h1>🍳 {title}</h1>
      <p>
        This page is currently under cooking.
        <br />
        Our chefs are working hard to serve something amazing!
      </p>
      <p>⏳ Please give us some time.</p>
    </div>
  );
};

export default UnderCooking;
