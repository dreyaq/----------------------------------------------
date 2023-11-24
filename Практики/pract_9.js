let answer = prompt("Желаете пройти регистрацию?", "Да");
if (answer=="Да")
{
    alert("Круто!")
    answer=prompt("Введите логин:")
    switch (answer)
    {
        case "Админ":
            let password=prompt("Введите пароль:")
            switch (password)
            {
                case "Я главный":
                    alert("Здравствуйте!")
                    break;
                case null:
                    alert("Отменено")
                    break;
                default:
                    alert("Неверный пароль")
                    break;
            }
            break;
        case null:
            alert("Отменено")
            break;
        default:
            alert("Я вас не знаю")
            break;
    }
}
else
{
    alert("Попробуй ещё раз")
}


let liked = false;
let likeCount = 0;

function toggleLike(button) {
    liked = !liked;
    likeCount += liked ? 1 : -1;
    updateButtonState(button);
}

function updateButtonState(button) {
    button.style.backgroundColor = liked ? "red" : "#ccc";
    button.querySelector(".like-count").textContent = likeCount;
}

const drawButton = document.getElementById('drawButton');
let isDrawing = false;
let lastDrawTime = 0;
const drawInterval = 50;

drawButton.addEventListener('click', () => {
    isDrawing = !isDrawing;
});

document.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        const currentTime = Date.now();
        if (currentTime - lastDrawTime >= drawInterval) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = e.clientX + 'px';
            heart.style.top = e.clientY + 'px';
            document.body.appendChild(heart);
            lastDrawTime = currentTime;
        }
    }
});

document.addEventListener('mousedown', (e) => {
    if (e.button === 0) { 
        isDrawing = false;
    }
});