export default function dommy() {
    const log = function(a) {
        console.log(a);
    }
    return {log};
}

function say() {
    console.log("say");
}
