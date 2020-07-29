const app = new Vue({
  el: '#root',
  data: {
    shift: 1,
    word: '',
    ciphered: '',
    history: [ 
    ],
  },
  methods: {
    addHistory() {
      this.history.push({text: `${this.word} <${this.shift}> ${this.ciphered}`});
    },
    caesarCipher() {
      let size = this.word.length;
      let newWord = ''

      this.shift = (isNaN(this.shift)) ? 1 : 1*(this.shift);
      for(let i = 0; i<size; i+=1) {
        let ascii = this.convertToAscii(this.word[i]);
        newWord += String.fromCharCode(ascii);
      }
      this.ciphered = newWord;
    },
    convertToAscii(c) {
      let shift = this.shift % 26;
      let charCode = c.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        if (charCode + shift > 90) {
          charCode = 64 + (charCode + shift) % 90;
        } else if (charCode + shift < 65) {
          charCode = 91 - (65 - (charCode + shift));
        } else {
          charCode += shift;
        }
      } else if (charCode >= 97 && charCode <= 122) {
        if (charCode + shift > 122) {
          charCode = 96 + (charCode + shift) % 122;
        } else if (charCode + shift < 97) {
          charCode = 123 - (97 - (charCode + shift));
        } else {
          charCode += shift;
        }
      }

      return charCode;
    }
  },
})

