const Maths = {
    sum: function (...params) {
        const numbers = Array.isArray(params[0]) ? params[0] : params;
        const sum = numbers.reduce((total, num) => total + num, 0);
        return sum;
    },
    product: function (...params) {
        const numbers = Array.isArray(params[0]) ? params[0] : params;
        const prod = numbers.reduce((prod, num) => prod * num, 1);
        return prod;
    },
    randomtext: function (length = 6, alphaNumeric = false, allowUppercase = false, allowLowercase = false, alpha = false) {
        let result = '';
        if (alpha) {
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                result += characters.charAt(randomIndex);
            }
            if (allowUppercase) {
                result = result.toUpperCase();
            } else if (allowLowercase) {
                result = result.toLowerCase();
            }
        } else {
            if (!alphaNumeric) {
                const min = Math.pow(10, length - 1);
                const max = Math.pow(10, length) - 1;
                result = Math.floor(Math.random() * (max - min + 1)) + min;
            } else {
                let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                for (let i = 0; i < length; i++) {
                    const randomIndex = Math.floor(Math.random() * characters.length);
                    result += characters.charAt(randomIndex);
                }
                if (allowUppercase) {
                    result = result.toUpperCase();
                } else if (allowLowercase) {
                    result = result.toLowerCase();
                }
            }
        }

        return result;
    },
    average: function (...params) {
        const numbers = Array.isArray(params[0]) ? params[0] : params;
        const avg = numbers.reduce((total, num) => total + num, 0);
        return avg;
    },
    flatten: function (arr) {
        return arr.flat(Infinity)
    }
}
export default Maths;