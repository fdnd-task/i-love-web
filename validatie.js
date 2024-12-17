document.addEventListener('DOMContentLoaded', () => {
    let inputElement = document.querySelector('input');
    
    inputElement.addEventListener('invalid', function(ev) {
    
      inputElement.setCustomValidity('Dit veld mag niet leeg zijn hoor');
    
    });

    let fieldset = document.querySelector('input[type=radio]');
    console.log(fieldset)

    fieldset.addEventListener('invalid', function(ev) {
      
      fieldset.setCustomValidity('Bro vul wat in dan!');
    });
});
