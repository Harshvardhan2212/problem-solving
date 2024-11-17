if (typeof modifyMatrix === "object") {

    for (let ele of modifyMatrix) {

        if (!ele || !Array.isArray(ele)) {
            console.log(null);
        } else {
            if (ele.length) {
                console.log(ele.join(" "));
            } else {
                console.log(null);
            }
        }
    }
}
else {
    console.log(null);
}