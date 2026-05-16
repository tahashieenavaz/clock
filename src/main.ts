import "./style.css";
import create_watch_elements from "./functions/create_watch_elements.ts";
import watch_loop from "./functions/watch_loop.ts";
import create_battery from "./functions/create_battery.ts";
import battery_loop from "./functions/battery_loop.ts";

create_watch_elements();
watch_loop();

create_battery();
battery_loop();
