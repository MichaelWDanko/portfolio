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

    // This object is a reference for the functions below to know what to switch to.
    var skillFlip = {
        html: false,
        css: false,
        js: false,
        git: false,
        angular: false,
        jquery: false,
        underscore: false,
        backbone: false,
        gulp: false,
    };



    var skillHtml = document.getElementById('skill-html');
    skillHtml.addEventListener('click', function () {
        console.log('Clicked on HTML!');
        if (skillFlip.html === false) {
            skillHtml.textContent = skillScores.html;
            skillFlip.html = true;
        } else {
            skillHtml.textContent = 'HTML5';
            skillFlip.html = false;
        }
    });
    
    var skillCss = document.getElementById('skill-css');
    skillCss.addEventListener('click', function () {
        console.log('Clicked on CSS!');
        if (skillFlip.css === false) {
            skillCss.textContent = skillScores.css;
            skillFlip.css = true;
        } else {
            skillCss.textContent = 'CSS / SASS';
            skillFlip.css = false;
        }
    });
    
    var skillJs = document.getElementById('skill-js');
    skillJs.addEventListener('click', function () {
        console.log('Clicked on JS!');
        if (skillFlip.js === false) {
            skillJs.textContent = skillScores.js;
            skillFlip.js = true;
        } else {
            skillJs.textContent = 'JavaScript';
            skillFlip.js = false;
        }
    });
    
    var skillGit = document.getElementById('skill-git')
    skillGit.addEventListener('click', function () {
        console.log('Clicked on Git!');
        if (skillFlip.git === false) {
            skillGit.textContent = skillScores.git;
            skillFlip.git = true;
        } else {
            skillGit.textContent = 'Git/ GitHub';
            skillFlip.git = false;
        }
    });
    
    var skillAngular = document.getElementById('skill-angular');
    skillAngular.addEventListener('click', function () {
        console.log('Clicked on AngularJS!');
        if (skillFlip.angular === false) {
            skillAngular.textContent = skillScores.angular;
            skillFlip.angular = true;
        } else {
            skillAngular.textContent = 'AngularJS';
            skillFlip.angular = false;
        }
    });
    
    var skillJquery = document.getElementById('skill-jquery');
    skillJquery.addEventListener('click', function () {
        console.log('Clicked on JQuery!');
        if (skillFlip.jquery === false) {
            skillJquery.textContent = skillScores.jquery;
            skillFlip.jquery = true;
        } else {
            skillJquery.textContent = 'JQuery';
            skillFlip.jquery = false;
        }
    });
    
    var skillUnderscore = document.getElementById('skill-underscore');
    skillUnderscore.addEventListener('click', function () {
        console.log('Clicked on UnderscoreJS!');
        if (skillFlip.underscore === false) {
            skillUnderscore.textContent = skillScores.underscore;
            skillFlip.underscore = true;
        } else {
            skillUnderscore.textContent = 'UnderscorJS';
            skillFlip.underscore = false;
        }
    });
    
    var skillBackbone = document.getElementById('skill-backbone');
    skillBackbone.addEventListener('click', function () {
        console.log('Clicked on BackboneJS!');
        if (skillFlip.backbone === false) {
            skillBackbone.textContent = skillScores.backbone;
            skillFlip.backbone = true;
        } else {
            skillBackbone.textContent = 'BackboneJS';
            skillFlip.backbone = false;
        }
    });
    
    var skillGulp = document.getElementById('skill-gulp');
    skillGulp.addEventListener('click', function () {
        console.log('Clicked on Gulp!');
        if (skillFlip.gulp === false) {
            skillGulp.textContent = skillScores.gulp;
            skillFlip.gulp = true;
        } else {
            skillGulp.textContent = 'Gulp';
            skillFlip.gulp = false;
        }
    });






});
