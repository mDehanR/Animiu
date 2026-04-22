const USERS_KEY = 'animiu_users';
const SESSION_KEY = 'animiu_session';

function loadUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function setMessage(text, ok = false) {
  const el = document.getElementById('authMessage');
  if (!el) return;
  el.textContent = text;
  el.style.color = ok ? '#9ff5b0' : '#ffb4c3';
}

const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim().toLowerCase();
    const password = document.getElementById('signupPassword').value;
    const users = loadUsers();

    if (users.some(u => u.email === email)) {
      setMessage('Email sudah terdaftar. Gunakan email lain.');
      return;
    }

    users.push({ name, email, password });
    saveUsers(users);
    localStorage.setItem(SESSION_KEY, JSON.stringify({ name, email }));
    setMessage('Akun berhasil dibuat. Mengarahkan ke home...', true);
    setTimeout(() => window.location.href = 'index.html', 900);
  });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    const password = document.getElementById('loginPassword').value;
    const users = loadUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      setMessage('Email atau password tidak sesuai.');
      return;
    }

    localStorage.setItem(SESSION_KEY, JSON.stringify({ name: user.name, email: user.email }));
    setMessage('Login berhasil. Mengarahkan ke home...', true);
    setTimeout(() => window.location.href = 'index.html', 800);
  });
}
