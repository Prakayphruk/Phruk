document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const text = btn.querySelector('.btn-text');
    const spinner = btn.querySelector('.spinner');

    btn.disabled = true;
    text.style.display = 'none';
    spinner.style.display = 'block';

    setTimeout(() => {
        alert('Login simulated successful!');
        btn.disabled = false;
        text.style.display = 'block';
        spinner.style.display = 'none';
        this.reset();
    }, 1500);
});