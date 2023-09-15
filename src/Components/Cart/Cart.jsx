
import PropTypes from 'prop-types';
const Cart = ({ selectedCourse, totalPrice,totalCredit,creditRemaining }) => {
  return (
    <div className="bg-white rounded-lg p-4">
      <h2 className="text-[#2F80ED] font-bold mb-4 ">
        Credit Hour Remaining : {creditRemaining} hr
      </h2>
      <hr className="w-4/5 mx-auto" />
      <h2 className="my-4 font-bold text-xl ">Course Name</h2>
      {selectedCourse.map((course) => (
        <li className='list-decimal' key={course.id}>{course.name}</li>
      ))}
      <hr className="w-4/5 mx-auto mt-5" />
      <h3 className="my-4 text-medium ">Total Credit Hour :{totalCredit} </h3>
      <hr className="w-4/5 mx-auto" />
      <h2 className="my-4 font-medium ">Total Price : {totalPrice} USD </h2>

    </div>
  );
};




Cart.propTypes = {
  selectedCourse: PropTypes.array,
  totalPrice: PropTypes.number,
  totalCredit:PropTypes.number,
  creditRemaining: PropTypes.number
}
export default Cart;
