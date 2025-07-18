const seededRandom = function (seed: number) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function(date: string) {
    let result = [];
    let random = seededRandom(new Date(date).getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
export const submitAPI = async function(formData: any) {
    return  new Promise((resolve) => {
        setTimeout(() => {
        console.log('Booking submitted:', formData)
        resolve(true);
    },2000);
    })
}