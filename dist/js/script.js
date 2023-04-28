const navBar = document.querySelector('.nav-bar');
const navFolded = document.querySelector('.nav-folded');

navFolded.addEventListener('click', function () {
  navBar.classList.toggle('unfolded');
});

// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const cityInput = document.getElementById('city');
  const zipCodeInput = document.getElementById('zip-code');
  const statusInput = document.getElementById('status');

  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    city: cityInput.value,
    zipCode: zipCodeInput.value,
    status: statusInput.checked,
  };

  return formData;
}

function isNumber(str) {
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str.charAt(i))) {
      return false;
    }
  }
  return true;
}

function checkboxIsChecked() {
  const statusInput = document.getElementById('status');
  return statusInput.checked;
}

function validateFormData(formData) {
  return formData && !isNaN(formData.zipCode) && checkboxIsChecked(formData.status);
}

function submit() {
  if (!validateFormData(handleGetFormData())) {
    return (document.getElementById('warning').innerText = 'Periksa form anda sekali lagi');
  } else {
    return (document.getElementById('warning').innerText = '');
  }
}
