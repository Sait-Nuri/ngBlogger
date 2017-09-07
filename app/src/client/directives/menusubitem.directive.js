/**
 * Created by saidnuriPC on 7.09.2017.
 */
app.directive( 'menuSubitem', function () {
    var dir ={};
    dir.restrict = 'E';
    dir.templateUrl = "partials/directive.menusubitem.html";
    dir.transclude = true;

    dir.scope = {
        content : "="
    };

    return dir;
});