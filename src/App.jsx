import Header from './components/Header';
import argLogoImage from './assets/arg_logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <section className="my-8 text-center">
          <img src={argLogoImage} alt="Arg Comércio de Variedades" className="mx-auto mb-4 w-48 h-48" />
          <h1 className="text-4xl font-bold">Arg Comércio de Variedades</h1>
          <h2 className="text-2xl mb-8">46.916.984/0001-56</h2>
          <h2 className="text-3xl font-bold mb-4">NOSSA MISSÃO:</h2>
          <p className="text-lg italic max-w-3xl mx-auto">
            "Oferecer produtos e serviços diversificados com qualidade, variedade e excelência no atendimento, atendendo às necessidades do dia a dia dos nossos clientes. Com mais de 3 anos de tradição no mercado, buscamos superar as expectativas através de produtos selecionados, preços competitivos e atendimento personalizado, sempre com transparência e comprometimento. Nossa missão é facilitar a vida das pessoas, oferecendo praticidade e qualidade em um só lugar."
          </p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">CONTATO:</h2>
          <p className="text-lg">Telefone: (31) 973198749</p>
          <p className="text-lg">E-mail: contate@corssar.com</p>
          <p className="text-lg"><a href="https://www.instagram.com/argvariedades/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">INSTAGRAM</a></p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">QUEM SOMOS?</h2>
          <p className="text-lg max-w-3xl mx-auto text-justify">
            A <strong className="font-bold">Arg Comércio de Variedades</strong>, registrada sob o CNPJ <strong className="font-bold">46.916.984/0001-56</strong>, foi fundada em <strong className="font-bold">27 de junho de 2022</strong>, na cidade de <strong className="font-bold">Brasil Novo, Pará</strong>. Como uma empresa consolidada no mercado, atuamos no segmento de <strong className="font-bold">comércio varejista de variedades</strong>, oferecendo produtos que unem <strong className="font-bold">qualidade, diversidade e praticidade</strong> para atender às necessidades do dia a dia dos nossos clientes.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Nossa atividade principal, conforme a Receita Federal, é <strong className="font-bold">Comércio Varejista de Mercadorias em Geral (CNAE 47.11-3-02)</strong>, abrangendo desde produtos básicos até itens especializados que complementam e facilitam o dia a dia das pessoas. Com mais de <strong className="font-bold">3 anos de experiência</strong>, nos destacamos pela <strong className="font-bold">diversidade de produtos, preços acessíveis e atendimento personalizado</strong>, sempre buscando atender às necessidades e expectativas dos nossos clientes.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Localizada na <strong className="font-bold">1A Travessa São Sebastião, 1095, Centro, Brasil Novo-PA (CEP 68148-000)</strong>, nossa loja é referência no bairro e região, proporcionando uma experiência de compra completa e personalizada. Valorizamos a <strong className="font-bold">transparência, a qualidade e a satisfação do cliente</strong>, garantindo que cada atendimento seja executado com excelência.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Na <strong className="font-bold">Arg Comércio de Variedades</strong>, acreditamos que <strong className="font-bold">a qualidade de vida reflete a praticidade de quem a proporciona</strong>. Por isso, nosso compromisso vai além da venda de produtos: queremos facilitar o seu dia a dia oferecendo <strong className="font-bold">variedade, qualidade e conveniência</strong>, seja para casa, trabalho ou lazer.
          </p>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Produtos e Serviços Disponíveis:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Produtos para Casa</strong> – Utensílios domésticos que combinam <strong className="font-bold">funcionalidade, design e qualidade</strong>.</li>
            <li><strong className="font-bold">Artigos Pessoais</strong> – Variedade de produtos para cuidados pessoais e bem-estar.</li>
            <li><strong className="font-bold">Eletrônicos e Acessórios</strong> – Produtos tecnológicos para facilitar o dia a dia.</li>
            <li><strong className="font-bold">Atendimento Personalizado</strong> – Consultoria especializada para encontrar exatamente o que você precisa.</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Informações da Empresa:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Razão Social:</strong> Arg Comercio de Variedades LTDA</li>
            <li><strong className="font-bold">CNPJ:</strong> 46.916.984/0001-56</li>
            <li><strong className="font-bold">Data de Abertura:</strong> 27/06/2022</li>
            <li><strong className="font-bold">Porte:</strong> Micro Empresa</li>
            <li><strong className="font-bold">Natureza Jurídica:</strong> Sociedade Empresária Limitada</li>
            <li><strong className="font-bold">Opção pelo MEI:</strong> Não</li>
            <li><strong className="font-bold">Opção pelo Simples:</strong> Não</li>
            <li><strong className="font-bold">Data opção Simples:</strong> 27/06/2022 (Excluído em 31/12/2024)</li>
            <li><strong className="font-bold">Situação Cadastral:</strong> Ativa</li>
            <li><strong className="font-bold">Data Situação Cadastral:</strong> 27/06/2022</li>
            <li><strong className="font-bold">Tipo:</strong> Matriz</li>
            <li><strong className="font-bold">Capital Social:</strong> R$ 32.000,00</li>
            <li><strong className="font-bold">Inscrição Estadual (PA):</strong> 15.987.654-2</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Localização e Contato:</h3>
          <p className="text-lg">📍 <strong className="font-bold">Endereço:</strong> 1A Travessa São Sebastião, 1095, Centro, Brasil Novo-PA, <strong className="font-bold">CEP 68148-000</strong></p>
          <p className="text-lg">📞 <strong className="font-bold">Telefone/WhatsApp:</strong> <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">(31) 973198749</a></p>
          <p className="text-lg mt-4">Na <strong className="font-bold">Arg Comércio de Variedades</strong>, estamos prontos para ajudar você a <strong className="font-bold">encontrar tudo o que precisa</strong>. Visite nossa loja e descubra como <strong className="font-bold">a variedade e qualidade podem facilitar seu dia a dia!</strong> 🛍️✨</p>
        </section>

        <section className="my-8 text-center">
          <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><h2 className="text-3xl font-bold mb-4">Fale conosco:</h2></a>
          {/* Formulário de contato ou link para WhatsApp */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-8 mt-8">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-xl font-bold mb-4">RODAPÉ & POLÍTICA DE PRIVACIDADE</h3>
          <h4 className="text-lg font-bold mb-2">Arg Comercio de Variedades LTDA</h4>
          <p className="text-sm"><strong>CNPJ:</strong> 46.916.984/0001-56</p>
          <p className="text-sm"><strong>Razão Social:</strong> ARG COMERCIO DE VARIEDADES LTDA</p>
          <p className="text-sm"><strong>Data de Abertura:</strong> 27/06/2022</p>
          <p className="text-sm"><strong>Porte:</strong> Micro Empresa</p>
          <p className="text-sm"><strong>Natureza Jurídica:</strong> Sociedade Empresária Limitada</p>
          <p className="text-sm"><strong>Situação Cadastral:</strong> Ativa</p>
          <p className="text-sm"><strong>Tipo:</strong> Matriz</p>
          <p className="text-sm"><strong>Capital Social:</strong> R$ 32.000,00</p>
          <p className="text-sm"><strong>Endereço:</strong> 1A Travessa São Sebastião, 1095, Centro, Brasil Novo-PA</p>
          <p className="text-sm"><strong>CEP:</strong> 68148-000</p>
          <p className="text-sm"><strong>E-mail:</strong> contate@corssar.com</p>
          <p className="text-sm"><strong>Telefone/WhatsApp:</strong> (31) 973198749</p>
          <p className="text-sm italic mt-4">Facilitando seu dia a dia com variedade e qualidade desde 2022</p>

          <h4 className="text-lg font-bold mt-8 mb-2">POLÍTICA DE PRIVACIDADE</h4>
          <p className="text-sm"><strong>Arg Comercio de Variedades LTDA</strong></p>
          <p className="text-sm"><strong>CNPJ:</strong> 46.916.984/0001-56</p>
          <p className="text-sm"><strong>Endereço:</strong> 1A Travessa São Sebastião, 1095, Centro, Brasil Novo-PA, CEP 68148-000</p>

          <h5 className="text-md font-bold mt-4 mb-2">1. Finalidade</h5>
          <p className="text-sm">Esta política descreve como coletamos, utilizamos e protegemos os dados pessoais dos clientes que interagem conosco por meio de WhatsApp, e-mail, telefone, redes sociais ou durante visitas à nossa loja.</p>

          <h5 className="text-md font-bold mt-4 mb-2">2. Dados Coletados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Informações fornecidas voluntariamente:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Nome, telefone, e-mail, endereço (para orçamentos ou entregas).</li>
                <li>Preferências de produtos e necessidades de compra.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Dados automáticos:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Registro de interações para atendimento e melhoria de serviços.</li>
                <li>Dados de navegação (se aplicável a site ou redes sociais).</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">3. Uso de WhatsApp, Telefone e E-mail</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Finalidades:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Atendimento ao cliente, orçamentos, consulta de produtos e confirmação de entregas.</li>
                <li>Não enviamos mensagens promocionais não solicitadas sem consentimento.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Armazenamento:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Dados de contato e interações são armazenados por <strong className="font-bold">12 meses</strong>, exceto quando exigido por lei.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">4. Compartilhamento de Dados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Não comercializamos ou compartilhamos dados com terceiros para fins publicitários.</li>
            <li><strong className="font-bold">Exceções:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Parceiros de logística (apenas informações necessárias para entrega).</li>
                <li>Autoridades legais, mediante requisição formal.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">5. Direitos do Usuário (LGPD)</h5>
          <p className="text-sm">Você pode solicitar:</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Acesso ou correção dos seus dados.</li>
            <li>Exclusão (exceto quando a lei exigir retenção).</li>
            <li>Revogação de consentimento (via e-mail ou telefone).</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">6. Segurança</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Dados protegidos com acesso restrito à equipe autorizada.</li>
            <li>Não solicitamos informações sensíveis (como CPF ou cartões de crédito) por mensagens não criptografadas.</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">7. Alterações nesta Política</h5>
          <p className="text-sm">Atualizações serão comunicadas em nossos canais oficiais.</p>

          <h5 className="text-md font-bold mt-4 mb-2">8. Contato</h5>
          <p className="text-sm">Dúvidas ou solicitações sobre seus dados?</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">WhatsApp:</strong> (31) 973198749</li>
            <li><strong className="font-bold">E-mail:</strong> contate@corssar.com</li>
          </ul>
          <p className="text-sm mt-4">© 2024 Arg Comércio de Variedades. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

