// --- 1. SUPABASE CONFIGURATION ---
const SUPABASE_URL = 'https://sdslegoqhygfziqwqxrk.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkc2xlZ29xaHlnZnppcXdxeHJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4Njc1MzUsImV4cCI6MjA5MDQ0MzUzNX0.A3PER_vjw7-uSb3XY8fv4yZARhh84XhQtVlJvzSXnwI';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// --- 2. THE 20 B.Sc. SOCIO-CULTURAL TOPICS (FROM ANT-DSM 211 SYLLABUS) ---
const assignmentTopics = [
   [
    { title: "What is Socio-Cultural Anthropology and describe its classification" },
    { title: "Scope and Relevance of Socio-cultural Anthropology" },
    { title: "Relationship of Socio-cultural Anthropology with other Disciplines" },
    { title: "What are Society and Culture and how are they connected?" },
    { title: "Concept of Society, Institution and Organization" },
    { title: "Concept of Status and Role in Society" },
    { title: "Social Stratification: Concepts and Types" },
    { title: "Culture Element, Culture Trait, Culture Complex, and Culture Pattern" },
    { title: "Cultural Integration and Cultural Universals" },
    { title: "Processes of Culture Change: Acculturation and Transculturation" },
    { title: "Social Institutions: Family and Marriage" },
    { title: "Kinship Systems and Organization" },
    { title: "Religion from an Anthropological Perspective" },
    { title: "Economic and Political Organization in Anthropology" },
    { title: "Theories of Cultural Evolution: Diffusionism" },
    { title: "Theories of Cultural Evolution: Functionalism and Structuralism" },
    { title: "Culture and Personality School of Thought in Socio-Cultural Anthropology" }
]
];

// --- 3. B.Sc. STUDENT DATABASE ---
const studentDB = {
    {
    "Y25101002": { "name": "AMARJEET RAIKWAR", "course": "B.Sc.", "topics": [2, 14] },
    "Y25102001": { "name": "AANCHAL SHYAMANAND JHA", "course": "B.Sc.", "topics": [1, 7] },
    "Y25102002": { "name": "ADITY KUMARI", "course": "B.Sc.", "topics": [2, 7] },
    "Y25102003": { "name": "ANANYA GAUTAM", "course": "B.Sc.", "topics": [3, 8] },
    "Y25102005": { "name": "JASHODA BHOI", "course": "B.Sc.", "topics": [4, 10] },
    "Y25102006": { "name": "MEGHADRI ROY", "course": "B.Sc.", "topics": [5, 11] },
    "Y25102007": { "name": "PANISMITA BAG", "course": "B.Sc.", "topics": [6, 12] },
    "Y25102008": { "name": "PRASANT DEVTALLA", "course": "B.Sc.", "topics": [7, 13] },
    "Y25102009": { "name": "RIPUNJITA BORAH", "course": "B.Sc.", "topics": [4, 9] },
    "Y25102010": { "name": "ROHINI BAIDH", "course": "B.Sc.", "topics": [8, 14] },
    "Y25102011": { "name": "RUDRAKSH CHOUHAN", "course": "B.Sc.", "topics": [9, 15] },
    "Y25102012": { "name": "SATYAM ADIWASHI", "course": "B.Sc.", "topics": [7, 12] },
    "Y25102013": { "name": "SEEMANTNI BISEN", "course": "B.Sc.", "topics": [11, 0] },
    "Y25102014": { "name": "SHIVANGI SAHU", "course": "B.Sc.", "topics": [12, 1] },
    "Y25102015": { "name": "SHREYA MOURYA", "course": "B.Sc.", "topics": [13, 2] },
    "Y25102016": { "name": "SONALI PANI", "course": "B.Sc.", "topics": [14, 3] },
    "Y25102017": { "name": "SUHANI", "course": "B.Sc.", "topics": [4, 11] },
    "Y25102018": { "name": "TANISHA SHILPI", "course": "B.Sc.", "topics": [15, 4] },
    "Y25102019": { "name": "ABHAY PRATAP SINGH LODHI", "course": "B.Sc.", "topics": [16, 5] },
    "Y25102020": { "name": "BHOOMI SONI", "course": "B.Sc.", "topics": [7, 8] },
    "Y25102021": { "name": "SHRADDHA RAJPOOT", "course": "B.Sc.", "topics": [1, 7] },
    "Y25104006": { "name": "BINDU SHREE DAS", "course": "B.Sc.", "topics": [6, 14] },
    "Y25104079": { "name": "SHIVAM JAISWAL", "course": "B.Sc.", "topics": [4, 8] },
    "Y25105001": { "name": "AMISHA KUMARI SHARMA", "course": "B.Sc.", "topics": [1, 7] },
    "Y25105002": { "name": "ANJALI SURYAVANSHI", "course": "B.Sc.", "topics": [2, 7] },
    "Y25105003": { "name": "ANSHIKA PANDEY", "course": "B.Sc.", "topics": [3, 8] },
    "Y25105004": { "name": "ANUJ DWIVEDI", "course": "B.Sc.", "topics": [4, 9] },
    "Y25105005": { "name": "ASHMI CHOUHAN", "course": "B.Sc.", "topics": [4, 10] },
    "Y25105006": { "name": "AYUSHI JAIN", "course": "B.Sc.", "topics": [5, 11] },
    "Y25105007": { "name": "BABLOO KUMAR", "course": "B.Sc.", "topics": [6, 12] },
    "Y25105008": { "name": "DIVYA PATEL", "course": "B.Sc.", "topics": [7, 13] },
    "Y25105009": { "name": "GOPAL DINKAR", "course": "B.Sc.", "topics": [7, 14] },
    "Y25105010": { "name": "HANSHIKA KORI", "course": "B.Sc.", "topics": [8, 14] },
    "Y25105011": { "name": "JAHANVI SOUR", "course": "B.Sc.", "topics": [9, 15] },
    "Y25105012": { "name": "KANCHI SONI", "course": "B.Sc.", "topics": [10, 16] },
    "Y25105014": { "name": "KHUSHI PRASAD", "course": "B.Sc.", "topics": [12, 1] },
    "Y25105015": { "name": "MAMTA NAMDEO", "course": "B.Sc.", "topics": [6, 10] },
    "Y25105016": { "name": "NANDINI KURMI", "course": "B.Sc.", "topics": [14, 3] },
    "Y25105017": { "name": "NEERAJ SINGH", "course": "B.Sc.", "topics": [14, 4] },
    "Y25105018": { "name": "PAYAL CHOURASIA", "course": "B.Sc.", "topics": [15, 4] },
    "Y25105019": { "name": "POORNIMA DIXIT", "course": "B.Sc.", "topics": [5, 15] },
    "Y25105020": { "name": "PRIYDARSHNI DUBEY", "course": "B.Sc.", "topics": [0, 6] },
    "Y25105021": { "name": "RAGNEE PATEL", "course": "B.Sc.", "topics": [1, 7] },
    "Y25105022": { "name": "RAHIYA SHEIKH", "course": "B.Sc.", "topics": [10, 16] },
    "Y25105023": { "name": "RAMPAL AHIRWAR", "course": "B.Sc.", "topics": [0, 0] },
    "Y25105024": { "name": "SAKSHI GAUTAM", "course": "B.Sc.", "topics": [4, 9] },
    "Y25105026": { "name": "TAMADA TANUJA", "course": "B.Sc.", "topics": [7, 13] },
    "Y25105027": { "name": "TANUJA CHAURASIA", "course": "B.Sc.", "topics": [6, 12] },
    "Y25105029": { "name": "VAIBHAV VISHNOI", "course": "B.Sc.", "topics": [3, 7] },
    "Y25105031": { "name": "ROHAN AHIRWAR", "course": "B.Sc.", "topics": [9, 15] },
    "Y25105032": { "name": "SUHANI PATEL", "course": "B.Sc.", "topics": [10, 16] },
    "Y25106001": { "name": "AANAND KUMAR", "course": "B.Sc.", "topics": [1, 7] },
    "Y25106002": { "name": "AAVANI M", "course": "B.Sc.", "topics": [2, 7] },
    "Y25106004": { "name": "AMAN RATHORE", "course": "B.Sc.", "topics": [4, 9] },
    "Y25106005": { "name": "AMBIKA DAHAYAT", "course": "B.Sc.", "topics": [7, 14] },
    "Y25106006": { "name": "ANJALI RAI", "course": "B.Sc.", "topics": [5, 11] },
    "Y25106007": { "name": "ANKITA PATEL", "course": "B.Sc.", "topics": [6, 12] },
    "Y25106008": { "name": "ANKUSH KUMAR", "course": "B.Sc.", "topics": [7, 13] },
    "Y25106010": { "name": "ARYA CHOUBEY", "course": "B.Sc.", "topics": [8, 14] },
    "Y25106011": { "name": "DIVYANSH SURYAVANSHI", "course": "B.Sc.", "topics": [1, 8] },
    "Y25106012": { "name": "GAURAV PATEL", "course": "B.Sc.", "topics": [10, 16] },
    "Y25106013": { "name": "HARSHITA CHOUBEY", "course": "B.Sc.", "topics": [11, 0] },
    "Y25106014": { "name": "HARSHITA SAHU", "course": "B.Sc.", "topics": [12, 1] },
    "Y25106015": { "name": "KAIFY YUSUF", "course": "B.Sc.", "topics": [13, 2] },
    "Y25106016": { "name": "KANCHAN", "course": "B.Sc.", "topics": [14, 3] },
    "Y25106017": { "name": "KASHISH KUMARI", "course": "B.Sc.", "topics": [14, 4] },
    "Y25106018": { "name": "KAUSHAL KUMAR", "course": "B.Sc.", "topics": [15, 4] },
    "Y25106019": { "name": "KHUSHI MISHRA", "course": "B.Sc.", "topics": [16, 5] },
    "Y25106020": { "name": "KRISHNA YADAV", "course": "B.Sc.", "topics": [0, 6] },
    "Y25106021": { "name": "LAVANYA SHARMA", "course": "B.Sc.", "topics": [1, 7] },
    "Y25106022": { "name": "LAVANYA SINGH", "course": "B.Sc.", "topics": [2, 7] },
    "Y25106023": { "name": "MAHI SONI", "course": "B.Sc.", "topics": [3, 8] },
    "Y25106024": { "name": "MENDKE SANDESH SADANAND", "course": "B.Sc.", "topics": [4, 9] },
    "Y25106026": { "name": "NANDINI MISHRA", "course": "B.Sc.", "topics": [5, 11] },
    "Y25106027": { "name": "NANDNI SHARMA", "course": "B.Sc.", "topics": [6, 12] },
    "Y25106028": { "name": "PANKAJ SHAKYA", "course": "B.Sc.", "topics": [7, 13] },
    "Y25106029": { "name": "PARTH RAWAT", "course": "B.Sc.", "topics": [7, 14] },
    "Y25106030": { "name": "RIKANSHA YASHONA", "course": "B.Sc.", "topics": [8, 14] },
    "Y25106031": { "name": "RIYA KUMARI", "course": "B.Sc.", "topics": [3, 8] },
    "Y25106034": { "name": "SHALINI RAWAT", "course": "B.Sc.", "topics": [7, 14] },
    "Y25106035": { "name": "SHAMBHAVI TIWARI", "course": "B.Sc.", "topics": [13, 2] },
    "Y25106036": { "name": "SNEHA THAKUR", "course": "B.Sc.", "topics": [14, 3] },
    "Y25106037": { "name": "SUDIPTA ACHARJEE", "course": "B.Sc.", "topics": [14, 4] },
    "Y25106038": { "name": "SUNEET KAUR", "course": "B.Sc.", "topics": [15, 4] },
    "Y25106039": { "name": "TANISHQ SHARMA", "course": "B.Sc.", "topics": [16, 5] },
    "Y25106040": { "name": "TUSHAR", "course": "B.Sc.", "topics": [0, 6] },
    "Y25106042": { "name": "VRANDA CHOURASIYA", "course": "B.Sc.", "topics": [2, 7] },
    "Y25106043": { "name": "MUKTI JESWANI", "course": "B.Sc.", "topics": [3, 8] },
    "Y25106045": { "name": "SAKSHAM JAIN", "course": "B.Sc.", "topics": [4, 10] },
    "Y25106047": { "name": "CATHERIN JOY", "course": "B.Sc.", "topics": [6, 12] },
    "Y25109001": { "name": "ARADHNA PAUL", "course": "B.Sc.", "topics": [1, 7] },
    "Y25109002": { "name": "JANVI AHIRWAR", "course": "B.Sc.", "topics": [2, 7] },
    "Y25109003": { "name": "KANAK CHOUKSEY", "course": "B.Sc.", "topics": [3, 8] },
    "Y25109004": { "name": "MONICA PANDEY", "course": "B.Sc.", "topics": [4, 9] },
    "Y25109007": { "name": "RAGINI BADHOLIYA", "course": "B.Sc.", "topics": [6, 12] },
    "Y25109008": { "name": "SAKSHI", "course": "B.Sc.", "topics": [7, 13] },
    "Y25109009": { "name": "SHRADHA RAIKWAR", "course": "B.Sc.", "topics": [7, 14] },
    "Y25109010": { "name": "SNEHA KUMARI", "course": "B.Sc.", "topics": [8, 14] },
    "Y25109012": { "name": "KHUSHUBU JAISWAL", "course": "B.Sc.", "topics": [10, 16] },
    "Y25109013": { "name": "MAHAK BURMAN", "course": "B.Sc.", "topics": [11, 0] },
    "Y25109014": { "name": "NAINSI SONI", "course": "B.Sc.", "topics": [12, 1] },
    "Y25109015": { "name": "POONAM DIXIT", "course": "B.Sc.", "topics": [13, 2] },
    "Y25109016": { "name": "SHRADDHA SINGH THAKUR", "course": "B.Sc.", "topics": [14, 3] },
    "Y25109019": { "name": "TEJASWANI PATEL", "course": "B.Sc.", "topics": [16, 5] },
    "Y25109021": { "name": "SURBHI DUBEY", "course": "B.Sc.", "topics": [1, 7] },


};

let currentStudentId = "";
let currentStrikeCount = 0;
let lastMemeIndex = -1; 

// --- 4. DEVICE SCRAPER ---
function getDeviceData() {
    return {
        device: navigator.userAgent,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
}

// --- 5. LOGIN LOGIC ---
document.getElementById('generate-btn').addEventListener('click', async () => {
    const enrollment = document.getElementById('enrollment-input').value.trim().toUpperCase();
    const student = studentDB[enrollment];
    const errorMsg = document.getElementById('error-msg');
    
    if (!student) {
        errorMsg.classList.remove('hidden');
        return;
    }
    
    errorMsg.classList.add('hidden');
    currentStudentId = enrollment;
    
    const { device, timezone } = getDeviceData();
    
    // Log login
    await supabaseClient.from('tracking').insert([
        { enrollment_no: currentStudentId, action: 'login', device: device, timezone: timezone }
    ]);
    
    // Check cheat clicks
    const { count, error } = await supabaseClient
        .from('tracking')
        .select('*', { count: 'exact', head: true })
        .eq('enrollment_no', enrollment)
        .eq('action', 'cheat');

    currentStrikeCount = count || 0;

    // Build Dashboard
    document.getElementById('student-name-display').innerText = `Welcome, ${student.name}`;
    document.getElementById('student-details-display').innerText = `Enrollment: ${enrollment} | Program: ${student.course}`;
    
    const listDiv = document.getElementById('topic-list');
    listDiv.innerHTML = ''; 
    student.topics.forEach(index => {
        let topicObj = assignmentTopics[index];
        listDiv.innerHTML += `
            <div class="book-item">
                <div class="book-title">${topicObj.title}</div>
            </div>`;
    });

    if (currentStrikeCount >= 1) {
        document.getElementById('trap-container').classList.add('hidden');
    }

    // Reveal the UI 
    document.getElementById('landing-card').classList.add('hidden');
    document.getElementById('results-area').classList.remove('hidden');
    
    setTimeout(() => {
        document.getElementById('watermark').classList.remove('hidden');
    }, 500);
});

// --- 6. FAB TRACKING LOGIC ---
document.getElementById('wa-help-btn').addEventListener('click', async function(e) {
    e.preventDefault(); 
    const { device, timezone } = getDeviceData();
    
    await supabaseClient.from('tracking').insert([
        { enrollment_no: currentStudentId || 'unregistered', action: 'whatsapp', device: device, timezone: timezone }
    ]);
    
    window.open(`https://wa.me/918986937029?text=Hi%20Ritik,%20I'm%20from%20B.Sc.%20Sem%202,%20I%20need%20help%20with%20the%20ANT-DSM-211%20assignment.`, '_blank');
});

document.getElementById('game-btn').addEventListener('click', async function(e) {
    e.preventDefault(); 
    const { device, timezone } = getDeviceData();
    
    await supabaseClient.from('tracking').insert([
        { enrollment_no: currentStudentId || 'unregistered', action: 'game', device: device, timezone: timezone }
    ]);
    
    window.open('https://ritikspin.onrender.com', '_blank');
});

// --- 7. THE TRAP ROULETTE ---
const trapLinks = [
    "https://youtu.be/HI8nIMRhuvo?si=DUAZbFgGgyWz4Gym",
    "https://youtu.be/AJG-Nluvg5c?si=H-3jrY2DQmwVqt_Y",
    "https://youtu.be/bQ5NAumOtC0?si=9y64RxXIsDHIUkm2",
    "https://youtu.be/lNwApgaHK4Y?si=zAP92p1N6dTj62gj",
    "https://youtu.be/4TjrQ9sG9TE?si=DQwtYI2Tl6Hzxkft",
    "https://youtu.be/VX9npbMm6Cc?si=ApBJ7EaynaUTZ-_1",
    "https://youtu.be/7rym-VB6YhE?si=NjlcMJrh0DvqbAJ6",
    "https://youtu.be/55Q9Ko1O5kQ?si=TtdqyCY5qCAFn5H0",
    "https://youtu.be/0A4yLCUfIkE?si=jqrvFdzK44fwLQyf"
];

document.getElementById('cheat-btn').addEventListener('click', async function() {
    currentStrikeCount++;

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * trapLinks.length);
    } while (randomIndex === lastMemeIndex);
    
    lastMemeIndex = randomIndex; 
    
    const finalLink = trapLinks[randomIndex];
    const { device, timezone } = getDeviceData();
    
    await supabaseClient.from('tracking').insert([
        { 
            enrollment_no: currentStudentId, 
            action: 'cheat', 
            strike_count: currentStrikeCount, 
            meme_url: finalLink, 
            device: device, 
            timezone: timezone 
        }
    ]);

    window.open(finalLink, '_blank');
    
    if (currentStrikeCount >= 1) {
        document.getElementById('trap-container').classList.add('hidden');
    }
});