// Código para el modal de la imagen
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const organigramaImg = document.querySelector(".organigrama-img");
const closeModal = document.querySelector(".close-modal");

// Abrir modal al hacer clic en la imagen
if (organigramaImg) {
    organigramaImg.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
}

// Cerrar modal al hacer clic en la X
if (closeModal) {
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });
}

// Cerrar modal al hacer clic fuera de la imagen
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Función para verificar si algún contenido está abierto (excepto el cuadro 5)
function isAnyContentOpen() {
    const contents = [
        document.querySelector('.problem-content'),
    ];
    
    return contents.some(content => 
        content && content.style.maxHeight && content.style.maxHeight !== '0px'
    );
}

// Función para verificar si estamos en un dispositivo móvil
function isMobileDevice() {
    return window.innerWidth <= 767;
}

// Nueva función para verificar si el cuadro de Comunidad o Misión está abierto
function isCommunityOrMissionOpen() {
    const communityContent = document.querySelector('.box-2-content');
    const missionContent = document.querySelector('.box-3-content');
    
    const communityOpen = communityContent && communityContent.style.maxHeight && communityContent.style.maxHeight !== '0px';
    const missionOpen = missionContent && missionContent.style.maxHeight && missionContent.style.maxHeight !== '0px';
    
    return communityOpen || missionOpen;
}

// Función para actualizar la visibilidad del cuadro 5
function updateBox5Visibility() {
    const box5 = document.querySelector('.box-5');
    if (isAnyContentOpen() && !isMobileDevice()) {
        box5.style.display = 'none';
    } else {
        box5.style.display = 'block';
    }
}

// Función para actualizar la visibilidad del cuadro del organigrama
function updateOrganigramVisibility() {
    const box6 = document.querySelector('.box-6');
    if (isCommunityOrMissionOpen() && !isMobileDevice()) {
        box6.style.display = 'none';
    } else {
        box6.style.display = 'block';
    }
}

// Actualizar visibilidad cuando cambia el tamaño de la ventana
window.addEventListener('resize', function() {
    updateBox5Visibility();
    updateOrganigramVisibility();
});

document.querySelector('.toggle-btn').addEventListener('click', function() {
    const content = document.querySelector('.problem-content');
    
    // Toggle this content
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        this.textContent = 'Ver más detalles';
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        this.textContent = 'Ocultar detalles';
    }
    
    // Actualizar visibilidad del cuadro 5
    setTimeout(updateBox5Visibility, 10);
});

document.querySelector('.toggle-btn-2').addEventListener('click', function() {
    const content = document.querySelector('.box-2-content');
    
    // Toggle this content
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        this.textContent = 'Ver más detalles';
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        this.textContent = 'Ocultar detalles';
    }
    
    // Actualizar visibilidad del cuadro 5
    setTimeout(updateBox5Visibility, 10);
    // Actualizar visibilidad del organigrama
    setTimeout(updateOrganigramVisibility, 10);
});

document.querySelector('.toggle-btn-3').addEventListener('click', function() {
    const content = document.querySelector('.box-3-content');
    
    // Toggle this content
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        this.textContent = 'Ver más detalles';
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        this.textContent = 'Ocultar detalles';
    }
    
    // Actualizar visibilidad del cuadro 5
    setTimeout(updateBox5Visibility, 10);
    // Actualizar visibilidad del organigrama
    setTimeout(updateOrganigramVisibility, 10);
});

document.querySelector('.toggle-btn-4').addEventListener('click', function() {
    const content = document.querySelector('.box-4-content');
    
    // Toggle this content
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        this.textContent = 'Ver más detalles';
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        this.textContent = 'Ocultar detalles';
    }
    
    // Actualizar visibilidad del cuadro 5
    setTimeout(updateBox5Visibility, 10);
});

document.querySelector('.toggle-btn-5').addEventListener('click', function() {
    const content = document.querySelector('.box-5-content');
    
    // Toggle this content
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        this.textContent = 'Ver más detalles';
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        this.textContent = 'Ocultar detalles';
    }
});

// Código para mover el cuadro 6 a la derecha
const box6 = document.querySelector('.box-6');
let isMoved = false;

// Función para mover el cuadro
function moveBox6() {
    if (isMoved) {
        box6.classList.remove('move-left');
    } else {
        box6.classList.add('move-left');
    }
    isMoved = !isMoved;
}

// Ejecutar al cargar la página para establecer el estado inicial
document.addEventListener('DOMContentLoaded', function() {
    updateBox5Visibility();
    updateOrganigramVisibility();
});