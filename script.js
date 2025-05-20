// Crear iconos flotantes
        const floatingIconsContainer = document.getElementById('floatingIcons');
        for (let i = 0; i < 10; i++) {
            const icon = document.createElement('div');
            icon.className = 'floating-icon';
            icon.style.left = `${Math.random() * 100}%`;
            icon.style.animationDelay = `${Math.random() * 10}s`;
            icon.style.animationDuration = `${15 + Math.random() * 10}s`;
            floatingIconsContainer.appendChild(icon);
        }
        
        // Datos del quiz
        const questions = [
            {
                text: "En una situación de peligro, ¿cuál sería tu primera reacción?",
                options: [
                    "Analizar rápidamente la situación buscando una solución estratégica",
                    "Proteger a los demás usando mi fuerza o habilidades físicas",
                    "Intentar comunicarme y resolver el conflicto de manera pacífica",
                    "Utilizar el entorno a mi favor para crear una ventaja"
                ]
            },
            {
                text: "¿Qué elemento te atrae más?",
                options: [
                    "Fuego",
                    "Tierra",
                    "Aire",
                    "Agua"
                ]
            },
            {
                text: "¿Cuál de estas habilidades valorarías más tener?",
                options: [
                    "Leer la mente de los demás",
                    "Fuerza física sobrehumana",
                    "Control sobre elementos naturales",
                    "Capacidad de transformar tu cuerpo"
                ]
            },
            {
                text: "¿Cómo prefieres resolver un conflicto?",
                options: [
                    "Usando la lógica y la persuasión",
                    "Con acción directa y decisiva",
                    "Encontrando un punto medio que beneficie a todos",
                    "Adaptándome a la situación conforme evoluciona"
                ]
            },
            {
                text: "¿Qué cualidad consideras tu mayor fortaleza?",
                options: [
                    "Mi inteligencia y capacidad analítica",
                    "Mi determinación y resistencia",
                    "Mi empatía y comprensión",
                    "Mi adaptabilidad y creatividad"
                ]
            },
            {
                text: "Si pudieras cambiar algo de ti mismo, ¿qué sería?",
                options: [
                    "Quiero tener mayor control sobre mis emociones",
                    "Desearía ser físicamente más fuerte o resistente",
                    "Me gustaría conectar mejor con los demás",
                    "Quisiera ser más espontáneo y menos planificador"
                ]
            },
            {
                text: "¿Cuál de estos objetos te resulta más fascinante?",
                options: [
                    "Un complejo rompecabezas o acertijo",
                    "Un arma o herramienta antigua",
                    "Un cristal con propiedades únicas",
                    "Un organismo con capacidad de adaptación extrema"
                ]
            }
        ];
        
        // Resultados posibles
        const results = [
            {
                power: "Telepatía",
                description: "Posees la extraordinaria capacidad de leer mentes y comunicarte telepáticamente con otros. Puedes detectar pensamientos ajenos, proyectar los tuyos y potencialmente controlar mentes menos disciplinadas. Este poder requiere gran control y ética, ya que la línea entre ayudar y manipular es delgada.",
                character: "Tu mentor en la Escuela Xavier será el Profesor Charles Xavier, el telépata más poderoso del mundo. Él te enseñará a desarrollar tu potencial mientras mantienes fuertes barreras éticas.",
                image: "image/Profesor Charles Xavier.jpg",
                stats: {
                    strength: 30,
                    mind: 95,
                    energy: 60,
                    control: 85
                }
            },
            {
                power: "Control Elemental",
                description: "Tu ADN mutante te permite manipular uno o más elementos naturales. Ya sea controlando el fuego como Pyro, el clima como Storm, o el hielo como Iceman, tienes un vínculo único con las fuerzas fundamentales de la naturaleza. Este poder puede ser tanto creativo como destructivo.",
                character: "Ororo Munroe (Storm) será tu mentora, enseñándote a canalizar tus habilidades elementales mientras mantienes la armonía con la naturaleza que puedes manipular.",
                image: "image/Ororo Munroe (Storm).jpg",
                stats: {
                    strength: 45,
                    mind: 55,
                    energy: 90,
                    control: 70
                }
            },
            {
                power: "Regeneración Acelerada",
                description: "Tu cuerpo posee una capacidad de regeneración celular extraordinaria, permitiéndote sanar heridas a velocidad sobrehumana. Esto puede incluir resistencia a enfermedades, envejecimiento ralentizado y potencialmente una longevidad extendida. Eres extremadamente resistente al daño físico.",
                character: "Logan (Wolverine) reconoce en ti un poder similar al suyo. Aunque no es el mentor más paciente, te enseñará a aprovechar tu durabilidad mientras desarrollas la fortaleza mental para soportar lo que tu cuerpo puede resistir.",
                image: "image/Logan (Wolverine).jpg",
                stats: {
                    strength: 85,
                    mind: 40,
                    energy: 60,
                    control: 65
                }
            },
            {
                power: "Transformación Física",
                description: "Puedes alterar tu forma física de maneras extraordinarias. Esto podría manifestarse como cambiar tu apariencia, transformar tu cuerpo en diferentes materiales, o adaptar tu forma para diferentes situaciones. Este poder versátil ofrece infinitas posibilidades tanto defensivas como ofensivas.",
                character: "Hank McCoy (Beast) te guiará a través de los aspectos científicos de tu mutación, ayudándote a comprender los límites y posibilidades de tu transformación mientras mantienes tu identidad fundamental.",
                image: "image/Hank McCoy (Beast).jpg",
                stats: {
                    strength: 70,
                    mind: 65,
                    energy: 50,
                    control: 80
                }
            },
            {
                power: "Manipulación de Energía",
                description: "Tu cuerpo puede generar, absorber y redirigir varias formas de energía. Desde explosiones concusivas como Cyclops hasta energía cinética como Gambit, este poder tiene un potencial destructivo enorme pero también aplicaciones precisas cuando se controla adecuadamente.",
                character: "Scott Summers (Cyclops) entiende mejor que nadie la importancia del control preciso. Te entrenará para canalizar tu energía con exactitud y propósito, convirtiendo un poder potencialmente caótico en una herramienta precisa.",
                image: "image/Scott Summers (Cyclops).png",
                stats: {
                    strength: 60,
                    mind: 50,
                    energy: 95,
                    control: 75
                }
            },
            {
                power: "Telekinesis",
                description: "Puedes mover y manipular objetos con el poder de tu mente. Este poder versátil te permite levitar objetos (o a ti mismo), crear escudos protectores, y aplicar fuerza a distancia. Con práctica, podrías manipular materia a nivel molecular o crear poderosas ondas de choque telekinéticas.",
                character: "Jean Grey será tu mentora, habiendo dominado tanto la telepatía como la telekinesis. Te enseñará el delicado equilibrio entre poder y control que requiere mover el mundo con solo pensarlo.",
                image: "image/Jean Grey.jpeg",
                stats: {
                    strength: 40,
                    mind: 85,
                    energy: 75,
                    control: 90
                }
            }
        ];
        
        // Variables de estado
        let currentQuestion = 0;
        let selectedOptions = [];
        
        // Referencias a elementos del DOM
        const introSection = document.getElementById('intro');
        const questionContainer = document.getElementById('questionContainer');
        const resultsContainer = document.getElementById('resultsContainer');
        const questionText = document.getElementById('questionText');
        const optionsContainer = document.getElementById('options');
        const progressBar = document.getElementById('progressBar');
        const prevButton = document.getElementById('prevQuestion');
        const nextButton = document.getElementById('nextQuestion');
        
        // Botones de acción
        document.getElementById('startQuiz').addEventListener('click', startQuiz);
        prevButton.addEventListener('click', showPreviousQuestion);
        nextButton.addEventListener('click', handleNextQuestion);
        document.getElementById('restartQuiz').addEventListener('click', restartQuiz);
        document.getElementById('shareResult').addEventListener('click', shareResult);
        
        // Iniciar el quiz
        function startQuiz() {
            introSection.classList.remove('active');
            questionContainer.classList.add('active');
            showQuestion(0);
        }
        
        // Mostrar una pregunta específica
        function showQuestion(index) {
            currentQuestion = index;
            questionText.textContent = questions[index].text;
            optionsContainer.innerHTML = '';
            
            questions[index].options.forEach((option, i) => {
                const optionElement = document.createElement('button');
                optionElement.className = 'option';
                optionElement.textContent = option;
                
                if (selectedOptions[index] === i) {
                    optionElement.classList.add('selected');
                }
                
                optionElement.addEventListener('click', () => selectOption(i));
                optionsContainer.appendChild(optionElement);
            });
            
            // Actualizar barra de progreso
            const progress = ((index + 1) / questions.length) * 100;
            progressBar.style.width = `${progress}%`;
            
            // Mostrar/ocultar botones de navegación
            prevButton.style.display = index > 0 ? 'block' : 'none';
            nextButton.textContent = index === questions.length - 1 ? 'Ver Resultado' : 'Siguiente';
        }
        
        // Seleccionar una opción
        function selectOption(optionIndex) {
            selectedOptions[currentQuestion] = optionIndex;
            
            // Actualizar UI para mostrar la selección
            const options = optionsContainer.querySelectorAll('.option');
            options.forEach((opt, i) => {
                if (i === optionIndex) {
                    opt.classList.add('selected');
                } else {
                    opt.classList.remove('selected');
                }
            });
        }
        
        // Mostrar pregunta anterior
        function showPreviousQuestion() {
            if (currentQuestion > 0) {
                showQuestion(currentQuestion - 1);
            }
        }
        
        // Manejar botón siguiente
        function handleNextQuestion() {
            if (selectedOptions[currentQuestion] === undefined) {
                // Animar el botón si no se ha seleccionado una opción
                nextButton.classList.add('shake');
                setTimeout(() => nextButton.classList.remove('shake'), 500);
                return;
            }
            
            if (currentQuestion < questions.length - 1) {
                showQuestion(currentQuestion + 1);
            } else {
                showResults();
            }
        }
        
        // Mostrar resultados
        function showResults() {
            questionContainer.classList.remove('active');
            resultsContainer.classList.add('active');
            
            const result = determineResult();
            
            document.getElementById('resultPower').textContent = result.power;
            document.getElementById('resultDescription').textContent = result.description;
            document.getElementById('characterMatch').textContent = result.character;
            document.getElementById('resultImage').style.backgroundImage = `url('${result.image}')`;
            
            // Animar barras de estadísticas
            setTimeout(() => {
                document.getElementById('strengthBar').style.width = `${result.stats.strength}%`;
                document.getElementById('mindBar').style.width = `${result.stats.mind}%`;
                document.getElementById('energyBar').style.width = `${result.stats.energy}%`;
                document.getElementById('controlBar').style.width = `${result.stats.control}%`;
            }, 500);
        }
        
        // Determinar el resultado basado en las respuestas
        function determineResult() {
            // Contar tipos de respuestas para determinar tendencias
            let counts = [0, 0, 0, 0]; // Para las 4 opciones de cada pregunta
            
            selectedOptions.forEach(option => {
                if (option !== undefined) {
                    counts[option]++;
                }
            });
            
            // Encontrar el índice del tipo más común
            let maxCount = 0;
            let dominantType = 0;
            
            counts.forEach((count, index) => {
                if (count > maxCount) {
                    maxCount = count;
                    dominantType = index;
                }
            });
            
            // Mapear el tipo dominante a un resultado
            // Esta es una lógica simplificada - podrías hacer algo más complejo
            return results[dominantType % results.length];
        }
        
        // Reiniciar el quiz
        function restartQuiz() {
            selectedOptions = [];
            currentQuestion = 0;
            resultsContainer.classList.remove('active');
            introSection.classList.add('active');
        }
        
        // Compartir resultado (simulado)
        function shareResult() {
            alert('¡Gracias por querer compartir tu poder mutante! Esta funcionalidad estaría conectada a redes sociales en una versión completa.');
        }// JavaScript Document