const Maths = {
    sum: function (...numbers) {
        return numbers.reduce((sum, num) => sum + num, 0);
    },
    product: function (...numbers) {
        return numbers.reduce((prod, num) => prod * num, 1);
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
    }
}
export default Maths;