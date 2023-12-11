const truncate = (str) => {
    if(str.split(" ").length > 20){
        return str.split(" ").slice(0, 20).join(" ") + "..."
    }
    return str
}

export {truncate}