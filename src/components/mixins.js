export default {
    methods: {
        voice($event){
    
          let text = $event.target.innerText;
    
          let speech = new SpeechSynthesisUtterance()
          speech.lang = "en"
          speech.text = text
          speech.rate = 0.7
          window.speechSynthesis.speak(speech);
    
        }
      }
}