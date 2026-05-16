import append_to_app from "./append_to_app";
import create_element from "./create_element";

export default function create_watch(): void {
  const watch = create_element("section", "watch");
  const hours = create_element("div", "hours bold");
  const minutes = create_element("div", "minutes bold");
  const seconds = create_element("div", "seconds bold");
  const milliseconds = create_element("div", "milliseconds bold");
  watch.append(hours, minutes, seconds, milliseconds);
  append_to_app(watch);
}
