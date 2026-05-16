export default function create_element<K extends keyof HTMLElementTagNameMap>(
  tag_name: K,
  className?: string,
  id?: string,
) {
  const tag = document.createElement(tag_name);
  if (className) {
    Object.assign(tag, { className });
  }
  if (id) {
    Object.assign(tag, { id });
  }
  return tag;
}
