// Datos de detalles para cultivos, productos y maceteros
const detalles = {
    tomates: {
        imagen: 'images/tomates.jpg',
        titulo: 'Tomates',
        descripcion: `
            <p><strong>1. Plantar Tomates en Maceta</strong></p>
            <ul>
                <li><strong>Materiales Necesarios:</strong></li>
                <ul>
                    <li>Maceta grande (mínimo 30 cm de diámetro)</li>
                    <li>Tierra para macetas o mezcla para tomates</li>
                    <li>Semillas de tomate o plántulas</li>
                    <li>Fertilizante</li>
                </ul>
                <li><strong>Instrucciones:</strong></li>
                <ul>
                    <li>Preparar la Maceta: Asegúrate de que la maceta tenga agujeros de drenaje en el fondo. Llena la maceta con tierra para macetas o una mezcla específica para tomates.</li>
                    <li>Siembra: Si usas semillas, siembra 1-2 semillas por maceta a una profundidad de aproximadamente 1 cm. Si usas plántulas, haz un hoyo en la tierra y planta la plántula al mismo nivel que estaba en su maceta original.</li>
                    <li>Riego: Riega bien después de plantar. Mantén la tierra húmeda pero no empapada.</li>
                    <li>Ubicación: Coloca la maceta en un lugar que reciba al menos 6-8 horas de luz solar directa al día.</li>
                    <li>Fertilización: Usa un fertilizante equilibrado cada 2-4 semanas, siguiendo las instrucciones del envase.</li>
                    <li>Soporte: A medida que la planta crece, proporciona soporte con un tutor o jaula para tomates.</li>
                </ul>
            
            <p><strong>2. Plantar Tomates Directamente en el Suelo</strong></p>
            <ul>
                <li><strong>Materiales Necesarios:</strong></li>
                <ul>
                    <li>Semillas de tomate o plántulas</li>
                    <li>Fertilizante para tomates</li>
                    <li>Herramientas de jardinería (pala, rastrillo)</li>
                </ul>
                <li><strong>Instrucciones:</strong></li>
                <ul>
                    <li>Preparar el Suelo: Elige un lugar con suelo bien drenado y pleno sol. Mejora el suelo con compost o abono para enriquecerlo.</li>
                    <li>Siembra: Siembra las semillas en hileras separadas por 60 cm, a una profundidad de 1 cm. Si usas plántulas, plántalas a una profundidad igual a la que estaban en sus contenedores, dejando al menos 60 cm entre cada planta.</li>
                    <li>Riego: Riega bien después de plantar y mantén el suelo húmedo durante el crecimiento.</li>
                    <li>Fertilización: Fertiliza una vez al mes con un fertilizante para tomates, siguiendo las instrucciones del envase.</li>
                    <li>Soporte: Usa estacas o jaulas para soportar las plantas a medida que crecen.</li>
                    <li>Mantenimiento: Realiza un seguimiento de las plagas y enfermedades y realiza poda si es necesario para mejorar la circulación del aire.</li>
                </ul>
            
            <p><strong>3. Plantar Tomates Orgánicos</strong></p>
            <ul>
                <li><strong>Materiales Necesarios:</strong></li>
                <ul>
                    <li>Semillas de tomate orgánico o plántulas</li>
                    <li>Tierra orgánica</li>
                    <li>Compost o abono orgánico</li>
                </ul>
                <li><strong>Instrucciones:</strong></li>
                <ul>
                    <li>Preparar el Suelo: Asegúrate de que el suelo sea rico en materia orgánica. Mezcla compost o abono orgánico para enriquecer el suelo.</li>
                    <li>Siembra: Siembra las semillas a una profundidad de 1 cm o planta las plántulas a nivel del suelo. Mantén una distancia de al menos 60 cm entre cada planta.</li>
                    <li>Riego: Riega de manera uniforme para mantener el suelo húmedo. Usa agua de lluvia o agua sin cloro.</li>
                    <li>Fertilización: Usa fertilizantes orgánicos como compost o abono hecho en casa.</li>
                    <li>Mantenimiento: Evita el uso de pesticidas químicos. Utiliza métodos orgánicos de control de plagas como insecticidas naturales y trampas.</li>
                </ul>
            
            <p><strong>4. Plantar Tomates en Sistema Hidropónico</strong></p>
            <ul>
                <li><strong>Materiales Necesarios:</strong></li>
                <ul>
                    <li>Sistema hidropónico (NFT, DWC, etc.)</li>
                    <li>Solución nutritiva para tomates</li>
                    <li>Semillas de tomate o plántulas</li>
                    <li>Medio de cultivo inerte (perlita, vermiculita, lana de roca)</li>
                </ul>
                <li><strong>Instrucciones:</strong></li>
                <ul>
                    <li>Preparar el Sistema: Monta el sistema hidropónico siguiendo las instrucciones del fabricante. Asegúrate de que esté limpio y en funcionamiento.</li>
                </ul>
            </ul>
        `,
    },
    
lechuga: {
        imagen: 'images/lechuga.webp',
        titulo: 'Lechuga',
        descripcion: `
            <p><strong>1. Plantar Lechuga en Maceta</strong></p>
            <ul>
                <li><strong>Materiales Necesarios:</strong></li>
                <ul>
                    <li>Maceta con agujeros de drenaje (mínimo 20 cm de diámetro)</li>
                    <li>Tierra para macetas o mezcla para verduras</li>
                    <li>Semillas de lechuga o plántulas</li>
                    <li>Fertilizante equilibrado</li>
                </ul>
                <li><strong>Instrucciones:</strong></li>
                <ul>
                    <li><strong>Preparar la Maceta:</strong> Asegúrate de que la maceta tenga agujeros en el fondo para el drenaje del agua. Llena la maceta con tierra para macetas o una mezcla específica para verduras.</li>
                    <li><strong>Siembra:</strong> Si usas semillas, siembra 2-3 semillas en cada maceta, espaciadas uniformemente, a una profundidad de aproximadamente 0.5 cm. Si usas plántulas, haz un hoyo en la tierra y planta la plántula a la misma profundidad que estaba en su maceta original.</li>
                    <li><strong>Riego:</strong> Riega bien después de plantar. Mantén la tierra húmeda, pero no empapada. Riega regularmente para mantener la humedad.</li>
                    <li><strong>Ubicación:</strong> Coloca la maceta en un lugar que reciba al menos 4-6 horas de luz solar directa al día.</li>
                    <li><strong>Fertilización:</strong> Usa un fertilizante equilibrado una vez al mes siguiendo las instrucciones del envase.</li>
                    <li><strong>Mantenimiento:</strong> Asegúrate de que la planta tenga suficiente espacio para crecer y realiza podas si es necesario para permitir un buen flujo de aire.</li>
                </ul>
            </ul>
            
            <p><strong>2. Plantar Lechuga Directamente en el Suelo</strong></p>
            <ul>
                <li><strong>Materiales Necesarios:</strong></li>
                <ul>
                    <li>Semillas de lechuga o plántulas</li>
                    <li>Fertilizante para verduras</li>
                    <li>Herramientas de jardinería (pala, rastrillo)</li>
                </ul>
                <li><strong>Instrucciones:</strong></li>
                <ul>
                    <li><strong>Preparar el Suelo:</strong> Elige un lugar con suelo bien drenado y pleno sol o sombra parcial. Labra el suelo a una profundidad de unos 15-20 cm y enriquece con compost o abono.</li>
                    <li><strong>Siembra:</strong> Siembra las semillas en hileras separadas por 30 cm, a una profundidad de 0.5 cm. Si usas plántulas, plántalas a una profundidad igual a la que estaban en sus contenedores, dejando al menos 20-30 cm entre cada planta.</li>
                    <li><strong>Riego:</strong> Riega bien después de plantar y mantén el suelo húmedo durante el crecimiento.</li>
                    <li><strong>Fertilización:</strong> Fertiliza una vez al mes con un fertilizante para verduras.</li>
                    <li><strong>Mantenimiento:</strong> Controla las plagas y enfermedades. Realiza deshierbe para evitar la competencia por nutrientes.</li>
                </ul>
            </ul>
            
            <p><strong>3. Plantar Lechuga Orgánica</strong></p>
            <ul>
                <li><strong>Materiales Necesarios:</strong></li>
                <ul>
                    <li>Semillas de lechuga orgánica o plántulas</li>
                    <li>Tierra orgánica</li>
                    <li>Compost o abono orgánico</li>
                </ul>
                <li><strong>Instrucciones:</strong></li>
                <ul>
                    <li><strong>Preparar el Suelo:</strong> Usa tierra orgánica rica en materia orgánica. Mezcla compost o abono orgánico para enriquecer el suelo.</li>
                    <li><strong>Siembra:</strong> Siembra las semillas a una profundidad de 0.5 cm o planta las plántulas a nivel del suelo, manteniendo una distancia de 20-30 cm entre plantas.</li>
                    <li><strong>Riego:</strong> Riega de manera uniforme para mantener el suelo húmedo. Usa agua de lluvia o agua sin cloro.</li>
                    <li><strong>Fertilización:</strong> Usa fertilizantes orgánicos como compost o abono hecho en casa.</li>
                    <li><strong>Mantenimiento:</strong> Evita el uso de pesticidas químicos. Utiliza métodos orgánicos para controlar plagas, como insecticidas naturales y trampas.</li>
                </ul>
            </ul>
            
            <p><strong>4. Plantar Lechuga en Sistema Hidropónico</strong></p>
            <ul>
                <li><strong>Materiales Necesarios:</strong></li>
                <ul>
                    <li>Sistema hidropónico (NFT, DWC, etc.)</li>
                    <li>Solución nutritiva para lechuga</li>
                    <li>Semillas de lechuga o plántulas</li>
                    <li>Medio de cultivo inerte (perlita, vermiculita, lana de roca)</li>
                </ul>
                <li><strong>Instrucciones:</strong></li>
                <ul>
                    <li><strong>Preparar el Sistema Hidropónico:</strong> Monta el sistema hidropónico siguiendo las instrucciones del fabricante. Asegúrate de que esté limpio y funcionando correctamente.</li>
                    <li><strong>Preparar el Medio de Cultivo:</strong> Coloca el medio de cultivo inerte (perlita, vermiculita, lana de roca) en los recipientes del sistema.</li>
                    <li><strong>Siembra:</strong> Siembra las semillas en el medio de cultivo a una profundidad de 0.5 cm. Si usas plántulas, plántalas en el medio de cultivo.</li>
                    <li><strong>Solución Nutritiva:</strong> Prepara la solución nutritiva siguiendo las instrucciones del fabricante. Llena el sistema hidropónico con esta solución.</li>
                    <li><strong>Riego y Mantenimiento:</strong> Mantén el nivel de la solución nutritiva adecuado y asegúrate de que las raíces estén en contacto con la solución. Verifica el pH y la concentración de nutrientes regularmente.</li>
                    <li><strong>Fertilización:</strong> La solución nutritiva ya contiene los nutrientes necesarios, por lo que no es necesario fertilizar adicionalmente.</li>
                    <li><strong>Mantenimiento:</strong> Controla el crecimiento de las plantas y realiza ajustes en el sistema según sea necesario.</li>
                </ul>
            </ul>
        `,
    },
fresas: {
        imagen: 'images/fresas.jpg',
        titulo: 'Fresas',
        descripcion: `
            <p><strong>1. Plantar Fresas en Maceta</strong></p>
            <ul>
                <li><strong>Materiales Necesarios:</strong></li>
                <ul>
                    <li>Maceta grande (mínimo 30 cm de diámetro)</li>
                    <li>Tierra para macetas o mezcla para fresas</li>
                    <li>Plántulas de fresa</li>
                    <li>Fertilizante equilibrado</li>
                </ul>
                <li><strong>Instrucciones:</strong></li>
                <ul>
                    <li><strong>Preparar la Maceta:</strong> Asegúrate de que la maceta tenga agujeros de drenaje en el fondo. Llena la maceta con tierra para macetas o una mezcla específica para fresas.</li>
                    <li><strong>Siembra:</strong> Planta las plántulas de fresa a una profundidad que permita que el punto de crecimiento esté al nivel de la superficie del suelo. Deja al menos 20-30 cm entre cada plántula.</li>
                    <li><strong>Riego:</strong> Riega bien después de plantar. Mantén la tierra húmeda, pero no empapada. Riega regularmente para mantener la humedad.</li>
                    <li><strong>Ubicación:</strong> Coloca la maceta en un lugar que reciba al menos 6-8 horas de luz solar directa al día.</li>
                    <li><strong>Fertilización:</strong> Usa un fertilizante equilibrado una vez al mes siguiendo las instrucciones del envase.</li>
                    <li><strong>Mantenimiento:</strong> Asegúrate de que las plantas tengan suficiente espacio para crecer. Retira las hojas y frutos muertos para prevenir enfermedades.</li>
                </ul>
            </ul>
            
            <p><strong>2. Plantar Fresas Directamente en el Suelo</strong></p>
            <ul>
                <li><strong>Materiales Necesarios:</strong></li>
                <ul>
                    <li>Plántulas de fresa</li>
                    <li>Fertilizante para fresas</li>
                    <li>Herramientas de jardinería (pala, rastrillo)</li>
                </ul>
                <li><strong>Instrucciones:</strong></li>
                <ul>
                    <li><strong>Preparar el Suelo:</strong> Elige un lugar con suelo bien drenado y pleno sol. Labra el suelo a una profundidad de unos 15-20 cm y enriquece con compost o abono.</li>
                    <li><strong>Siembra:</strong> Planta las plántulas de fresa a una profundidad que permita que el punto de crecimiento esté al nivel del suelo. Deja al menos 30-45 cm entre cada planta.</li>
                    <li><strong>Riego:</strong> Riega bien después de plantar y mantén el suelo húmedo durante el crecimiento.</li>
                    <li><strong>Fertilización:</strong> Fertiliza una vez al mes con un fertilizante específico para fresas.</li>
                    <li><strong>Mantenimiento:</strong> Controla las plagas y enfermedades. Realiza deshierbe y poda las hojas y frutos dañados.</li>
                </ul>
            </ul>
            
            <p><strong>3. Plantar Fresas Orgánicas</strong></p>
            <ul>
                <li><strong>Materiales Necesarios:</strong></li>
                <ul>
                    <li>Plántulas de fresa orgánica</li>
                    <li>Tierra orgánica</li>
                    <li>Compost o abono orgánico</li>
                </ul>
                <li><strong>Instrucciones:</strong></li>
                <ul>
                    <li><strong>Preparar el Suelo:</strong> Usa tierra orgánica rica en materia orgánica. Mezcla compost o abono orgánico para enriquecer el suelo.</li>
                    <li><strong>Siembra:</strong> Planta las plántulas a una profundidad que permita que el punto de crecimiento esté al nivel del suelo. Mantén una distancia de 30-45 cm entre plantas.</li>
                    <li><strong>Riego:</strong> Riega de manera uniforme para mantener el suelo húmedo. Usa agua de lluvia o agua sin cloro.</li>
                    <li><strong>Fertilización:</strong> Usa fertilizantes orgánicos como compost o abono hecho en casa.</li>
                    <li><strong>Mantenimiento:</strong> Evita el uso de pesticidas químicos. Utiliza métodos orgánicos para controlar plagas, como insecticidas naturales y trampas.</li>
                </ul>
            </ul>
            
            <p><strong>4. Plantar Fresas en Sistema Hidropónico</strong></p>
            <ul>
                <li><strong>Materiales Necesarios:</strong></li>
                <ul>
                    <li>Sistema hidropónico (NFT, DWC, etc.)</li>
                    <li>Solución nutritiva para fresas</li>
                    <li>Plántulas de fresa</li>
                    <li>Medio de cultivo inerte (perlita, vermiculita, lana de roca)</li>
                </ul>
                <li><strong>Instrucciones:</strong></li>
                <ul>
                    <li><strong>Preparar el Sistema Hidropónico:</strong> Monta el sistema hidropónico siguiendo las instrucciones del fabricante. Asegúrate de que esté limpio y funcionando correctamente.</li>
                    <li><strong>Preparar el Medio de Cultivo:</strong> Coloca el medio de cultivo inerte (perlita, vermiculita, lana de roca) en los recipientes del sistema.</li>
                    <li><strong>Siembra:</strong> Planta las plántulas en el medio de cultivo.</li>
                    <li><strong>Solución Nutritiva:</strong> Prepara la solución nutritiva siguiendo las instrucciones del fabricante. Llena el sistema hidropónico con esta solución.</li>
                    <li><strong>Riego y Mantenimiento:</strong> Mantén el nivel de la solución nutritiva adecuado y asegúrate de que las raíces estén en contacto con la solución. Verifica el pH y la concentración de nutrientes regularmente.</li>
                    <li><strong>Fertilización:</strong> La solución nutritiva ya contiene los nutrientes necesarios, por lo que no es necesario fertilizar adicionalmente.</li>
                    <li><strong>Mantenimiento:</strong> Controla el crecimiento de las plantas y realiza ajustes en el sistema según sea necesario.</li>
                </ul>
            </ul>
        `,
    }

    // Resto de los productos
};

// Mostrar modal con detalles
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.getElementsByClassName('close-btn')[0];

document.querySelectorAll('.detalles-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const cultivoId = e.target.getAttribute('data-cultivo');
        const productoId = e.target.getAttribute('data-producto');
        const id = cultivoId || productoId;

        const detalle = detalles[id];
        if (detalle) {
            modalBody.innerHTML = `
                <img src="${detalle.imagen}" alt="${detalle.titulo}">
                <h3>${detalle.titulo}</h3>
                <div class="descripcion">
                    ${detalle.descripcion}
                </div>
            `;
            modal.style.display = 'block';
        }
    });
});

// Cerrar modal
closeBtn.onclick = function () {
    modal.style.display = 'none';
};

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
