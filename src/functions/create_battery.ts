import append_to_app from "./append_to_app";
import create_element from "./create_element";

export default function create_battery() {
  const battery = create_element("section", "battery");
  append_to_app(battery);
}
