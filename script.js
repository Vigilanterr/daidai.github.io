const text = "Halo, saya Haidar dari X RPL 5";
const typingElement = document.getElementById("typing");
let index = 0;

function typeText() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 80);
  }
};

function typingLoopText(elementId, texts, speed = 100, delay = 1000) {
  const el = document.getElementById(elementId);
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];
    const displayedText = currentText.substring(0, charIndex);

    el.innerHTML = displayedText;
    el.classList.add("typing-text");

    if (!isDeleting && charIndex < currentText.length) {
      charIndex++;
      setTimeout(type, speed);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, speed / 4);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(type, delay);
      } else {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, speed);
      }
    }
  }

  type();
}

typingLoopText("typing-sub", ["Web Developer", "SMK Taruna Bhakti Student", "Sport Lover"]);

document.addEventListener("DOMContentLoaded", typeText);

function typingEffect(elementId, text, speed = 50, delay = 0) {
  const element = document.getElementById(elementId);
  let index = 0;

  if (!element) return;


  function type() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  setTimeout(type, delay);
}

typingEffect("udin", "Contact me with email: tiger191110@gmail.com", 50);
typingEffect("mamad", "Or with Phone Number: 088225626992", 50, 3000);
typingEffect("agus", "And you can contact me with Instagram: @Ahdairaja", 50, 6000);

document.addEventListener('DOMContentLoaded', function() {
    const animatedText = document.querySelector('.animated-text');
    
    setTimeout(() => {
        animatedText.classList.add('show');
    }, 500);
    
    const text = "Saya seoran siswa di SMK Taruna Bhakti jurusan Rekayasa Perangkat Lunak (RPL) dan juga saya menyukai olahraga";
    let i = 0;
    animatedText.textContent = "";
    
    function typeWriter() {
        if (i < text.length) {
            animatedText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    setTimeout(typeWriter, 1000);
});