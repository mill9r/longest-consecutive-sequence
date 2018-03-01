module.exports = function longestConsecutiveLength(array) {
    let length = 0;
    let consecutive = 0;
    let counter = 0;
    array = new Set(array);
    array = Array.from(array);
    sorted_consecutive = array.sort((a, b) => a - b);
    if (sorted_consecutive.length) {
        counter = array[0]
    }else{
        return 0
    }
    for (let i = 0; i < sorted_consecutive.length; i++) {

        if (counter == sorted_consecutive[i]) {
            consecutive++
            counter++
        }
        if (i + 1 == sorted_consecutive.length) {
            if (length < consecutive) {
                length = consecutive;
                consecutive = 0;
            }
        }
        z = counter
        if (z++ != sorted_consecutive[i + 1]) {
            if (length < consecutive) {
                counter = sorted_consecutive[i+1];
                length = consecutive;
                consecutive = 0;
            }else{
                counter = sorted_consecutive[i+1];
                consecutive = 0;
            }
        }

    }
    return length
}
