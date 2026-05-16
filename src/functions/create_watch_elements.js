import append_to_app from "./append_to_app"

export default function create_watch_elements() {
    const hours = document.createElement("div")
    const minutes = document.createElement("div")
    const seconds = document.createElement("div")
    append_to_app(hours, minutes, seconds)
}