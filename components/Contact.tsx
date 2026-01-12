
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clientType: 'Empresa / Profissional',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Usando formsubmit.co para envio de email real sem necessidade de backend próprio
      const response = await fetch('https://formsubmit.co/ajax/tpacheco@aorubro.pt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'Pedido de Contacto via Web',
          _template: 'table', // Formatação de tabela no corpo do email
          _captcha: 'false'   // Simplifica o processo removendo o captcha
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', clientType: 'Empresa / Profissional', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-6">
      <div className="bg-white rounded-[48px] overflow-hidden shadow-sm border border-gray-100">
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="p-12 lg:p-20">
            <div className="max-w-xl">
              <h3 className="text-solfil-orange font-semibold tracking-[0.4em] text-[10px] mb-6 uppercase">CONTACTE-NOS</h3>
              <h2 className="text-4xl font-light mb-6 uppercase text-solfil-black tracking-tighter">VAMOS CONSTRUIR<br /><span className="font-semibold">ALGO GRANDE</span><span className="font-bold text-solfil-orange">.</span></h2>
              
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-100 p-10 rounded-3xl animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 text-center mb-2 uppercase tracking-tight">Mensagem Enviada!</h3>
                  <p className="text-green-700 text-center font-light leading-relaxed">
                    Agradecemos o seu contacto. O seu pedido foi enviado com sucesso para os nossos escritórios (tpacheco@aorubro.pt). Responderemos o mais brevemente possível.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 w-full py-4 border border-green-200 text-green-800 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-green-100 transition-colors"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-solfil-gray mb-12 font-light text-lg">Tem um projeto em mãos ou precisa de aconselhamento técnico?<br />A nossa equipa de especialistas está pronta para ajudar.</p>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-semibold text-solfil-black uppercase tracking-wider">Nome Completo*</label>
                        <input 
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          type="text" 
                          placeholder="Seu Nome" 
                          className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 focus:ring-1 focus:ring-solfil-orange transition-all font-light" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-semibold text-solfil-black uppercase tracking-wider">E-mail*</label>
                        <input 
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          type="email" 
                          placeholder="seu@email.com" 
                          className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 focus:ring-1 focus:ring-solfil-orange transition-all font-light" 
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-semibold text-solfil-black uppercase tracking-wider">Contacto Telefónico*</label>
                        <div className="flex gap-2">
                           <div className="w-14 bg-gray-50 rounded-xl flex items-center justify-center font-medium text-xs">🇵🇹</div>
                           <input 
                            required
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel" 
                            placeholder="+351" 
                            className="flex-1 bg-gray-50 border-none rounded-xl px-5 py-4 focus:ring-1 focus:ring-solfil-orange transition-all font-light" 
                           />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-semibold text-solfil-black uppercase tracking-wider">Tipo de Cliente</label>
                        <select 
                          name="clientType"
                          value={formData.clientType}
                          onChange={handleChange}
                          className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 focus:ring-1 focus:ring-solfil-orange transition-all appearance-none font-light"
                        >
                          <option>Empresa / Profissional</option>
                          <option>Particular</option>
                          <option>Arquiteto / Projetista</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold text-solfil-black uppercase tracking-wider">Mensagem / Lista de Materiais</label>
                      <textarea 
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4} 
                        placeholder="Como podemos ajudar no seu projeto?" 
                        className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 focus:ring-1 focus:ring-solfil-orange transition-all resize-none font-light"
                      ></textarea>
                    </div>

                    {status === 'error' && (
                      <p className="text-red-500 text-xs font-bold uppercase tracking-widest bg-red-50 p-4 rounded-xl">
                        Ocorreu um erro ao enviar. Por favor, verifique os campos ou tente novamente mais tarde.
                      </p>
                    )}

                    <button 
                      disabled={status === 'submitting'}
                      type="submit"
                      className="w-full bg-solfil-black text-white py-5 rounded-2xl font-semibold text-sm hover:bg-solfil-orange transition-all flex items-center justify-center gap-4 group uppercase tracking-[0.3em] shadow-lg hover:shadow-solfil-orange/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          A ENVIAR...
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        </>
                      ) : (
                        <>
                          ENVIAR MENSAGEM
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          <div className="hidden lg:block relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000" 
              alt="Industrial Structure" 
              className="w-full h-full object-cover grayscale opacity-80"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-solfil-orange/5 mix-blend-multiply"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
