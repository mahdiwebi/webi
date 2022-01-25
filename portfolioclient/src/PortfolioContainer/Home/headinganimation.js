const typerWriter = function( textElemnt , words , wait =500) {

    this.textElemnt = textElemnt;
    this.words = words ;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false;
    
    }
    
    
    
    
    
    // type method
    
    
    typerWriter.prototype.type = function () {
    
        
    
    // current index of word 
    const current = this.wordIndex % this.words.length ;
    
    //get full text of current word
    
    const fullTxt = this.words[current];
    
    
    
    
    //check if deleting
    
    if (this.isDeleting) {
    
        //remove
      this.txt = fullTxt.substring( 0 , this.txt.length - 1 );
    
    
    }else {
      
      //add char
    
      this.txt = fullTxt.substring( 0 , this.txt.length + 1 );
    
    }
    
    
    //insert text into element 
    this.textElemnt.innerHTML = `<span class="txt"> ${this.txt} </span>`;
    
    
    
    // intial type speed 
    
    
    let typeSpeed = 300;
    
    
    if( this.isDeleting) {
    
        typeSpeed /= 1.5;
    }
    
    
    
    // if word is complete
    
    if (!this.isDeleting && this.txt === fullTxt) {
    
        //make pause at end
    
        typeSpeed = this.wait;
    
        // set delete to true
    
        this.isDeleting = true;
    
    
    
    }else if( this.isDeleting && this.txt === ''  ) {
    
        this.isDeleting = false;
    
        // move next word 
    
        this.wordIndex ++;
    
        // pause before start typing
    
        typeSpeed = 500;
    }
    
    console.log(this.txt)
    
    console.log(this.isDeleting)
    
    
    setTimeout( () => this.type() , typeSpeed );
    
    
    }
    
    
    //init on DOM load
    
    document.addEventListener('DOMContentLoaded' , init);
    
    // Init app
    
    function init() {
    
        const textElemnt = document.querySelector('.txt-type');
    
        const words =JSON.parse (textElemnt.getAttribute('data-words'));
    
        const wait =textElemnt.getAttribute('data-wait');
    
    
        //init typewriter
    
        new typerWriter(textElemnt , words , wait);
    
    
    
    }