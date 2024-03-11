# math-in-one  ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)
## Introduction
This package includes the following functionalities🐻

- **Sum:** This method can take multiple parameter or Array and return sum of all numbers or digits of array.

- **Product:** This method can take multiple parameter or Array and return product of all numbers or digits of array.

- **Random Text:** This method can take 4 parameter and return random text. Bydefault it return random digits of 6 length.

- **Average:** This method can take multiple parameter or Array and return product of all numbers or digits of array.

- **Flatten Array:** This method can take a nested array and return 1-D array.

## Installation

```bash
npm install math-in-one
```

OR

```bash
npm i math-in-one
```

## Usage Guidelines

``` js
   import Maths from 'math-in-one'
```

### **Random Text**

To generate random text call method randomtext()

```.js
randomtext(length,alphaNumeric,allowUppercase,allowLowercase,alpha)
```
If no parameter pass in above method then it will return 6 digit of random text.
It accept 4 parameter :-

 **length** :- Length of random text accepted. Default (6)

 **alphaNumeric** :- If need to generate alphaNumeric text then proivde it true. Default (false)

 **allowUppercase** :- If need to generate character in upper case proivde it true. Default (false)

  **allowLowercase** :- If need to generate character in lower case proivde it true. Default (false)
  
  **alpha** :- If need to generate only character proivde it true. Default (false)
  
It will return **Number/ AlphaNumeric/ Alphabet**..

### TABLE

| Argument As Input | Input String Example | Description | Default 
|:------:|:------:|:--:|:---:|
| length | 5 | This is for generating random text of length {12395} | 6|
| alphaNumeric | true | This is for genereating alphanumeric {12gf9} | false|
| allowUppercase | true | This is for generate characters in upprecase {12GF9} | false|
| allowLowercase |true | This is for generate characters in upprecase {12gf9} |false |
| alpha |true | This is for generate only characters |false |
# Examples :-

### **Sum:**
```.js

console.log(Maths.sum(8,2,3,4,5));
// output :- 22

Maths.sum([8,2,3,4,5[);
// output :- 22
```
### **Product:**
```.js

console.log(Maths.product(8,2,3,4,5));
// output :- 960

console.log(Maths.sum([8,2,3,4,5]));
// output :- 960

```
### **Random Text:**
```.js

Maths.randomtext(8,true,true,true,false)
// output :- QMIV2AHV
```

### **Average:**
```.js

console.log(Maths.average(1, 2, 3, 4));
// output :- 10

console.log(Maths.average([1, 2, 3, 4]));
// output :- 10

```

### **Flatten:**
```.js

console.log(Maths.flatten([1,[2,[23,34,[5,6,7,8]], 4]]));

// output :- [
  1, 2, 23, 34, 5,
  6, 7,  8,  4
]

```

# Build
```bash
npm run build
```

# Contribute
If you would like to contribute your most welcome. Clone the repository. 🐻