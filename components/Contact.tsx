
import React, { useState, useEffect } from 'react';
import { Language } from '../types';

const Contact: React.FC<{ lang: Language }> = ({ lang }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  // Substituir por: geral@solfil.pt ou o email oficial da empresa
  const COMPANY_EMAIL = 'tpacheco@aorubro.pt';

  const translations = {
    PT: {
      tag: 'CONTACTE-NOS',
      title1: 'VAMOS CONSTRUIR',
      title2: 'ALGO GRANDE',
      p: 'Tem um projeto em mãos ou precisa de aconselhamento técnico? A nossa equipa de especialistas está pronta para ajudar.',
      successTitle: 'Mensagem Enviada!',
      successDesc: 'Agradecemos o seu contacto. O seu pedido foi enviado com sucesso para a nossa equipa. Responderemos o mais brevemente possível.',
      successBtn: 'Enviar nova mensagem',
      labelName: 'Nome Completo*',
      labelEmail: 'E-mail*',
      labelPhone: 'Contacto Telefónico*',
      labelType: 'Tipo de Cliente',
      labelMsg: 'Mensagem / Lista de Materiais',
      submit: 'ENVIAR MENSAGEM',
      submitting: 'A ENVIAR...',
      error: 'Erro no envio. Verifique a sua ligação ou tente mais tarde.',
      types: ['Empresa / Profissional', 'Particular', 'Arquiteto / Projetista']
    },
    EN: {
      tag: 'CONTACT US',
      title1: "LET'S BUILD",
      title2: 'SOMETHING GREAT',
      p: 'Do you have a project or need technical advice? Our team of specialists is ready to help.',
      successTitle: 'Message Sent!',
      successDesc: 'Thank you for contacting us. Your request has been sent successfully to our team. We will respond as soon as possible.',
      successBtn: 'Send another message',
      labelName: 'Full Name*',
      labelEmail: 'Email*',
      labelPhone: 'Phone Number*',
      labelType: 'Client Type',
      labelMsg: 'Message / Material List',
      submit: 'SEND MESSAGE',
      submitting: 'SENDING...',
      error: 'Sending error. Please check your connection or try again later.',
      types: ['Company / Professional', 'Private Individual', 'Architect / Designer']
    }
  };

  const t = translations[lang];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clientType: '',
    message: ''
  });

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      clientType: translations[lang].types[0]
    }));
  }, [lang]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // FormSubmit AJAX endpoint
      const response = await fetch(`https://formsubmit.co/ajax/${COMPANY_EMAIL}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json' 
        },
        body: JSON.stringify({ 
          ...formData, 
          _subject: `Solicitação Website Solfil: ${formData.name}`,
          _captcha: "false" // Obrigatório falso para envios via AJAX
        })
      });
      
      const result = await response.json();
      
      if (response.ok && (result.success === "true" || result.success === true)) {
        setStatus('success');
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          clientType: t.types[0], 
          message: '' 
        });
      } else {
        throw new Error('Falha no serviço');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl shadow-solfil-black/5 border border-gray-100">
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="p-6 sm:p-10 md:p-16 lg:p-20">
            <div className="max-w-xl mx-auto lg:mx-0">
              <h3 className="text-solfil-orange font-black tracking-[0.4em] text-[10px] mb-4 uppercase">{t.tag}</h3>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 uppercase text-solfil-black tracking-tighter leading-[1.1]">
                {t.title1}<br /><span className="font-semibold italic">{t.title2}</span><span className="font-bold text-solfil-orange">.</span>
              </h2>
              
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-100 p-8 rounded-[32px] animate-in zoom-in duration-500 text-center">
                  <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-2 uppercase tracking-tight">{t.successTitle}</h3>
                  <p className="text-green-700 font-normal leading-relaxed mb-8 text-sm">{t.successDesc}</p>
                  <button 
                    onClick={() => setStatus('idle')} 
                    className="w-full py-4 bg-green-600 text-white rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-green-700 transition-all active:scale-95 shadow-md"
                  >
                    {t.successBtn}
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-solfil-gray mb-10 font-normal text-base md:text-lg leading-relaxed">{t.p}</p>
                  <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-solfil-black uppercase tracking-widest ml-1">{t.labelName}</label>
                        <input 
                          required 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          type="text" 
                          autoComplete="name"
                          className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-solfil-orange/20 focus:border-solfil-orange font-normal transition-all outline-none text-sm" 
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-solfil-black uppercase tracking-widest ml-1">{t.labelEmail}</label>
                        <input 
                          required 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          type="email" 
                          autoComplete="email"
                          className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-solfil-orange/20 focus:border-solfil-orange font-normal transition-all outline-none text-sm" 
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-solfil-black uppercase tracking-widest ml-1">{t.labelPhone}</label>
                        <input 
                          required 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange} 
                          type="tel" 
                          placeholder="+351" 
                          autoComplete="tel"
                          className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-solfil-orange/20 focus:border-solfil-orange font-normal transition-all outline-none text-sm" 
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-solfil-black uppercase tracking-widest ml-1">{t.labelType}</label>
                        <div className="relative">
                          <select 
                            name="clientType" 
                            value={formData.clientType} 
                            onChange={handleChange} 
                            className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-solfil-orange/20 focus:border-solfil-orange font-normal transition-all outline-none appearance-none cursor-pointer text-sm"
                          >
                            {t.types.map(type => <option key={type} value={type}>{type}</option>)}
                          </select>
                          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-solfil-gray/40">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-solfil-black uppercase tracking-widest ml-1">{t.labelMsg}</label>
                      <textarea 
                        required 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        rows={4} 
                        className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-solfil-orange/20 focus:border-solfil-orange resize-none font-normal transition-all outline-none text-sm"
                      ></textarea>
                    </div>
                    
                    {status === 'error' && (
                      <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-[10px] font-bold text-center border border-red-100 uppercase tracking-widest animate-pulse">
                        {t.error}
                      </div>
                    )}

                    <button 
                      disabled={status === 'submitting'} 
                      type="submit" 
                      className="w-full bg-solfil-black text-white py-5 rounded-2xl font-bold text-xs md:text-sm hover:bg-solfil-orange disabled:opacity-70 transition-all flex items-center justify-center gap-4 uppercase tracking-[0.3em] shadow-xl active:scale-[0.98] mt-4"
                    >
                      {status === 'submitting' ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {t.submitting}
                        </>
                      ) : t.submit}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
          <div className="hidden lg:block relative overflow-hidden bg-solfil-black">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000" 
              alt="Industrial" 
              className="w-full h-full object-cover grayscale opacity-50 mix-blend-luminosity" 
              loading="lazy" 
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-solfil-black/10 to-solfil-black/20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
