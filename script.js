 const themeToggle = document.getElementById('theme-toggle'); 
const themeIcon = document.querySelector('.theme-icon');  
const body = document.body;  

 
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);  
    if (savedTheme === 'dark-theme') {
        themeIcon.textContent = '☀️';  
    }
}

 
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');  
    if (body.classList.contains('dark-theme')) {
        themeIcon.textContent = '☀️';  
        localStorage.setItem('theme', 'dark-theme');  
    } else {
        themeIcon.textContent = '🌙';  
        localStorage.setItem('theme', '');  
    }
});
 
const skills = ['Кулинария', 'Фотография еды', 'Дизайн тортов', 'Работа с шоколадом', 'Декорирование'];
const skillsList = document.querySelector('.skills-list');

skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
});
  
document.querySelectorAll('.experience-title').forEach(title => {
    title.addEventListener('click', function() {
        const details = this.nextElementSibling;
        const icon = this.querySelector('.toggle-icon');
        
        details.classList.toggle('active');
        icon.textContent = details.classList.contains('active') ? '-' : '+';
    });
});
 
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    
    // Проверка имени
    const name = document.getElementById('name');
    if (name.value.trim() === '') {
        showError(name, 'Пожалуйста, введите ваше имя');
        isValid = false;
    } else {
        clearError(name);
    }
    
     
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        showError(email, 'Пожалуйста, введите корректный email');
        isValid = false;
    } else {
        clearError(email);
    }
    
     
    const message = document.getElementById('message');
    if (message.value.trim() === '') {
        showError(message, 'Пожалуйста, введите ваше сообщение');
        isValid = false;
    } else {
        clearError(message);
    }
    
    if (isValid) {
        alert('Сообщение успешно отправлено!');
        this.reset();
    }
});

function showError(input, message) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
    input.classList.add('error');
}

function clearError(input) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = '';
    input.classList.remove('error');
}