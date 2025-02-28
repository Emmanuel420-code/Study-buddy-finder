function isLoggedIn() {
    return document.cookie.split(';').find(row =>
        row.startsWith('loggedIn=true')) !== undefined;
    
}

document.addEventListener('DOMContentLoaded', function(){
    if (isLoggedIn()) {
        const signUpLink = document.querySelector('.btn-signup');
        if(signUpLink) {
            const profileLink = document.createElement('a');
             profileLink.href = '/profile/username';
             profileLink.textContent = 'My Profile';
             signUpLink.parentNode.replaceChild(profileLink,signUpLink);
        }
    }
});