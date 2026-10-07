// ==========================================
// 1. SUPABASE CONFIGURATION
// ==========================================
const SUPABASE_URL = 'https://moxeoqdsaxwlbeceduwh.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1veGVvcWRzYXh3bGJlY2VkdXdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzNDM2NTQsImV4cCI6MjEwNjkxOTY1NH0.qTqGLBFHVgobTIgZnlSvsI5okWhS-ueEXHL1cI6tmLg';

let supabaseClient = null;

if (typeof window.supabase !== 'undefined') {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// ==========================================
// 2. ANT-DSM-311 ASSIGNMENT TOPICS (14 Topics)
// ==========================================
const assignmentTopics = [
    { title: "Archaeological Anthropology: Meaning, Scope and Relevance. Concept" },
    { title: "Prehistory, Proto-History and History." },
    { title: "The Relationship of Archaeology with other disciplines" },
    { title: "Methods of Dating: Relative and Absolute Dating" },
    { title: "Great Ice Age. Evidence of Quaternary Ice Age: River Terrace, Moraines, Eustatic Fluctuations Etc." },
    { title: "Pluviation and Inter Pluviation" },
    { title: "Lower Palaeolithic Cultures of Europe (Abbevillian, Acheulian, Clactonian, Levalloisian and India (Soan)" },
    { title: "Middle Palaeolithic Culture of Europe (Mousterian)" },
    { title: "Upper Palaeolithic cultures, Home and Cave Art" },
    { title: "Mesolithic Cultures of Europe and Corresponding Stone Age Industries in India" },
    { title: "Chief Features of Neolithic Revolution, Emergence of Human Settlements and Farming" },
    { title: "Metal Age: Chalcolithic culture" },
    { title: "The Chief Characteristics and Decay of Indus Valley Civilization." },
    { title: "Definition and Types of Megaliths, Distribution and Main Characteristics of Indian Megaliths." }
];

// ==========================================
// 3. FULL STUDENT DATABASE (B.A. & B.Sc.)
// ==========================================
const studentDB = {
    // --- B.A. III-SEMESTER STUDENTS ---
    "Y25120425": { name: "Rudraksh Patel", course: "B.A.", topics: [0, 7] },
    "Y20125187": { name: "Ikrakhan", course: "B.A.", topics: [1, 8] },
    "Y24120333": { name: "Ayushi Suryavanshi", course: "B.A.", topics: [2, 9] },
    "Y25120018": { name: "Abhiyant Singh Thakur", course: "B.A.", topics: [3, 10] },
    "Y25120029": { name: "Aishanya Singh Thakur", course: "B.A.", topics: [4, 11] },
    "Y25120047": { name: "Anamika Thakur", course: "B.A.", topics: [5, 12] },
    "Y25120065": { name: "Anokhi Jain", course: "B.A.", topics: [6, 13] },
    "Y25120068": { name: "Anshika Singh", course: "B.A.", topics: [7, 0] },
    "Y25120079": { name: "Anushka Nema", course: "B.A.", topics: [8, 1] },
    "Y25120106": { name: "Bharti Raikwar", course: "B.A.", topics: [9, 2] },
    "Y25120107": { name: "Bhoomi Thakur", course: "B.A.", topics: [10, 3] },
    "Y25120119": { name: "Charu Patle", course: "B.A.", topics: [11, 4] },
    "Y25120134": { name: "Deepika Rai", course: "B.A.", topics: [12, 5] },
    "Y25120154": { name: "Durga Ahirwar", course: "B.A.", topics: [13, 6] },
    "Y25120181": { name: "Hemant Prajapati", course: "B.A.", topics: [0, 5] },
    "Y25120187": { name: "Ikra Khan", course: "B.A.", topics: [1, 6] },
    "Y25120205": { name: "Kanchan Gound", course: "B.A.", topics: [2, 7] },
    "Y25120207": { name: "Kanika Soni", course: "B.A.", topics: [3, 8] },
    "Y25120218": { name: "Krashna Kumar Chaudhary", course: "B.A.", topics: [4, 9] },
    "Y25120248": { name: "Madhur Sharma", course: "B.A.", topics: [5, 10] },
    "Y25120277": { name: "Mayank Urmaliya", course: "B.A.", topics: [6, 11] },
    "Y25120288": { name: "Nainika Roy", course: "B.A.", topics: [7, 12] },
    "Y25120296": { name: "Manshi Sen", course: "B.A.", topics: [8, 13] },
    "Y25120345": { name: "Pratha Sahu", course: "B.A.", topics: [9, 0] },
    "Y25120371": { name: "Rahul Kumar", course: "B.A.", topics: [10, 1] },
    "Y25120375": { name: "Raj Ahirwar", course: "B.A.", topics: [11, 2] },
    "Y25120475": { name: "Bhagyesh Sharma", course: "B.A.", topics: [12, 3] },
    "Y25120486": { name: "Shivansh Jadiya", course: "B.A.", topics: [13, 4] },
    "Y25120515": { name: "Snigdhadeep Majumdar", course: "B.A.", topics: [0, 8] },
    "Y25120516": { name: "Sohit Raj", course: "B.A.", topics: [1, 9] },
    "Y25120523": { name: "Soniya Patel", course: "B.A.", topics: [2, 10] },
    "Y25120529": { name: "Suhani Shakya (Kori)", course: "B.A.", topics: [3, 11] },
    "Y25120539": { name: "Surendra Rajpoot", course: "B.A.", topics: [4, 12] },
    "Y25120543": { name: "Suryansh Saxena", course: "B.A.", topics: [5, 13] },
    "Y25120551": { name: "Tarang Iyer", course: "B.A.", topics: [6, 0] },
    "Y25120556": { name: "Trupti Kaushal", course: "B.A.", topics: [7, 1] },
    "Y25120569": { name: "Vaishnavi Ghoshi", course: "B.A.", topics: [8, 2] },
    "Y25120599": { name: "Yashvardhan Singh", course: "B.A.", topics: [9, 3] },
    "Y25120612": { name: "Arman Singh Rajpoot", course: "B.A.", topics: [10, 4] },
    "Y25120615": { name: "Aryan Kurmi", course: "B.A.", topics: [11, 5] },
    "Y25120616": { name: "Bhagyashree", course: "B.A.", topics: [12, 6] },
    "Y25120620": { name: "Devarshi Dubey", course: "B.A.", topics: [13, 7] },
    "Y25120626": { name: "Kalpana Kumari", course: "B.A.", topics: [0, 10] },
    "Y25120632": { name: "Nikhil Raikwar", course: "B.A.", topics: [1, 11] },
    "Y25120634": { name: "Pragati Yadav", course: "B.A.", topics: [2, 12] },
    "Y25120635": { name: "Prince Dangi", course: "B.A.", topics: [3, 13] },
    "Y25120640": { name: "Radhika Thakur", course: "B.A.", topics: [4, 0] },
    "Y25120642": { name: "Ramji Tiwari", course: "B.A.", topics: [5, 1] },
    "Y25120654": { name: "Satyam Jain", course: "B.A.", topics: [6, 2] },
    "Y25120655": { name: "Sejal Jain", course: "B.A.", topics: [7, 3] },
    "Y25120662": { name: "Surya Kesharwani", course: "B.A.", topics: [8, 4] },
    "Y25130036": { name: "Kajal Ahirwar", course: "B.A.", topics: [9, 5] },
    "Y25130063": { name: "Ravindra Singh Yadav", course: "B.A.", topics: [10, 6] },
    "Y25130072": { name: "Sarswati Kushwaha", course: "B.A.", topics: [11, 7] },
    "Y26120514": { name: "Sneha Gound", course: "B.A.", topics: [12, 8] },

    // --- B.Sc. III-SEMESTER STUDENTS ---
    "Y25101002": { name: "Amarjeet Raikwar", course: "B.Sc.", topics: [13, 9] },
    "Y25102001": { name: "Aanchal Shyamanand Jha", course: "B.Sc.", topics: [0, 12] },
    "Y25102002": { name: "Adity kumari", course: "B.Sc.", topics: [1, 13] },
    "Y25102003": { name: "Ananya Gautam", course: "B.Sc.", topics: [2, 0] },
    "Y25102005": { name: "Jashoda Bhoi", course: "B.Sc.", topics: [3, 1] },
    "Y25102006": { name: "Meghadri roy", course: "B.Sc.", topics: [4, 2] },
    "Y25102007": { name: "Panismita Bag", course: "B.Sc.", topics: [5, 3] },
    "Y25102008": { name: "Prasant devtalla", course: "B.Sc.", topics: [6, 4] },
    "Y25102009": { name: "Ripunjita Borah", course: "B.Sc.", topics: [7, 5] },
    "Y25102010": { name: "Rohini Baidh", course: "B.Sc.", topics: [8, 6] },
    "Y25102011": { name: "Rudraksh Chouhan", course: "B.Sc.", topics: [9, 7] },
    "Y25102012": { name: "Satyam Adiwashi", course: "B.Sc.", topics: [10, 8] },
    "Y25102013": { name: "Seemantni bisen", course: "B.Sc.", topics: [11, 9] },
    "Y25102014": { name: "Shivangi Sahu", course: "B.Sc.", topics: [12, 10] },
    "Y25102015": { name: "Shreya mourya", course: "B.Sc.", topics: [13, 11] },
    "Y25102016": { name: "Sonali Pani", course: "B.Sc.", topics: [0, 2] },
    "Y25102017": { name: "Suhani", course: "B.Sc.", topics: [1, 3] },
    "Y25102018": { name: "Tanisha Shilpi", course: "B.Sc.", topics: [2, 4] },
    "Y25102019": { name: "Abhay pratap singh lodhi", course: "B.Sc.", topics: [3, 5] },
    "Y25102020": { name: "Bhoomi Soni", course: "B.Sc.", topics: [4, 6] },
    "Y25102021": { name: "Shraddha Rajpoot", course: "B.Sc.", topics: [5, 7] },
    "Y25104006": { name: "Bindu shree das", course: "B.Sc.", topics: [6, 8] },
    "Y25104079": { name: "Shivam Jaiswal", course: "B.Sc.", topics: [7, 9] },
    "Y25105001": { name: "AMISHA KUMARI SHARMA", course: "B.Sc.", topics: [8, 10] },
    "Y25105002": { name: "Anjali suryavanshi", course: "B.Sc.", topics: [9, 11] },
    "Y25105003": { name: "Anshika Pandey", course: "B.Sc.", topics: [10, 12] },
    "Y25105004": { name: "Anuj Dwivedi", course: "B.Sc.", topics: [11, 13] },
    "Y25105005": { name: "ASHMI CHOUHAN", course: "B.Sc.", topics: [12, 0] },
    "Y25105006": { name: "Ayushi Jain", course: "B.Sc.", topics: [13, 1] },
    "Y25105007": { name: "Babloo kumar", course: "B.Sc.", topics: [0, 4] },
    "Y25105008": { name: "Divya patel", course: "B.Sc.", topics: [1, 5] },
    "Y25105009": { name: "Gopal Dinkar", course: "B.Sc.", topics: [2, 6] },
    "Y25105010": { name: "Hanshika kori", course: "B.Sc.", topics: [3, 7] },
    "Y25105011": { name: "Jahanvi Sour", course: "B.Sc.", topics: [4, 8] },
    "Y25105012": { name: "Kanchi soni", course: "B.Sc.", topics: [5, 9] },
    "Y25105014": { name: "Khushi Prasad", course: "B.Sc.", topics: [6, 10] },
    "Y25105015": { name: "Mamta Namdeo", course: "B.Sc.", topics: [7, 11] },
    "Y25105016": { name: "Nandini kurmi", course: "B.Sc.", topics: [8, 12] },
    "Y25105017": { name: "Neeraj Singh", course: "B.Sc.", topics: [9, 13] },
    "Y25105018": { name: "Payal Chourasia", course: "B.Sc.", topics: [10, 0] },
    "Y25105019": { name: "Poornima Dixit", course: "B.Sc.", topics: [11, 1] },
    "Y25105020": { name: "Priydarshni dubey", course: "B.Sc.", topics: [12, 2] },
    "Y25105021": { name: "Ragnee patel", course: "B.Sc.", topics: [13, 3] },
    "Y25105022": { name: "Rahiya Sheikh", course: "B.Sc.", topics: [0, 6] },
    "Y25105023": { name: "Rampal Ahirwar", course: "B.Sc.", topics: [1, 7] },
    "Y25105024": { name: "Sakshi Gautam", course: "B.Sc.", topics: [2, 8] },
    "Y25105026": { name: "Tanuja Tamada", course: "B.Sc.", topics: [3, 9] },
    "Y25105027": { name: "Tanuja chaurasia", course: "B.Sc.", topics: [4, 10] },
    "Y25105029": { name: "Vaibhav vishnoi", course: "B.Sc.", topics: [5, 11] },
    "Y25105031": { name: "Rohan Ahirwar", course: "B.Sc.", topics: [6, 12] },
    "Y25105032": { name: "Suhani Patel", course: "B.Sc.", topics: [7, 13] },
    "Y25106001": { name: "AANAND KUMAR", course: "B.Sc.", topics: [8, 0] },
    "Y25106002": { name: "Aavani M", course: "B.Sc.", topics: [9, 1] },
    "Y25106004": { name: "Aman Rathore", course: "B.Sc.", topics: [10, 2] },
    "Y25106005": { name: "Ambika dahayat", course: "B.Sc.", topics: [11, 3] },
    "Y25106006": { name: "Anjali Rai", course: "B.Sc.", topics: [12, 4] },
    "Y25106007": { name: "Ankita Patel", course: "B.Sc.", topics: [13, 5] },
    "Y25106008": { name: "Ankush kumar", course: "B.Sc.", topics: [0, 8] },
    "Y25106010": { name: "Arya Choubey", course: "B.Sc.", topics: [1, 9] },
    "Y25106011": { name: "Divyansh Suryavanshi", course: "B.Sc.", topics: [2, 10] },
    "Y25106012": { name: "Gaurav Patel", course: "B.Sc.", topics: [3, 11] },
    "Y25106013": { name: "Harshita Choubey", course: "B.Sc.", topics: [4, 12] },
    "Y25106014": { name: "Harshita Sahu", course: "B.Sc.", topics: [5, 13] },
    "Y25106015": { name: "Kaify Yusuf", course: "B.Sc.", topics: [6, 0] },
    "Y25106016": { name: "Kanchan", course: "B.Sc.", topics: [7, 1] },
    "Y25106017": { name: "KASHISH KUMARI", course: "B.Sc.", topics: [8, 2] },
    "Y25106018": { name: "KAUSHAL KUMAR", course: "B.Sc.", topics: [9, 3] },
    "Y25106019": { name: "Khushi Mishra", course: "B.Sc.", topics: [10, 4] },
    "Y25106020": { name: "Krishna yadav", course: "B.Sc.", topics: [11, 5] },
    "Y25106021": { name: "Lavanya Sharma", course: "B.Sc.", topics: [12, 6] },
    "Y25106022": { name: "Lavanya Singh", course: "B.Sc.", topics: [13, 7] },
    "Y25106023": { name: "Mahi Soni", course: "B.Sc.", topics: [0, 10] },
    "Y25106024": { name: "MENDKE SANDESH SADANAND", course: "B.Sc.", topics: [1, 11] },
    "Y25106026": { name: "Nandini mishra", course: "B.Sc.", topics: [2, 12] },
    "Y25106027": { name: "Nandni sharma", course: "B.Sc.", topics: [3, 13] },
    "Y25106028": { name: "PANKAJ SHAKYA", course: "B.Sc.", topics: [4, 0] },
    "Y25106029": { name: "Parth Rawat", course: "B.Sc.", topics: [5, 1] },
    "Y25106030": { name: "Rikansha yashona", course: "B.Sc.", topics: [6, 2] },
    "Y25106031": { name: "Riya kumari", course: "B.Sc.", topics: [7, 3] },
    "Y25106034": { name: "Shalini rawat", course: "B.Sc.", topics: [8, 4] },
    "Y25106035": { name: "Shambhavi Tiwari", course: "B.Sc.", topics: [9, 5] },
    "Y25106036": { name: "Sneha Thakur", course: "B.Sc.", topics: [10, 6] },
    "Y25106037": { name: "Sudipta acharjee", course: "B.Sc.", topics: [11, 7] },
    "Y25106038": { name: "Suneet kaur", course: "B.Sc.", topics: [12, 8] },
    "Y25106039": { name: "Tanishq Sharma", course: "B.Sc.", topics: [13, 9] },
    "Y25106040": { name: "Tushar", course: "B.Sc.", topics: [0, 12] },
    "Y25106042": { name: "Vranda Chourasiya", course: "B.Sc.", topics: [1, 13] },
    "Y25106043": { name: "Mukti Jeswani", course: "B.Sc.", topics: [2, 0] },
    "Y25106045": { name: "Saksham jain", course: "B.Sc.", topics: [3, 1] },
    "Y25106047": { name: "Catherin Joy", course: "B.Sc.", topics: [4, 2] },
    "Y25109001": { name: "Aaradhna paul", course: "B.Sc.", topics: [5, 3] },
    "Y25109002": { name: "Janvi Ahirwar", course: "B.Sc.", topics: [6, 4] },
    "Y25109003": { name: "Kanak Chouksey", course: "B.Sc.", topics: [7, 5] },
    "Y25109004": { name: "Monica pandey", course: "B.Sc.", topics: [8, 6] },
    "Y25109007": { name: "Ragini badholiya", course: "B.Sc.", topics: [9, 7] },
    "Y25109008": { name: "Sakshi", course: "B.Sc.", topics: [10, 8] },
    "Y25109009": { name: "Shradha raikwar", course: "B.Sc.", topics: [11, 9] },
    "Y25109010": { name: "SNEHA KUMARI", course: "B.Sc.", topics: [12, 10] },
    "Y25109012": { name: "KHUSHUBU JAISWAL", course: "B.Sc.", topics: [13, 11] },
    "Y25109013": { name: "Mahak Burman", course: "B.Sc.", topics: [0, 1] },
    "Y25109014": { name: "Nainsi soni", course: "B.Sc.", topics: [2, 3] },
    "Y25109015": { name: "Poonam Dixit", course: "B.Sc.", topics: [4, 5] },
    "Y25109016": { name: "Shraddha Singh thakur", course: "B.Sc.", topics: [6, 7] },
    "Y25109019": { name: "Tejaswani patel", course: "B.Sc.", topics: [8, 9] },
    "Y25109021": { name: "Surbhi Dubey", course: "B.Sc.", topics: [10, 11] }
};

let currentStudentId = "";
let currentStudentName = "";

function getDeviceData() {
    return {
        device: navigator.userAgent,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
}

// Auto-capitalize enrollment box input
document.getElementById('enrollment-input').addEventListener('input', function() {
    this.value = this.value.toUpperCase().replace(/\s/g, '');
});

// Restrict mobile input to numeric only
document.getElementById('reg-mobile').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
});

// ==========================================
// 4. LOGIN LOGIC
// ==========================================
document.getElementById('generate-btn').addEventListener('click', () => {
    handleAccessHub();
});

document.getElementById('enrollment-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleAccessHub();
});

function handleAccessHub() {
    const enrollment = document.getElementById('enrollment-input').value.trim().toUpperCase();
    if (!enrollment) return;

    currentStudentId = enrollment;
    const student = studentDB[enrollment];
    
    document.getElementById('landing-card').classList.add('hidden');
    
    if (student) {
        currentStudentName = student.name;
        displayResults(student.name, enrollment, student.course, student.topics);
        if (supabaseClient) performBackgroundTracking(enrollment, 'login');
    } else {
        document.getElementById('reg-enrollment').value = enrollment;
        document.getElementById('registration-card').classList.remove('hidden');
    }
}

// ==========================================
// 5. REGISTRATION FORM LOGIC
// ==========================================
document.getElementById('submit-reg-btn').addEventListener('click', async () => {
    const name = document.getElementById('reg-name').value.trim();
    const course = document.getElementById('reg-course').value;
    const enrollment = document.getElementById('reg-enrollment').value.trim();
    const father = document.getElementById('reg-father').value.trim();
    const mobile = document.getElementById('reg-mobile').value.trim();
    const combination = document.getElementById('reg-combination').value.trim();
    const address = document.getElementById('reg-address').value.trim();
    const errorMsg = document.getElementById('reg-error-msg');

    if (!name || !course || !father || !mobile || !combination || !address) {
        errorMsg.innerText = "⚠️ Please fill in all required fields.";
        errorMsg.classList.remove('hidden');
        return;
    }

    if (mobile.length !== 10) {
        errorMsg.innerText = "⚠️ Mobile number must be exactly 10 digits.";
        errorMsg.classList.remove('hidden');
        return;
    }
    
    errorMsg.classList.add('hidden');
    const btn = document.getElementById('submit-reg-btn');
    btn.disabled = true;
    btn.innerText = "Generating Topics & Registering...";

    currentStudentName = name;

    let topic1 = Math.floor(Math.random() * assignmentTopics.length);
    let topic2;
    do { 
        topic2 = Math.floor(Math.random() * assignmentTopics.length); 
    } while (topic1 === topic2);
    
    const assignedTopics = [topic1, topic2];

    if (supabaseClient) {
        try {
            await supabaseClient.from('unregistered_students').insert([{
                enrollment_no: enrollment,
                full_name: name,
                course: course,
                fathers_name: father,
                mobile_no: mobile,
                combination: combination,
                address: address,
                assigned_topics: assignedTopics.map(i => assignmentTopics[i].title).join(' | ')
            }]);
            performBackgroundTracking(enrollment, 'new_registration');
        } catch (e) {
            console.warn("Database insert issue:", e);
        }
    }

    document.getElementById('registration-card').classList.add('hidden');
    displayResults(name, enrollment, course, assignedTopics);
});

// ==========================================
// 6. DISPLAY RESULTS LOGIC
// ==========================================
function displayResults(name, enrollment, course, topicsArray) {
    document.getElementById('student-name-display').innerText = `Welcome, ${name}`;
    document.getElementById('student-details-display').innerText = `Course: ${course} | Enrollment: ${enrollment}`;
    
    const listDiv = document.getElementById('topic-list');
    let topicsHTML = "";
    topicsArray.forEach(index => {
        let topicObj = assignmentTopics[index];
        if (topicObj) {
            topicsHTML += `
                <div class="book-item">
                    <div class="book-title">${topicObj.title}</div>
                </div>`;
        }
    });
    listDiv.innerHTML = topicsHTML;
    
    document.getElementById('results-area').classList.remove('hidden');
    setTimeout(() => { 
        document.getElementById('watermark').classList.remove('hidden'); 
    }, 500);
}

// ==========================================
// 7. BACKGROUND TELEMETRY
// ==========================================
async function performBackgroundTracking(enrollment, actionType) {
    const { device, timezone } = getDeviceData();
    try {
        await supabaseClient.from('tracking').insert([
            { enrollment_no: enrollment, action: actionType, device: device, timezone: timezone }
        ]);
    } catch (e) {}
}

// ==========================================
// 8. DYNAMIC WHATSAPP & GAME FLOATING BUTTONS
// ==========================================
document.getElementById('wa-help-btn').addEventListener('click', function(e) {
    e.preventDefault(); 
    
    if (supabaseClient) performBackgroundTracking(currentStudentId || 'unregistered', 'whatsapp');
    
    let message = "";
    if (currentStudentId && currentStudentName) {
        // Authenticated / Logged in student
        message = `Hi Ritik, I am ${currentStudentName} (${currentStudentId}), and I need help with the ANT-DSM-311 assignment.`;
    } else {
        // Unauthenticated / Landing screen
        message = `Hey, I am facing a problem accessing the assignment hub. Here is my issue: `;
    }

    const waUrl = `https://wa.me/918986937029?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
});

document.getElementById('game-btn').addEventListener('click', function(e) {
    e.preventDefault(); 
    if (supabaseClient) performBackgroundTracking(currentStudentId || 'unregistered', 'game');
    window.open('https://ritikspin.onrender.com', '_blank');
});