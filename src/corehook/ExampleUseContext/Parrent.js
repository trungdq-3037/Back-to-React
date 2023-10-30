import { useGetColor } from ".";
import Son from "./Son";

export default function Parrent1() {
  const color = useGetColor();
  return (
    <div>
      <h1>Parrent1 </h1>
      <div>
        Parrent1 color:        {color?.color}
      </div>
      ================================================
      <br />
      <Son></Son>
    </div>
  );
}
