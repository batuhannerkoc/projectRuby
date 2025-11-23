const correctAnswer = "30 march";
const btn = document.getElementById("checkBtn");
const input = document.getElementById("secretInput");
const success = document.getElementById("successMsg");
const clickSound = document.getElementById("clickSound");

// Şifre kontrolü
btn.addEventListener("click", () => {
  clickSound.currentTime = 0;
  clickSound.play();

  if(input.value.trim() === correctAnswer){
    success.style.display = "block";
    document.getElementById('cats').style.display = 'none';
    document.querySelector('.content-box').style.display = 'none';

    const timeline = document.getElementById('timeline');
    timeline.style.display = 'grid';

    const events = timeline.querySelectorAll('.event');
    events.forEach((ev,index) => {
      setTimeout(() => {
        ev.style.opacity = 1;
        ev.style.transform = 'translateY(0)';
        ev.style.animation = 'slideFadeIn 0.6s forwards';
      }, index*200);
    });

  } else {
    alert("Wrong answer! Try again 😘");
    input.value = "";
  }
});

// Enter ile onay
input.addEventListener("keydown", e => { if(e.key === "Enter") btn.click(); });

// Sparkler
const sparkler = document.getElementById('sparkler');
const width = sparkler.offsetWidth;
const height = sparkler.offsetHeight;
for(let i=0;i<30;i++){
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.setProperty('--x', (Math.random()*width - width/2)+'px');
  sparkle.style.setProperty('--y', (Math.random()*height - height/2)+'px');
  sparkle.style.animationDelay = (Math.random()*2)+'s';
  sparkler.appendChild(sparkle);
}

// Dialog + overlay
const dialog = document.getElementById('noteDialog');
const overlay = document.getElementById('dialogOverlay');
const content = document.getElementById('noteContent');

function showNoteDialog(noteText){
  content.textContent = noteText;
  overlay.style.display = 'block';
  setTimeout(() => {
    overlay.style.opacity = 1;
    dialog.classList.add('show');
  },10);
}

function closeDialog(){
  overlay.style.opacity = 0;
  dialog.classList.remove('show');
  setTimeout(()=>{
    overlay.style.display = 'none';
  },300);
}

document.getElementById('closeDialog').addEventListener('click', closeDialog);
overlay.addEventListener('click', closeDialog);
