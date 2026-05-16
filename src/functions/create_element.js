export default function create_element(tag_name, className = null , id = null) {
    const tag = document.createElement(tag_name)
    if(className) {
        Object.assign(tag, {className})
    }
    if(id) {
        Object.assign(tag, {id})
    }
    return  
}