window.addEventListener('load', function () {
    /*
    Licensing for the icons in the Connect section
    as needed by the Flaticon.com licensing agreement.
    */
    var license = document.getElementById('license');
    var licenseText = "The phone, email, Twitter, linkedIn, and Facebook icons were designed by 'Freepix' from Flaticon. The GitHub icon was designed by 'Pixel Buddha' from Flaticon.";
    license.addEventListener('click', function () {
        console.log('Clicked on licenses');
        window.alert(licenseText);
    });
    
});