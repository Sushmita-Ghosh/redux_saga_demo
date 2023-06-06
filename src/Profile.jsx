import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
  const { name, age } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>I am {name}</h2>
      <h2>My age is {age}</h2>
      <button
        onClick={() =>
          dispatch({
            type: "UPDATE_NAME",
            payload: "suresh",
          })
        }
      >
        Update name
      </button>
    </div>
  );
}
