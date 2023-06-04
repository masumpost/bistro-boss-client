import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../Hooks/useCart";

const RecoCard = ({items}) => {

    const {image, recipe, name, price, _id} = items;
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const location = useLocation();
    const [, refetch] = useCart();
   
    const handelCard = items => {
        console.log(items)
        if(user && user.email){
            const cartItem = {menuItemId:_id, name, image, price, email:user.email}
            fetch('http://localhost:5000/carts',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch(); //update to the number of added cart
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food added on the cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    navigate('/login', {state: {from: location}})
                  )
                }
              })
        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl relative">
                <figure><img src={image} alt="chefsReco" /></figure>
                <p className="bg-slate-600 text-white absolute top-0 right-0 mt-2 mr-2 px-2 my-1">$ {price}</p>
                <div className="card-body items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe.slice(0, 50)}</p>
                    <div className="card-actions mt-4">
                      <button onClick={()=>handelCard(items)} className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-500 text-orange-600 hover:text-orange-600">Add To Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecoCard;