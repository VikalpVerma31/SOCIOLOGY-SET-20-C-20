const questions = [
    {
        question:"वर्ग स्तरीकरण में कौन-सा वर्ग सामान्यतया सुसंगठित नहीं है ?",
        answers: [
            { text: "अभिजन", correct: false},
            { text: "उच्च वर्ग", correct: false},
            { text: "मध्यम वर्ग", correct: true},
            { text: "निम्न वर्ग", correct: false},
        ] 
    },

    {
        question:"हबर्ट स्पेन्सर का जन्म कहाँ हुआ था ?",
        answers: [
            { text: "अमेरिका", correct: false},
            { text: "जर्मनी", correct: false},
            { text: "फ्रांस", correct: false},
            { text: "इंग्लैंड", correct: true},
        ] 
    },

    {
        question:"'The Society' पुस्तक के लेखक कौन हैं ?",
        answers: [
            { text: "मैकाइवर एवं पेज", correct: true},
            { text: "पैरेटो", correct: false},
            { text: "जॉनसन", correct: false},
            { text: "डेविस", correct: false},
        ] 
    },

    {
        question:"तर्क प्रभावित समाजशास्त्र को जन्म देने वाले विद्वान निम्न में से कौन है ?",
        answers: [
            { text: "थाम्स एक्वीनास", correct: true},
            { text: "लौके", correct: false},
            { text: "हॉब्स", correct: false},
            { text: "रूसो", correct: false},
        ] 
    },

    {
        question:"'समाजशास्त्र सामाजिक संबंधों के स्वरूपों का अध्ययन' यह कथन किसका है ?",
        answers: [
            { text: "गिन्सबर्ग", correct: false},
            { text: "सिमेल", correct: true},
            { text: "वेबर", correct: false},
            { text: "दुर्खीम", correct: false},
        ] 
    },

    {
        question:"नाक की बनावट के आधार पर प्रजाति का निर्धारण किसने किया है ?",
        answers: [
            { text: "हर्बट रिजले", correct: true},
            { text: "बेहन", correct: false},
            { text: "मजूमदार", correct: false},
            { text: "नीग्रो", correct: false},
        ] 
    },

    {
        question:"किसने भारतीय प्रजातियों को छः भागों में बाँट है?",
        answers: [
            { text: "बोहन", correct: false},
            { text: "पारसन्स", correct: false},
            { text: "हट्टन", correct: true},
            { text: "नीग्रो", correct: false},
        ] 
    },

    {
        question:"रॉबर्ट रेडफील्ड ने निम्नलिखित में से किसे लघु समुदाय की विशेषता माना है ?",
        answers: [
            { text: "लघुता", correct: false},
            { text: "विशिष्टता", correct: false},
            { text: "आत्म-निर्भरता", correct: false},
            { text: "उपर्युक्त सभी", correct: true},
        ] 
    },

    {
        question:"एक समिति एक समुदाय नहीं है, परन्तु एक समुदाय में एक संगठन है। यह कथन निम्नलिखित में से क्या है ?",
        answers: [
            { text: "सत्य कथन", correct: true},
            { text: "असत्य कथन", correct: false},
            { text: "जानता नहीं", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"यह किसका मत था कि 'क्रान्तियाँ इतिहास की वाहक है' ?",
        answers: [
            { text: "ई कापट", correct: false},
            { text: "कार्ल मार्क्स", correct: true},
            { text: "हीगल", correct: false},
            { text: "एंजिल्स", correct: false},
        ] 
    },

    {
        question:"व्याख्यात्मक समाजशास्त्र से किसका नाम सम्बद्ध है?",
        answers: [
            { text: "मैक्स वेबर", correct: true},
            { text: "इमाइल दुखाम", correct: false},
            { text: "जी. सीमेल", correct: false},
            { text: "वलकॉट पारसन्स", correct: false},
        ] 
    },

    {
        question:"निम्न में से कौन संस्कृति का अंग नहीं है ?",
        answers: [
            { text: "पॉप संगीत", correct: false},
            { text: "पंडित रविशंकर का सितारवादन", correct: true},
            { text: "कलात्मक फिल्में", correct: false},
            { text: "कोलकाता का स्टॉक एक्सचेंज", correct: false},
        ] 
    },

    {
        question:"संस्कृति की निम्नांकित कौन-सी विशेषता नहीं है?",
        answers: [
            { text: "हस्तांतरणशील", correct: false},
            { text: "सीखा हुआ व्यवहार", correct: false},
            { text: "आदर्शात्मक", correct: false},
            { text: "अविरन्तरता", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से किन्हें सामाजिक 'मानवशास्त्र का प्रणेता' कहा जाता है ?",
        answers: [
            { text: "नाडेल", correct: false},
            { text: "पारसन्स", correct: false},
            { text: "रेडिक्लिप ब्राउन", correct: true},
            { text: "मजूमदार", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से किसने अपनी पुस्तक 'पॉलिटिक्स' में परिस्थिति एवं भूमिका शब्द का प्रयोग किया था ?",
        answers: [
            { text: "लिण्टन", correct: false},
            { text: "अरस्तू", correct: true},
            { text: "निमकॉफ", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"समाजशास्त्र में संस्कृति शब्द को कहाँ से लिया गया है ?",
        answers: [
            { text: "मानवशास्त्र", correct: true},
            { text: "राजनीतिशास्त्र", correct: false},
            { text: "शिक्षाशास्त्र", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"आजकल अधिकांश आर्थिक लेनदेन किस माध्यम से तेजी से किया जाता है ?",
        answers: [
            { text: "मनी आर्डर", correct: false},
            { text: "पे फोन", correct: false},
            { text: "सामाजिक नेटवर्क", correct: true},
            { text: "स्मार्टफोन", correct: false},
        ] 
    },

    {
        question:"व्यक्तित्व का सामाजिक आधार निम्न में से कौन-सा है?",
        answers: [
            { text: "परिवार", correct: false},
            { text: "स्कूल", correct: false},
            { text: "सामाजिक", correct: false},
            { text: "स्नायु-मंडल", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से किसने सम्पूर्ण सामाजिक परम्परा को संस्कृति माना है ?",
        answers: [
            { text: "लोवी", correct: true},
            { text: "क्रोबर", correct: false},
            { text: "कूले", correct: false},
            { text: "शिक्षा", correct: false},
        ] 
    },

    {
        question:"संस्कृति का वाहक निम्न में से कौन है ?",
        answers: [
            { text: "भाषा", correct: false},
            { text: "प्रतीक", correct: false},
            { text: "व्यक्ति", correct: false},
            { text: "उपर्युक्त सभी", correct: true},
        ] 
    },

    {
        question:"भूमिका वंचना के प्रतिपादक हैं-",
        answers: [
            { text: "मीड", correct: false},
            { text: "पारसन्स", correct: false},
            { text: "गॉफमैन", correct: false},
            { text: "जॉन पियाजे", correct: true},
        ] 
    },

    {
        question:"प्रदत्त परिस्थिति का निर्धारण किसके आधार पर होता है ?",
        answers: [
            { text: "शैक्षणिक योग्यता", correct: false},
            { text: "आर्थिक दशा", correct: false},
            { text: "राजनीतिक दशा", correct: false},
            { text: "सामाजिक एवं सांस्कृतिक मूल्य", correct: true},
        ] 
    },

    {
        question:"नगरीय समुदाय की विशेषता है",
        answers: [
            { text: "श्रम विभाजन", correct: false},
            { text: "गतिशीलता", correct: false},
            { text: "आर्थिक विषमता", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"'दी रूरल कम्युनिटी' कौन हैं ? नामक पुस्तक के लेखक",
        answers: [
            { text: "डी. सेण्डरसन", correct: true},
            { text: "श्रीवास्तव", correct: false},
            { text: "फेयर चाइल्ड", correct: false},
            { text: "चिताम्बरम्", correct: false},
        ] 
    },

    {
        question:"'गार्डन सिटीज ऑफ इमारो' के लेखक कौन हैं ?",
        answers: [
            { text: "डेविस", correct: false},
            { text: "थॉमस मूर", correct: false},
            { text: "एवेनजर हॉवर्ड", correct: true},
            { text: "सेण्डरसन", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन समिति है ?",
        answers: [
            { text: "ट्रेड यूनियन", correct: false},
            { text: "टेनिस क्लब", correct: false},
            { text: "राज्य", correct: false},
            { text: "उपर्युक्त सभी", correct: true},
        ] 
    },

    {
        question:"किसी की एजेन्सी किसी के किस पर कार्य करने की स्वतंत्र क्षमता है ?",
        answers: [
            { text: "इच्छा पर", correct: true},
            { text: "विवेक पर", correct: false},
            { text: "कानून पर", correct: false},
            { text: "अनिर्णय पर", correct: false},
        ] 
    },

    {
        question:"मुस्लिम परिवार के संस्कार हैं -",
        answers: [
            { text: "सतवां", correct: false},
            { text: "अफ्रीका", correct: false},
            { text: "चिल्ला", correct: false},
            { text: "उपर्युक्त सभी", correct: true},
        ] 
    },

    {
        question:"दुर्खीम ने आत्महत्या को किस प्रकार की घटना माना है ?",
        answers: [
            { text: "सामाजिक", correct: false},
            { text: "व्यक्तिगत", correct: true},
            { text: "तनाव", correct: false},
            { text: "पारिवारिक", correct: false},
        ] 
    },

    {
        question:"वेबर ने 'आदर्श विधि' को किस तरह की अवध ारणा बताया है ?",
        answers: [
            { text: "सामाजिक", correct: false},
            { text: "नैतिक", correct: false},
            { text: "सांस्कृतिक", correct: false},
            { text: "मानसिक", correct: true},
        ] 
    },

    {
        question:"'समाज का प्रकार्यवादी सिद्धांत' सबसे पहले किसमें विकसित हुआ ?",
        answers: [
            { text: "मानवशास्त्र", correct: true},
            { text: "समाजशास्त्र", correct: false},
            { text: "सामाजिक मानवशास्त्र", correct: false},
            { text: "नृतत्वीय समाजशास्त्र", correct: false},
        ] 
    },

    {
        question:"किसने इंगित किया था कि नगरीय अभिवृद्धि चक्रीय पथ की अनुगामी होती है ?",
        answers: [
            { text: "एम.एस.ए. राव", correct: false},
            { text: "बर्गेस", correct: false},
            { text: "पार्क", correct: true},
            { text: "पी. मीड्स", correct: false},
        ] 
    },

    {
        question:"'अब तक के ज्ञात समाज का इतिहास केवल वर्ग संघर्ष का इतिहास है।' यह कथन किसका है?",
        answers: [
            { text: "प्लेटो", correct: false},
            { text: "लॉक", correct: false},
            { text: "लेनिन", correct: false},
            { text: "मार्क्स", correct: true},
        ] 
    },

    {
        question:"'समाज सामाजिक संबंधों का जाल है।' यह कथन किसका है ?",
        answers: [
            { text: "मैवाइवर तथा पेज", correct: false},
            { text: "टी.बी. बोटोमोर", correct: true},
            { text: "ए. आर. देसाई", correct: false},
            { text: "के. डेविस", correct: false},
        ] 
    },

    {
        question:"जनसंख्या संबंधी अध्ययनों में कौन सी पद्धति अधिक उपयोगी होती है ?",
        answers: [
            { text: "ऐतिहासिक", correct: false},
            { text: "सांख्यिकीय", correct: false},
            { text: "आगमन", correct: true},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"संयुक्त परिवार के लक्षण हैं",
        answers: [
            { text: "सीमित परिवार", correct: false},
            { text: "पंरपरा", correct: false},
            { text: "आत्मीयता", correct: false},
            { text: "कम से कम तीन पीढ़ियों का एक साथ रहना", correct: true},
        ] 
    },

    {
        question:"सामाजिक परिवर्तन के संघर्षात्मक संदेश के प्रणेता कौन हैं ?",
        answers: [
            { text: "डेविस", correct: false},
            { text: "पारसंस", correct: false},
            { text: "कोजर", correct: true},
            { text: "मास्का", correct: false},
        ] 
    },

    {
        question:"सभी प्रकार के मानवीय व्यवहार समाजशास्त्र के अध्ययन क्षेत्र में नहीं आते हैं ?",
        answers: [
            { text: "सत्य", correct: false},
            { text: "असत्य", correct: false},
            { text: "आशिक सत्य", correct: false},
            { text: "ज्ञात नहीं", correct: true},
        ] 
    },

    {
        question:"विश्व की समस्त प्रजातियाँ तीन भागों में बँटी है काके स्वाद मंगोलायड एवं नीग्रोयड -",
        answers: [
            { text: "ए., एल. क्रांवर", correct: false},
            { text: "फ्रंज बो आज", correct: false},
            { text: "ई. बी. वयलर", correct: false},
            { text: "एल. एच. मॉरगेन", correct: true},
        ] 
    },

    {
        question:"व्याख्यात्मक समाजशास्त्र से किसका नाम सम्बद्ध है ?",
        answers: [
            { text: "मैक्स वेबर", correct: true},
            { text: "कार्ल मार्क्स", correct: false},
            { text: "जी सिमेल", correct: false},
            { text: "टालकॉट पारसन्स", correct: false},
        ] 
    },

    {
        question:"किस समाजशास्त्री ने मानवशास्त्र एवं समाजशास्त्र को जुड़वा बहन माना है ?",
        answers: [
            { text: "क्रोवर", correct: true},
            { text: "काम्ते", correct: false},
            { text: "बेकर", correct: false},
            { text: "सोरोकिन", correct: false},
        ] 
    },

    {
        question:"भारतीय गांवों की सामाजिक संरचना का अध्ययन करने वाले प्रमुख विद्वान हैं",
        answers: [
            { text: "श्याम चरण दुबे", correct: true},
            { text: "टी. के. ओमन", correct: false},
            { text: "विक्टर डिसूजा", correct: false},
            { text: "वाई. सिंह", correct: false},
        ] 
    },

    {
        question:"भारत का सबसे बड़ा शहर कौन-सा है ?",
        answers: [
            { text: "दिल्ली", correct: true},
            { text: "मुम्बई", correct: false},
            { text: "मद्रास", correct: false},
            { text: "कलकता", correct: false},
        ] 
    },

    {
        question:"भारतीय गांव को अविभेदीय, स्थिर और परिवर्तन रहित, इकाई की संज्ञा किसने दी -",
        answers: [
            { text: "मैन", correct: true},
            { text: "मार्क्स", correct: false},
            { text: "मुनरो", correct: false},
            { text: "मेटकॉफ", correct: false},
        ] 
    },

    {
        question:"निम्न में से कौन-सी सामाजिक भावनाओं का बच्चों में प्रारंभिक बाल्यवस्था में होता है ?",
        answers: [
            { text: "झगड़ने की", correct: false},
            { text: "सहानुभूति की", correct: false},
            { text: "सहयोग की", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"'मोपला विद्रोह' कब हुआ ?",
        answers: [
            { text: "जुलाई, 1903", correct: false},
            { text: "जुलाई, 1921", correct: false},
            { text: "अगस्त, 1919", correct: false},
            { text: "अगस्त, 1921", correct: true},
        ] 
    },

    {
        question:"जाति की उत्पत्ति से प्रजातीय सिद्धांत का प्रतिपादन किया गया था ",
        answers: [
            { text: "घुरिये", correct: false},
            { text: "रिजले", correct: true},
            { text: "हट्टन", correct: false},
            { text: "श्रीनिवास", correct: false},
        ] 
    },

    {
        question:"निम्न में से एक कौन प्राचीन समय में ही नगर रूप में स्थित था ?",
        answers: [
            { text: "उज्जैन", correct: false},
            { text: "कन्नौज", correct: false},
            { text: "नालन्दा", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"गन्दी बस्तियों के उदय का कारण है ?",
        answers: [
            { text: "औद्योगिकीकरण", correct: true},
            { text: "सांस्कृतिकरण", correct: false},
            { text: "भौगोलिकीकरण", correct: false},
            { text: "राष्ट्रीयकरण", correct: false},
        ] 
    },

    {
        question:"सबसे अधिक अनुसूचित जातियों के शोषण के विरूद्ध कानूनी मामले कहाँ दर्ज होते हैं ?",
        answers: [
            { text: "महाराष्ट्र", correct: false},
            { text: "बिहार", correct: false},
            { text: "आसाम", correct: false},
            { text: "उत्तर प्रदेश", correct: true},
        ] 
    },





];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "start quiz again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 