document.getElementById("registration-form").addEventListener("submit", function(event){
    event.preventDefault();

    const form = event.target;
    const data = new FormData (form);
    const values = object.formEntries(data.entries());

    console.log("donnees soumises :", values);
    alert("formulaire soumis avec succes !");
});
