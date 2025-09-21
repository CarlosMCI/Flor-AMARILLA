document.addEventListener('DOMContentLoaded', () => {
    const flower = document.querySelector('.flower');
    const numberOfPetals = 8; // Basado en tu CSS original

    // Limpiamos los pétalos preexistentes en HTML si los hubiera para evitar duplicados
    flower.querySelectorAll('.petal').forEach(p => p.remove());

    for (let i = 0; i < numberOfPetals; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        const rotation = (360 / numberOfPetals) * i;
        petal.style.transform = `rotate(${rotation}deg)`;
        flower.appendChild(petal);
    }

    // Asegurarse de que el centro esté al final para que quede encima de los pétalos
    const center = document.querySelector('.center');
    if (center) {
        flower.appendChild(center);
    }
});