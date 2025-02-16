import React from 'react';
import Header from '../../components/layouts/Header/Header';
import Footer from "../../components/layouts/Footer/Footer";
import './faq-page.css';

const FAQPage = () => {
  const faqs = [
    { question: 'How do I sign up?', answer: 'Click on the sign-up button at the top right and fill in your details.' },
    { question: 'How do I post a task?', answer: 'Go to the "Post a Task" page and fill in the task details.' },
    { question: 'How do I get paid?', answer: 'Payments are processed through secure payment gateways.' },
  ];

  return (
    <div className="main-container">
     {/* Header Component */}
     <Header />                                                             
    <div className="faq-container">
      <header className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <input type="text" placeholder="Search FAQs" className="search-input" />
      </header>

      <section className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>
    </div>
     {/* Footer Component */}
     <Footer />
    </div>
  );
}

export default FAQPage;
