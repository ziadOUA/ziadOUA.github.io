let i = 0;

function genRepo(user) {
    var requestURL = 'https://api.github.com/users/' + user + '/repos';
    var request = $.get(requestURL, function () {
    })
        .done(function () {
            request = request.responseJSON;
            if (!Array.isArray(request) || !request.length) {
                $(".repos-list-wrapper").append("<div class='error-box'><h1 class='error-msg'> Sorry the GitHub username entered has no repos or does't exist </h1></div>");
            }
            else {
                for (i = 0; i < request.length; i++) {
                    var repo_url = request[i].html_url;
                    var username = request[i].owner.login;
                    var repo_name = request[i].name;
                    var repo_description = request[i].description;
                    var repo_language = request[i].language;
                    var repo_stars = request[i].stargazers_count;
                    var repo_forks = request[i].forks;

                    if (repo_description == null) {
                        repo_description = "<i>No Description</i>";
                    }
                    if (repo_language == null) {
                        repo_language = "";
                    }

                    $(".repos-list-wrapper").append('<a class="repo-wrapper" href="' + repo_url + '" target="_blank"><div class="repo-infos"><p class="repo-title">' + repo_name + '</p><p class="repo-desc">' + repo_description + '</p><div class="repo-metadata"><p class="repo-language">' + repo_language + '</p><span class="material-symbols-rounded">star</span><p class="metadata-text">' + repo_stars + '</p><span class="material-symbols-rounded">fork_right</span><p class="metadata-text">' + repo_forks + '</p></div></div></a>');
                }
            }
        });
}

document.onload = genRepo('ziadOUA');