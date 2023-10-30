import { useGetColor } from ".";
export default function Son() {
  const color = useGetColor();
  return (
    <div>
      <h3>Son </h3>
      son color {color?.color}
    </div>
  );
}
