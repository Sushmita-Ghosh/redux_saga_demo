import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
  //   const { name, age, joke } = useSelector((state) => state);
  const { name, age, joke } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>I am {name}</h2>
      <h2>My age is {age}</h2>
      <h4>{joke}</h4>
      <button
        onClick={() =>
          dispatch(
            //     {
            //     type: "UPDATE_NAME",
            //     payload: "suresh",
            //   }
            {
              type: "UPDATE_NAME",
            }
          )
        }
      >
        Update name
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "UPDATE_AGE",
          })
        }
      >
        Update Age
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "GET_JOKE",
          })
        }
      >
        Fetch Joke
      </button>
    </div>
  );
}
