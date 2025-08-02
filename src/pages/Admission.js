import React from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  return (
    <div className="admission-container py-5 text-light">
      <h2 className="text-center mb-4 fw-bold text-neon">📌 Admission Open 📌</h2>

      <p className="fs-5">
        श्री त्रिलोक भारती पब्लिक सीनियर सेकेंडरी स्कूल में नर्सरी से कक्षा
        12वीं तक के लिए प्रवेश खुले हैं। हमारा उद्देश्य ग्रामीण क्षेत्र के
        छात्रों को गुणवत्ता पूर्ण शिक्षा प्रदान करना है। विद्यालय का माहौल
        अनुशासन, नैतिकता और तकनीकी शिक्षा पर आधारित है।
      </p>

      {/* Fee Structure */}
      <div className="container fee-section fade-in mt-5">
        <div className="rounded-4 shadow-lg p-4 glass-box">
          <h2 className="text-glow mb-4">💰 शुल्क संरचना (Fee Structure)</h2>
          <div className="table-responsive">
            <table className="table table-dark table-bordered table-hover fee-table">
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Admission Fee</th>
                  <th>Monthly Fee</th>
                  <th>Annual Charges (Per 3 Month)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nursery - UKG</td>
                  <td>₹6,300</td>
                  <td>₹600</td>
                  <td>₹1,350</td>
                </tr>
                <tr>
                  <td>Class 1–2</td>
                  <td>₹7,500</td>
                  <td>₹700</td>
                  <td>₹1,900</td>
                </tr>
                <tr>
                  <td>Class 3–4</td>
                  <td>₹7,700</td>
                  <td>₹7,50</td>
                  <td>₹2,000</td>
                </tr>
                <tr>
                  <td>Class 5 </td>
                  <td>₹7,900</td>
                  <td>₹7,70</td>
                  <td>₹2,100</td>
                </tr>
                <tr>
                  <td>Class 6-7</td>
                  <td>₹8,000</td>
                  <td>₹8,00</td>
                  <td>₹2,200</td>
                </tr>
                <tr>
                  <td>Class 8 </td>
                  <td>₹8,100</td>
                  <td>₹8,30</td>
                  <td>₹2,300</td>
                </tr>
                <tr>
                  <td>Class 9</td>
                  <td>₹10,100</td>
                  <td>₹1,000</td>
                  <td>₹2,950</td>
                </tr>
                <tr>
                  <td>Class 10 </td>
                  <td>₹12,100</td>
                  <td>₹1,200</td>
                  <td>₹3,350</td>
                </tr>
                <tr>
                  <td>Class 11</td>
                  <td>₹10,700</td>
                  <td>₹1,300</td>
                  <td>₹3,500</td>
                </tr>
                <tr>
                  <td>Class 12</td>
                  <td>₹14,400</td>
                  <td>₹1,500</td>
                  <td>₹4,100</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-warning mt-3 fst-italic">
            💡 <strong>Note:</strong> Fee may vary based on stream
            (Science/Arts/Commerce) and optional subjects. 
          </p>
        </div>
      </div>

      <div className="rte-box rounded shadow p-4 mt-5 glass-box">
        <h4 className="text-glow mb-3">🎓 आरटीई (RTE) सुविधा</h4>
        <p className="fs-5">
          श्री त्रिलोक भारती पब्लिक सीनियर सेकेंडरी स्कूल में आरटीई (Right to
          Education) के अंतर्गत पात्र छात्रों को निःशुल्क शिक्षा की सुविधा
          प्रदान की जाती है। आरटीई के तहत, कक्षा नर्सरी या पहली कक्षा में 25%
          सीटें आर्थिक रूप से कमजोर वर्ग (EWS) और वंचित वर्ग के छात्रों के लिए
          आरक्षित होती हैं।
        </p>
        <ul>
          <li>✅ निःशुल्क शिक्षा कक्षा 1 से 12 तक</li>
          <li>
            ✅ पात्रता – आय प्रमाण पत्र, जाति प्रमाण पत्र, निवास प्रमाण पत्र
          </li>
          <li>✅ आवेदन RTE पोर्टल के माध्यम से ऑनलाइन</li>
          <li>✅ प्रवेश प्रक्रिया फरवरी – अप्रैल के बीच</li>
        </ul>
        <p className="mt-3 text-warning fst-italic">
          📌 अधिक जानकारी के लिए राज्य की RTE वेबसाइट या विद्यालय कार्यालय से
          संपर्क करें।
        </p>
      </div>

      {/* Eligibility Criteria */}
      <div className="highlight-box mt-5 p-4 rounded shadow glass-box">
        <h4 className="text-glow mb-3">
          ✅ प्रवेश के लिए योग्यता (Eligibility Criteria)
        </h4>
        <ul>
          <li>नर्सरी – न्यूनतम आयु: 3+ वर्ष</li>
          <li>कक्षा 1 और उससे ऊपर – पिछले स्कूल का ट्रांसफर सर्टिफिकेट (TC)</li>
          <li>कक्षा 11 के लिए – कक्षा 10 की मार्कशीट और स्ट्रीम चयन</li>
        </ul>
      </div>

      {/* Documents Required */}
      <div className="highlight-box mt-4 p-4 rounded shadow glass-box">
        <h4 className="text-glow mb-3">
          📄 आवश्यक दस्तावेज़ (Documents Required)
        </h4>
        <ul>
          <li>जन्म प्रमाण पत्र (Nursery से Class 1 के लिए)</li>
          <li>आधार कार्ड (छात्र और अभिभावक दोनों का)</li>
          <li>पासपोर्ट साइज फोटो – 2</li>
          <li>ट्रांसफर सर्टिफिकेट [TC] (यदि लागू हो)</li>
          <li>पिछली कक्षा की मार्कशीट</li>
          <li>जाति प्रमाण पत्र (यदि लागू हो)</li>
          <li>राशि का भुगतान रसीद (Admission Fee)</li>
        </ul>
      </div>

      {/* Admission Process Steps */}
      <div className="highlight-box mt-4 p-4 rounded shadow glass-box">
        <h4 className="text-glow mb-3">
          📝 प्रवेश प्रक्रिया (Admission Process)
        </h4>
        <ol>
          <li>
            विद्यालय कार्यालय में आएं या वेबसाइट के माध्यम से ऑनलाइन आवेदन करें।
          </li>
          <li>एडमिशन फॉर्म भरें और सभी आवश्यक दस्तावेज जमा करें।</li>
          <li>एडमिशन और रजिस्ट्रेशन फीस का भुगतान करें।</li>
          <li>कक्षा 1 और ऊपर के लिए एक छोटी इंटरव्यू या टेस्ट दें।</li>
          <li>प्रवेश की पुष्टि और ID कार्ड तथा पुस्तकें प्राप्त करें।</li>
        </ol>
      </div>

      {/* Why Choose Us */}
      <div className="highlight-box p-4 rounded shadow text-right text-light mt-4">
        <h4 className="mb-3">⭐ Why Choose Us</h4>
        <ul className="list-unstyled fs-5">
          <li>✅ अनुभवी शिक्षक (Experience Teachers)</li>
          <li>✅ किफायती शुल्क संरचना (Fee Structure) </li>
          <li>✅ डिजिटल कक्षा और CCTV निगरानी</li>
          <li>✅ करियर गाइडेंस और पुस्तकालय सुविधा</li>
          <li>✅ सुरक्षित परिवहन और स्वच्छ वातावरण</li>
          <li>✅ वार्षिक खेलकूद और सांस्कृतिक कार्यक्रम</li>
          <li>✅ छात्रवृत्ति और आर्थिक सहायता उपलब्ध</li>
          <li>✅ माता-पिता की बैठकें और प्रगति रिपोर्ट</li>
          <li>✅ स्वास्थ्य जांच और मानसिक स्वास्थ्य समर्थन</li>
          <li>✅ ऑनलाइन कक्षाएं और ई-लर्निंग संसाधन</li>
          <li>✅ छात्र परिषद और नेतृत्व विकास</li>
          <li>✅ विशेष जरूरतों वाले छात्रों के लिए सहायता</li>
        </ul>
      </div>

      {/* Apply Button */}
      <p className="fs-5 mt-4">
        अधिक जानकारी के लिए, आप हमारे Contact Us पेज पर जाकर विद्यालय से सीधे
        संपर्क कर सकते हैं या नीचे दिए गए बटन पर क्लिक करके Online Admission
        form भर सकते हैं।
      </p>
      <div className="text-center mt-4">
        <Link
          to="/admission-form"
          className="btn btn-lg btn-warning px-4 py-2 fw-bold shadow"
        >
          📝 Apply for Admission
        </Link>
      </div>
    </div>
  );
};

export default Admission;
