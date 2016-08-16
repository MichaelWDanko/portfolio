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
    
    var skillScores = {
        html: '7/10',
        css: '8/10',
        js: '8/10',
        git: '9/10',
        angular: '6/10',
        jquery: '5/10',
        underscore: '5/10',
        backbone: '5/10',
        gulp: '9/10',
    };
    
    
    var focusedElement;
    
    var skillHtml = document.getElementById('skill-html').addEventListener('click', function () {
        console.log('Clicked on HTML!');
    });
    var skillCss = document.getElementById('skill-css').addEventListener('click', function () {
        console.log('Clicked on CSS!');
    });
    var skillJs = document.getElementById('skill-js').addEventListener('click', function () {
        console.log('Clicked on JS!');
    });
    var skillGit = document.getElementById('skill-git').addEventListener('click', function () {
        console.log('Clicked on Git!');
    });
    var skillAngular = document.getElementById('skill-angular').addEventListener('click', function () {
        console.log('Clicked on AngularJS!');
    });
    var skillJquery = document.getElementById('skill-jquery').addEventListener('click', function () {
        console.log('Clicked on JQuery!');
    });
    var skillUnderscore = document.getElementById('skill-underscore').addEventListener('click', function () {
        console.log('Clicked on UnderscoreJS!');
    });
    var skillBackbone = document.getElementById('skill-backbone').addEventListener('click', function () {
        console.log('Clicked on BackboneJS!');
    });
    var skillGulp = document.getElementById('skill-gulp').addEventListener('click', function () {
        console.log('Clicked on Gulp!');
    });
    
    
    
    
    
    
});